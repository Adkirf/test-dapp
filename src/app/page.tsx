"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import WalletConnectButton from "@/components/wallet/WalletConnectButton";
import { SendTransaction } from "@/components/transactions/SendTransaction";
import { mintNFT, getTransactionByHash } from "@/lib/blockchainUtils";

export default function Home() {
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [transactionDetails, setTransactionDetails] = useState<any>(null);

  const handleMintNFT = async () => {
    try {
      const hash = await mintNFT("mock-address", 0.05, 1);
      setTransactionHash(hash);
      const transaction = await getTransactionByHash(hash);
      setTransactionDetails(transaction);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-8">
          This app simulates a blockchain environment, allowing users to connect their wallets, sign transactions, and manage NFTs.
        </p>
        <div className="flex justify-center space-x-4">
          <WalletConnectButton />
          <a
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            href="/nfts"
          >
            View NFTs
          </a>
        </div>
        <SendTransaction />
        <div className="mt-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleMintNFT}
          >
            Mint NFT
          </button>
        </div>
        {transactionHash && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Transaction Hash</h2>
            <p>{transactionHash}</p>
          </div>
        )}
        {transactionDetails && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Transaction Details</h2>
            <pre>{JSON.stringify(transactionDetails, null, 2)}</pre>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
