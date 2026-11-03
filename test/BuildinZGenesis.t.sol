// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {BuildinZGenesis} from "../contracts/BuildinZGenesis.sol";

contract BuildinZGenesisTest is Test {
    BuildinZGenesis internal collection;
    address internal alice = makeAddr("alice");
    address internal bob = makeAddr("bob");

    function setUp() public {
        collection = new BuildinZGenesis(address(this));
        vm.deal(alice, 10 ether);
        vm.deal(bob, 10 ether);
    }

    function configureMetadata() internal {
        collection.setMetadataRoot("ipfs://bafyexamplecid/");
        collection.freezeMetadata();
    }

    function testDefaultGatesAreClosed() public {
        assertEq(collection.MAX_SUPPLY(), 1_000);
        assertEq(collection.nextTokenId(), 1);
        assertEq(collection.totalMinted(), 0);
        assertFalse(collection.publicMintEnabled());
        assertFalse(collection.evolutionsEnabled());
        vm.prank(alice);
        vm.expectRevert(BuildinZGenesis.SaleClosed.selector);
        collection.mint(1);
    }

    function testMintRequiresFrozenMetadata() public {
        vm.expectRevert(BuildinZGenesis.MetadataNotFrozen.selector);
        collection.setPublicMintEnabled(true);
        vm.expectRevert(BuildinZGenesis.MetadataNotFrozen.selector);
        collection.ownerMint(alice, 1);
        vm.expectRevert(BuildinZGenesis.MetadataNotFrozen.selector);
        collection.setEvolutionsEnabled(true);
    }

    function testMetadataRootMustBeValidIPFSFolderAndCannotChangeAfterFreeze() public {
        vm.expectRevert(BuildinZGenesis.BadMetadataRoot.selector);
        collection.setMetadataRoot("https://example.com/");
        vm.expectRevert(BuildinZGenesis.BadMetadataRoot.selector);
        collection.setMetadataRoot("ipfs://bafyexamplecid");
        configureMetadata();
        assertEq(collection.metadataRoot(), "ipfs://bafyexamplecid/");
        vm.expectRevert(BuildinZGenesis.MetadataAlreadyFrozen.selector);
        collection.setMetadataRoot("ipfs://changed/");
        vm.expectRevert(BuildinZGenesis.MetadataAlreadyFrozen.selector);
        collection.freezeMetadata();
    }

    function testMintPriceAndTokenURI() public {
        configureMetadata();
        collection.setMintPriceWei(0.1 ether);
        collection.setPublicMintEnabled(true);
        vm.expectRevert(BuildinZGenesis.IncorrectPayment.selector);
        vm.prank(alice);
        collection.mint{value: 0.01 ether}(1);
    }

    function testMintPaymentAndStageOneURI() public {
        configureMetadata();
        collection.setMintPriceWei(0.1 ether);
        collection.setPublicMintEnabled(true);
        vm.prank(alice);
        collection.mint{value: 0.2 ether}(2);
        assertEq(collection.ownerOf(1), alice);
        assertEq(collection.ownerOf(2), alice);
        assertEq(collection.stageOf(1), 1);
        assertEq(collection.totalMinted(), 2);
        assertEq(collection.tokenURI(1), "ipfs://bafyexamplecid/1/1.json");
        assertEq(address(collection).balance, 0.2 ether);
    }

    function testNoZeroOrOversizedBatch() public {
        configureMetadata();
        vm.expectRevert(BuildinZGenesis.InvalidQuantity.selector);
        collection.ownerMint(alice, 0);
        vm.expectRevert(BuildinZGenesis.InvalidQuantity.selector);
        collection.ownerMint(alice, 21);
    }

    function testOnlyHolderCanEvolveAndEvolutionSurvivesTransfer() public {
        configureMetadata();
        collection.ownerMint(alice, 1);
        collection.setEvolutionsEnabled(true);
        vm.expectRevert(BuildinZGenesis.NotTokenOwner.selector);
        vm.prank(bob);
        collection.evolve(1);
    }

    function testTwoForwardOnlyEvolutionsPersistAcrossResale() public {
        configureMetadata();
        collection.ownerMint(alice, 1);
        vm.prank(alice);
        vm.expectRevert(BuildinZGenesis.EvolutionClosed.selector);
        collection.evolve(1);
        collection.setEvolutionsEnabled(true);
        vm.prank(alice);
        collection.evolve(1);
        assertEq(collection.stageOf(1), 2);
        assertEq(collection.tokenURI(1), "ipfs://bafyexamplecid/1/2.json");

        vm.prank(alice);
        collection.transferFrom(alice, bob, 1);
        assertEq(collection.ownerOf(1), bob);
        assertEq(collection.stageOf(1), 2);
        assertEq(collection.tokenURI(1), "ipfs://bafyexamplecid/1/2.json");

        vm.prank(bob);
        collection.evolve(1);
        assertEq(collection.stageOf(1), 3);
        assertEq(collection.tokenURI(1), "ipfs://bafyexamplecid/1/3.json");
        vm.expectRevert(BuildinZGenesis.FinalStageReached.selector);
        vm.prank(bob);
        collection.evolve(1);
    }

    function testOnlyOwnerMayChangeSaleAndWithdraw() public {
        configureMetadata();
        vm.prank(alice);
        vm.expectRevert();
        collection.setPublicMintEnabled(true);
        vm.prank(alice);
        vm.expectRevert();
        collection.setMintPriceWei(1);
        collection.setMintPriceWei(0.25 ether);
        collection.setPublicMintEnabled(true);
        vm.prank(alice);
        collection.mint{value: 0.25 ether}(1);
        vm.prank(alice);
        vm.expectRevert();
        collection.withdraw(payable(alice));
        uint256 beforeBalance = bob.balance;
        collection.withdraw(payable(bob));
        assertEq(bob.balance, beforeBalance + 0.25 ether);
        assertEq(address(collection).balance, 0);
    }

    function testERC4906Interface() public view {
        assertTrue(collection.supportsInterface(0x49064906));
        assertTrue(collection.supportsInterface(0x80ac58cd));
    }

    function testSupplyHardCap() public {
        configureMetadata();
        for (uint256 i; i < 50; ++i) {
            collection.ownerMint(alice, 20);
        }
        assertEq(collection.totalMinted(), 1000);
        assertEq(collection.ownerOf(1000), alice);
        vm.expectRevert(BuildinZGenesis.SoldOut.selector);
        collection.ownerMint(alice, 1);
    }
}
