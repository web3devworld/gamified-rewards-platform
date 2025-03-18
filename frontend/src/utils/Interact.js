// Property of Web3Dev Strategy Consulting at web3dev.click
import { ethers } from "ethers";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const abi = []; // Add ABI here

let provider, signer, contract;

if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
}

export const connectWallet = async () => {
    try {
        await provider.send("eth_requestAccounts", []);
        return await signer.getAddress();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        return null;
    }
};

export const fetchTasks = async () => {
    const taskCount = await contract.taskCount();
    const tasks = [];
    for (let i = 0; i < taskCount; i++) {
        const task = await contract.tasks(i);
        tasks.push(task);
    }
    return tasks;
};

export const completeTask = async (taskId) => {
    const tx = await contract.completeTask(taskId);
    await tx.wait();
};

export const claimRewards = async () => {
    try {
        const tx = await contract.claimRewards();
        await tx.wait();
        return true;
    } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed. Check your wallet balance or gas fees.");
        return false;
    }
};