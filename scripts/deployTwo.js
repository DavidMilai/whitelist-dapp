const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

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

  //0xfE16a8D847eBeC7110D03C3fE0239872B44dEBe4

  // 0x857287f27bd0E3D80f6CdC9D3e3d209159181d33
