import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import WalletConnectButton from "@/components/wallet/WalletConnectButton";

export default function Home() {
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
      </div>
    </MainLayout>
  );
}
