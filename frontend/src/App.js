// Property of Web3Dev Strategy Consulting at web3dev.click
import React, { useEffect, useState } from "react";
import { connectWallet, fetchTasks, completeTask, claimRewards } from "./utils/interact";
import TaskList from "./components/TaskList";
import WalletConnect from "./components/WalletConnect";

function App() {
    const [account, setAccount] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        };
        loadTasks();
    }, []);

    const handleCompleteTask = async (taskId) => {
        await completeTask(taskId);
        setTasks(await fetchTasks());
    };

    const handleClaimRewards = async () => {
        await claimRewards();
        alert("Rewards claimed!");
    };

    return (
        <div>
            <h1>Gamified Rewards Platform</h1>
            <WalletConnect account={account} setAccount={setAccount} />
            <TaskList tasks={tasks} completeTask={handleCompleteTask} />
            <button onClick={handleClaimRewards}>Claim Rewards</button>
        </div>
    );
}

export default App;