const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DutchAuction", function () {
  it("Should create and execute dutch auction", async function () {
    const NFT = await hre.ethers.getContractFactory("ERC721");
    const nft = await NFT.deploy();
    await nft.deployed();
    const nftAddress = nft.address

    console.log("NFT contract deployed to:", nft.address);
    
    const DuctchAuction = await hre.ethers.getContractFactory("DutchAuction");
    const ductchAuction = await DuctchAuction.deploy(1000000, 1, nftAddress, 101);
    await ductchAuction.deployed();

    const ductchAuctionAddress = ductchAuction.address

    await nft.approve(ductchAuctionAddress,101)

    const nftPrice = await ductchAuction.getPrice()
    
    console.log("NFT current price at ductch auction:", nftPrice);

  });
});