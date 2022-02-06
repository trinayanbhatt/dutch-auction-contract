
const hre = require("hardhat");

async function main() {

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  const nftAddress = nft.address

  const DuctchAuction = await hre.ethers.getContractFactory("DutchAuction");
  const ductchAuction = await DuctchAuction.deploy(1000000, 1, nftAddress, 101);
  await ductchAuction.deployed();

  const ductchAuctionAddress = ductchAuction.address

  await nft.approve(ductchAuctionAddress,101)

  console.log("Dutch Auction contract deployed to:", ductchAuction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
