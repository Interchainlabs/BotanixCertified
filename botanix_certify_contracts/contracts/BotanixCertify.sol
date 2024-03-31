// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BotanixCertify is
    ERC721,
    ERC721URIStorage,
    ERC721Enumerable,
    ERC721Pausable,
    Ownable
{
    uint256 private _nextTokenId;
    mapping(string => uint8) hashes;

    event TokenCreated(
        uint256 indexed tokenId,
        address indexed owner,
        string tokenURI,
        uint256 price
    );
    event CertificationTransferred(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );
    event CertificationRenounced(
        address indexed owner,
        uint256 indexed tokenId
    );

    constructor(address initialOwner)
        ERC721("BotanixCertify", "BCT")
        Ownable(initialOwner)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "sapphire-quickest-jaguar-787.mypinata.cloud/ipfs/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function certify(string memory IpfsHash) public payable {
        require(msg.value >= 0.00055 ether, "Not enough balance");
        require(hashes[IpfsHash] != 1, "Certification already exist chain");
        hashes[IpfsHash] = 1;

        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, IpfsHash);
        emit TokenCreated(tokenId, msg.sender, IpfsHash, msg.value);
    }

    function getUserSubmissions(address owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(owner);
        uint256[] memory ownerTokens = new uint256[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            ownerTokens[i] = tokenOfOwnerByIndex(owner, i);
        }

        return ownerTokens;
    }

    function getAllCertifications() public view returns (uint256[] memory) {
        uint256 tokenCount = totalSupply();
        uint256[] memory contractTokens = new uint256[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            contractTokens[i] = tokenByIndex(i);
        }

        return contractTokens;
    }

    function transferCertification(address to, uint256 tokenId) public {
        require(ownerOf(tokenId) != address(0), "Submission does not exist");
        require(
            ownerOf(tokenId) == msg.sender,
            "Sender is not the owner of the Certification"
        );

        // Transfer the token using safeTransferFrom
        safeTransferFrom(msg.sender, to, tokenId);
        emit CertificationTransferred(msg.sender, to, tokenId);
    }

    function renounceCertificationRights(uint256 tokenId) public {
        require(ownerOf(tokenId) != address(0), "Certification does not exist");
        require(
            ownerOf(tokenId) == msg.sender,
            "Sender is not the owner of the Certification"
        );

        // Transfer the token to the owner of the contract
        safeTransferFrom(msg.sender, owner(), tokenId);
        emit CertificationRenounced(msg.sender, tokenId);
    }

    function withdraw(address payable _to) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds");
        require(_to != address(0), "Invalid address");
        _to.transfer(balance);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    )
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
