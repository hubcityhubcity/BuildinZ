// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title BuildinZGenesis
 * @notice PRE-LAUNCH CONTRACT PROTOTYPE. NOT AUDITED OR DEPLOYMENT-READY.
 * @dev Permanently associates one ERC-721 token with a forward-only Stage I -> II -> III.
 * The per-edition release files must be uploaded and independently verified before
 * any owner enables sale or evolution. BRICK-based payment/points policy is not
 * implemented here: upgrades are currently fee-free and DISABLED by default.
 * This contract MUST NOT be used for a public mint until the evolution economics
 * and independent security-review gates have been completed.
 */
contract BuildinZGenesis is ERC721, Ownable2Step, ReentrancyGuard {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 1_000;
    uint256 public constant MAX_BATCH = 20;

    uint256 public nextTokenId = 1;
    uint256 public mintPriceWei;
    bool public publicMintEnabled;
    bool public evolutionsEnabled;
    bool public metadataFrozen;

    string private _metadataRoot;
    mapping(uint256 => uint8) public stageOf;

    error SaleClosed();
    error EvolutionClosed();
    error MetadataNotFrozen();
    error MetadataAlreadyFrozen();
    error BadMetadataRoot();
    error InvalidQuantity();
    error SoldOut();
    error IncorrectPayment();
    error NotTokenOwner();
    error FinalStageReached();
    error InvalidRecipient();
    error WithdrawalFailed();

    // ERC-4906 metadata refresh notification (not indexed in the standard).
    event MetadataUpdate(uint256 _tokenId);
    event MetadataRootChanged(string newRoot);
    event MetadataPermanentlyFrozen(string frozenRoot);
    event SaleStateChanged(bool enabled);
    event EvolutionStateChanged(bool enabled);
    event MintPriceChanged(uint256 newPriceWei);
    event StageEvolved(uint256 indexed tokenId, uint8 previousStage, uint8 newStage);
    event FundsWithdrawn(address indexed recipient, uint256 amount);

    constructor(address initialOwner)
        ERC721("BuildinZ Genesis", "BLDZ")
        Ownable(initialOwner)
    {}

    function totalMinted() external view returns (uint256) {
        return nextTokenId - 1;
    }

    function metadataRoot() external view returns (string memory) {
        return _metadataRoot;
    }

    /**
     * @notice Metadata layout: ipfs://<CID>/<token_id>/<stage>.json
     * @dev A stored token ID is never replaced during evolution or transfer.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        if (bytes(_metadataRoot).length == 0) revert BadMetadataRoot();
        return string.concat(
            _metadataRoot,
            tokenId.toString(),
            "/",
            uint256(stageOf[tokenId]).toString(),
            ".json"
        );
    }

    function setMetadataRoot(string calldata newRoot) external onlyOwner {
        if (metadataFrozen) revert MetadataAlreadyFrozen();

        bytes memory root = bytes(newRoot);
        bytes memory prefix = bytes("ipfs://");
        if (root.length <= prefix.length) revert BadMetadataRoot();
        for (uint256 i; i < prefix.length; ++i) {
            if (root[i] != prefix[i]) revert BadMetadataRoot();
        }
        if (root[root.length - 1] != bytes1("/")) revert BadMetadataRoot();

        _metadataRoot = newRoot;
        emit MetadataRootChanged(newRoot);
    }

    function freezeMetadata() external onlyOwner {
        if (metadataFrozen) revert MetadataAlreadyFrozen();
        if (bytes(_metadataRoot).length == 0) revert BadMetadataRoot();
        metadataFrozen = true;
        emit MetadataPermanentlyFrozen(_metadataRoot);
    }

    function setMintPriceWei(uint256 newPriceWei) external onlyOwner {
        mintPriceWei = newPriceWei;
        emit MintPriceChanged(newPriceWei);
    }

    function setPublicMintEnabled(bool enabled) external onlyOwner {
        if (enabled && !metadataFrozen) revert MetadataNotFrozen();
        publicMintEnabled = enabled;
        emit SaleStateChanged(enabled);
    }

    function setEvolutionsEnabled(bool enabled) external onlyOwner {
        if (enabled && !metadataFrozen) revert MetadataNotFrozen();
        evolutionsEnabled = enabled;
        emit EvolutionStateChanged(enabled);
    }

    function mint(uint256 quantity) external payable nonReentrant {
        if (!publicMintEnabled) revert SaleClosed();
        if (msg.value != mintPriceWei * quantity) revert IncorrectPayment();
        _mintBatch(msg.sender, quantity);
    }

    /// @notice Reservation allocation is not finalized; owner mint is capped by global supply.
    function ownerMint(address recipient, uint256 quantity) external onlyOwner nonReentrant {
        if (!metadataFrozen) revert MetadataNotFrozen();
        _mintBatch(recipient, quantity);
    }

    function _mintBatch(address recipient, uint256 quantity) internal {
        if (recipient == address(0)) revert InvalidRecipient();
        if (quantity == 0 || quantity > MAX_BATCH) revert InvalidQuantity();
        if (nextTokenId + quantity - 1 > MAX_SUPPLY) revert SoldOut();

        uint256 start = nextTokenId;
        nextTokenId = start + quantity;
        for (uint256 i; i < quantity; ++i) {
            uint256 tokenId = start + i;
            stageOf[tokenId] = 1;
            _safeMint(recipient, tokenId);
        }
    }

    /**
     * @notice Test-phase evolution: fee-free, holder-only and disabled by default.
     * @dev BRICK/points upgrade economics remain a blocking production requirement.
     * Ownership changes NEVER reset stageOf[tokenId].
     */
    function evolve(uint256 tokenId) external {
        if (!evolutionsEnabled) revert EvolutionClosed();
        if (ownerOf(tokenId) != msg.sender) revert NotTokenOwner();
        uint8 oldStage = stageOf[tokenId];
        if (oldStage >= 3) revert FinalStageReached();
        uint8 newStage = oldStage + 1;
        stageOf[tokenId] = newStage;
        emit StageEvolved(tokenId, oldStage, newStage);
        emit MetadataUpdate(tokenId);
    }

    function withdraw(address payable recipient) external onlyOwner nonReentrant {
        if (recipient == address(0)) revert InvalidRecipient();
        uint256 amount = address(this).balance;
        (bool sent, ) = recipient.call{value: amount}("");
        if (!sent) revert WithdrawalFailed();
        emit FundsWithdrawn(recipient, amount);
    }

    /// @dev ERC-4906 ERC-165 identification: 0x49064906.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return interfaceId == 0x49064906 || super.supportsInterface(interfaceId);
    }
}
