// Property of Web3Dev Strategy Consulting at web3dev.click
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    const Rewards = await hre.ethers.getContractFactory("Rewards");
    const rewardTokenAddress = "0xYourRewardTokenAddress"; // Replace with your ERC20 token address
    const rewards = await Rewards.deploy(rewardTokenAddress);

    await rewards.deployed();
    console.log("Rewards deployed to:", rewards.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });