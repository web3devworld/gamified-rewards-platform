// Property of Web3Dev Strategy Consulting at web3dev.click
const TaskList = ({ tasks, completeTask }) => {
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.description} - {task.rewardAmount} tokens
                        <button onClick={() => completeTask(task.id)}>Complete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;