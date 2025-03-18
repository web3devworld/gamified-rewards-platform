// Property of Web3Dev Strategy Consulting at web3dev.click
import { useState } from "react";

const WalletConnect = ({ account, setAccount }) => {
    const connect = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Wallet connection failed:", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <div>
            {account ? (
                <p>Connected: {account}</p>
            ) : (
                <button onClick={connect}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;