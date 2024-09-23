# Blockchain Simulation Application - MVP Development Overview
I want to create a next.js application that focuses on simulating a blockchain environment. Using a React frontend with shadcn UI components, and Next.js API routes with a local database, the app allows users to connect their wallets via WalletConnect and sign transactions. While no actual transactions are posted to the blockchain, the frontend sends transaction requests to the user's wallet, listening for whether the request is accepted, declined, or fails. Regardless of the outcome, the transaction is assumed to succeed, and the backend stores it in a local database that mimics a blockchain structure. This mock blockchain emulates transactions, and wallets, enabling accurate retrieval of currency transactions, NFT balances and sending/receiving NFTs.

Each time an instruction is marked with @codebase, you will first review the Prerequisites and use it to tailor your changes to the current state of the codebase. Pay attention to a coherent and clean code structure and always try to use existing code if possible.

## Prerequisites
my-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── transactions/
│   │   │   │   └── route.ts
│   │   │   ├── nfts/
│   │   │   │   └── route.ts
│   │   │   └── wallet/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── MainLayout.tsx
│   │   ├── wallet/
│   │   │   ├── ConnectButton.tsx
│   │   │   └── WalletConnectButton.tsx
│   │   ├── transactions/
│   │   │   └── TransactionHistory.tsx
│   │   ├── nft/
│   │   │   ├── NFTGallery.tsx
│   │   │   └── NFTTransfer.tsx
│   │   └── SessionProviderWrapper.tsx
│   ├── config/
│   │   ├── index.tsx
│   │   └── siweConfig.ts
│   ├── context/
│   │   └── index.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── walletConnect.ts
│   │   └── mockBlockchain.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
├── prisma/
│   └── schema.prisma
├── public/
│   └── ...
├── documentation/
│   ├── overview.md
│   └── frontend.md
├── .env
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

## Setup and Configuration

- [x] Initialize a new Next.js project with TypeScript
- [x] Set up Tailwind CSS for styling
- [x] Install and configure shadcn UI components
- [x] Set up a local database SQLite
- [x] Install and configure Prisma ORM for database management

## Frontend Development: Setup

- [x] Create the main layout component
- [x] Implement the home page with a brief explanation of the app
- [x] Create a wallet connection component using WalletConnect
- [x] Implement SIWE and One-Click Auth


## Backend Development

- [ ] Set up API routes for handling transactions
- [x] Create database schema for storing transactions and NFTs
- [ ] Develop API endpoint for submitting transactions
- [ ] Implement API endpoint for retrieving transaction history
- [ ] Create API endpoints for NFT-related operations (minting, transferring)
- [ ] Develop a mock blockchain structure in the database

## Wallet Interaction

- [ ] Set up event listeners for wallet connection status
- [ ] Implement transaction signing process


## Frontend Development: Integrate Backend

- [ ] Integrate frontend components with API endpoints
- [ ] Implement error handling and user feedback mechanisms
- [ ] Implement a transaction history component
- [ ] Create an NFT gallery component to display owned NFTs
- [ ] Develop a component for sending/receiving NFTs

