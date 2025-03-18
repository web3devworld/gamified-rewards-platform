// Property of Web3Dev Strategy Consulting at web3dev.click
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        polygon: {
            url: process.env.POLYGON_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};