# Backend Development SOP


### 1. Create blockchain-utils file
- [x] Create typescript interfacor for mock-transactions:{
    hash: string;
    from: string;
    to: string;
    value: number;
    status: "pending" | "confirmed" | "failed";
    timestamp: Date;
    function: string;
}
- [x] Develop utils function for mintNFT: (to: string, value: number, amount: number) => Promise<string>;
- [x] Develop utils function for transferNFT: (to: string, value: number, number: number) => Promise<string>;
- [x] Develop utils function for getDetails: (tokenId: string) => Promise<{name: string, description: string, image: string}>;
- [x] Develop utils function for getOwnerOf: (tokenId: string) => Promise<string>;
- [x] Develop utils function for getTokensOf: (address: string) => Promise<string[]>;

### 2. Create route for blockchain-API Endpoints
- [x] blockchain-database scheme: {transactions: mock-transaction[];}
- [x] develop endpoint to submit mock-transaction to the local database. 

### 3. Create route for smartContract-API Endpoints
- [x] smartContract-database scheme: {address: string; balances: { [key: string]: number; }; owners: { [key: string]: string; }; details: { [key: string]: { name: string; description: string; image: string; }; };}
- [x] develop endpoints to update balances, owners, details
- [x] develop endpoints to get balances, owners, details

### 4. Connect blockchain-utils to APIs
- [x] mintNFT funnction checks if transaction value = amount * 0.05 ETH. Updates transaction status accoridngly, saves transaction to blockchain-database, and if status = confirmed, updates smartContract-database
- [x] transferNFT function checks if the transfer is allowed (i.e. is the owner of the tokenId), updates transaction status, saves transaction to blockchain-database, and if status = confirmed, updates smartContract-database
- [x] getDetails function fetches the details of a specific tokenId from the smartContract-database
- [x] getOwnerOf function fetches the owner of a specific tokenId from the smartContract-database
- [x] getTokensOf function fetches the tokenIds of a specific address from the smartContract-database




### 4. Final Review and Optimization
- [ ] Conduct a thorough code review.
- [ ] Refactor and optimize code where necessary.
- [ ] Ensure consistent coding style and naming conventions.
- [ ] Mark all steps in this file as completed, and update the @overview.md file with the current progress.