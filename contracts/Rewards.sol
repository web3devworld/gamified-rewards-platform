// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Property of Web3Dev Strategy Consulting at web3dev.click
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Rewards {
    address public owner;
    IERC20 public rewardToken;

    struct Task {
        string description;
        uint256 rewardAmount;
        bool isActive;
    }

    mapping(uint256 => Task) public tasks;
    mapping(address => uint256) public userRewards;
    mapping(address => mapping(uint256 => bool)) public hasCompletedTask;

    uint256 public taskCount = 0;

    event TaskCompleted(address indexed user, uint256 taskId);

    constructor(address _rewardToken) {
        owner = msg.sender;
        rewardToken = IERC20(_rewardToken);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function addTask(string memory description, uint256 rewardAmount) external onlyOwner {
        tasks[taskCount] = Task(description, rewardAmount, true);
        taskCount++;
    }

    function completeTask(uint256 taskId) external {
        Task storage task = tasks[taskId];
        require(task.isActive, "Task not active");
        require(!hasCompletedTask[msg.sender][taskId], "Task already completed");

        hasCompletedTask[msg.sender][taskId] = true;
        userRewards[msg.sender] += task.rewardAmount;

        emit TaskCompleted(msg.sender, taskId);
    }

    function claimRewards() external {
        uint256 amount = userRewards[msg.sender];
        require(amount > 0, "No rewards to claim");
        userRewards[msg.sender] = 0;
        rewardToken.transfer(msg.sender, amount);
    }
}