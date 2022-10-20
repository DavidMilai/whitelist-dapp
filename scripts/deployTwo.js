const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist.sol");

  const deployedContract = await whitelistContract.deploy(20);

  await deployedContract.deployed();

  console.log("contract is deployed to", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
