gamified-rewards-platform/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   ├── WalletConnect.js
│   │   │   └── Leaderboard.js
│   │   ├── utils/
│   │   │   └── interact.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── contracts/
│   ├── Rewards.sol
│   └── deploy.js
├── scripts/
│   └── deploy.js
├── hardhat.config.js
├── .env
└── README.md

# Gamified Rewards Platform

A decentralized platform where users earn rewards for completing tasks.

## Features
- Connect wallet
- Complete tasks and earn tokens
- Claim rewards
- Prevent double task completions
- Real-time UI updates

## Setup Instructions

### Prerequisites
1. Install Node.js and npm.
2. Install Hardhat globally:
   ```bash
   npm install -g hardhat
   
