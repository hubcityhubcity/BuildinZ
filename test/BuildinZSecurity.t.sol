// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {BuildinZGenesis} from "../contracts/BuildinZGenesis.sol";

contract RejectingNFTReceiver is IERC721Receiver {
    error Rejected();
    function onERC721Received(address, address, uint256, bytes calldata)
        external pure returns (bytes4)
    {
        revert Rejected();
    }
}

contract ReenteringNFTReceiver is IERC721Receiver {
    BuildinZGenesis public immutable collection;
    bool public attempted;
    bool public blocked;

    constructor(BuildinZGenesis target) { collection = target; }

    function onERC721Received(address, address, uint256, bytes calldata)
        external returns (bytes4)
    {
        attempted = true;
        // The global mint nonReentrant gate must prevent minting from a receiver callback.
        try collection.mint(1) {
            blocked = false;
        } catch {
            blocked = true;
        }
        return IERC721Receiver.onERC721Received.selector;
    }
}

contract RejectingEtherReceiver {
    error RejectedEther();
    receive() external payable { revert RejectedEther(); }
}

contract BuildinZGenesisSecurityTest is Test {
    BuildinZGenesis internal nft;
    address internal alice = makeAddr("alice");
    address internal bob = makeAddr("bob");

    function setUp() public {
        nft = new BuildinZGenesis(address(this));
        vm.deal(alice, 100 ether);
    }

    function freeze() internal {
        nft.setMetadataRoot("ipfs://bafyexamplecid/");
        nft.freezeMetadata();
    }

    function testReceiverRevertRollsBackSupplyAndNoGhostToken() public {
        freeze();
        RejectingNFTReceiver rejecting = new RejectingNFTReceiver();
        vm.expectRevert(RejectingNFTReceiver.Rejected.selector);
        nft.ownerMint(address(rejecting), 1);
        assertEq(nft.totalMinted(), 0);
        assertEq(nft.nextTokenId(), 1);
        assertEq(nft.stageOf(1), 0);
        vm.expectRevert();
        nft.ownerOf(1);
    }

    function testReceiverCannotReenterPublicMint() public {
        freeze();
        nft.setPublicMintEnabled(true);
        ReenteringNFTReceiver malicious = new ReenteringNFTReceiver(nft);
        nft.ownerMint(address(malicious), 1);
        assertTrue(malicious.attempted());
        assertTrue(malicious.blocked());
        assertEq(nft.totalMinted(), 1);
        assertEq(nft.ownerOf(1), address(malicious));
        assertEq(nft.stageOf(1), 1);
    }

    function testFailedWithdrawalRollsBackAndKeepsFunds() public {
        freeze();
        nft.setMintPriceWei(0.2 ether);
        nft.setPublicMintEnabled(true);
        vm.prank(alice);
        nft.mint{value: 0.2 ether}(1);
        RejectingEtherReceiver rejecting = new RejectingEtherReceiver();
        vm.expectRevert(BuildinZGenesis.WithdrawalFailed.selector);
        nft.withdraw(payable(address(rejecting)));
        assertEq(address(nft).balance, 0.2 ether);
    }

    function testTwoStepOwnershipRequiresAcceptanceAndRevokesFormerOwner() public {
        nft.transferOwnership(bob);
        assertEq(nft.owner(), address(this));
        assertEq(nft.pendingOwner(), bob);
        vm.prank(bob);
        vm.expectRevert();
        nft.setMintPriceWei(1);
        vm.prank(bob);
        nft.acceptOwnership();
        assertEq(nft.owner(), bob);
        assertEq(nft.pendingOwner(), address(0));
        vm.expectRevert();
        nft.setMintPriceWei(2);
        vm.prank(bob);
        nft.setMintPriceWei(3);
        assertEq(nft.mintPriceWei(), 3);
    }

    function testSingleTokenEvolutionCannotChangeAnotherTokensState() public {
        freeze();
        nft.ownerMint(alice, 3);
        nft.setEvolutionsEnabled(true);
        vm.prank(alice);
        nft.evolve(2);
        vm.prank(alice);
        nft.evolve(2);
        assertEq(nft.stageOf(1), 1);
        assertEq(nft.stageOf(2), 3);
        assertEq(nft.stageOf(3), 1);
    }

    function testApprovedOperatorStillCannotEvolveWithoutHolderConsent() public {
        freeze();
        nft.ownerMint(alice, 1);
        nft.setEvolutionsEnabled(true);
        vm.prank(alice);
        nft.approve(bob, 1);
        vm.prank(bob);
        vm.expectRevert(BuildinZGenesis.NotTokenOwner.selector);
        nft.evolve(1);
        assertEq(nft.stageOf(1), 1);
    }

    function testTokenURIMustRejectNonexistentToken() public {
        freeze();
        vm.expectRevert();
        nft.tokenURI(1);
        nft.ownerMint(alice, 1);
        vm.expectRevert();
        nft.tokenURI(2);
        assertEq(nft.tokenURI(1), "ipfs://bafyexamplecid/1/1.json");
    }

    function testFuzzPaidMintQuantityAndPrice(uint8 rawQty, uint96 rawPrice) public {
        uint256 qty = bound(uint256(rawQty), 1, 20);
        uint256 price = bound(uint256(rawPrice), 0, 1 ether);
        freeze();
        nft.setMintPriceWei(price);
        nft.setPublicMintEnabled(true);
        vm.prank(alice);
        nft.mint{value: qty * price}(qty);
        assertEq(nft.totalMinted(), qty);
        assertEq(address(nft).balance, qty * price);
        for (uint256 id = 1; id <= qty; ++id) {
            assertEq(nft.ownerOf(id), alice);
            assertEq(nft.stageOf(id), 1);
        }
    }

    function testFuzzEvolutionMonotonicAcrossTransfer(uint8 rawSteps, uint8 rawId) public {
        uint256 steps = bound(uint256(rawSteps), 0, 2);
        uint256 tokenId = bound(uint256(rawId), 1, 20);
        freeze();
        nft.ownerMint(alice, 20);
        nft.setEvolutionsEnabled(true);
        for (uint256 i; i < steps; ++i) {
            vm.prank(alice);
            nft.evolve(tokenId);
        }
        uint256 stage = nft.stageOf(tokenId);
        vm.prank(alice);
        nft.transferFrom(alice, bob, tokenId);
        assertEq(nft.stageOf(tokenId), stage);
        assertEq(nft.ownerOf(tokenId), bob);
        assertEq(
            nft.tokenURI(tokenId),
            string.concat("ipfs://bafyexamplecid/", vm.toString(tokenId), "/", vm.toString(stage), ".json")
        );
    }

    function testFuzzInvalidOwnerMintQuantity(uint256 quantity) public {
        if (quantity >= 1 && quantity <= 20) return;
        freeze();
        vm.expectRevert(BuildinZGenesis.InvalidQuantity.selector);
        nft.ownerMint(alice, quantity);
        assertEq(nft.totalMinted(), 0);
    }
}
