'use client';

import { useSession } from 'next-auth/react';
import MainLayout from '@/components/layout/MainLayout';
import WalletConnectButton from '@/components/wallet/WalletConnectButton';

const ProfilePage: React.FC = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <MainLayout>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Profile</h1>
                    <p className="text-lg mb-8">You need to connect your wallet to access your profile.</p>
                    <WalletConnectButton />
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Profile</h1>
                <p className="text-lg mb-8">Welcome, {session.address}!</p>
                <p className="text-lg mb-8">Chain ID: {session.chainId}</p>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;