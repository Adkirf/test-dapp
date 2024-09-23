'use client';

import * as React from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { BaseError, parseEther } from 'viem';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { MockTransaction } from '@/types/blockchain';
import { callBlockchain } from '@/lib/blockchainUtils';

export function SendTransaction() {
    const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
    const { data: session, status } = useSession();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const to = "0x9073c632bcc6DAcE5edC5b12C5545C9a79B0c4d6";
        const value = "0.05";
        sendTransaction({ to, value: parseEther(value) });
        setIsFormSubmitted(true); // Set form submission state to true
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });

    const sendTransactionToBlockchain = async () => {
        const transactionRequest: Omit<MockTransaction, 'hash'> = {
            from: session?.address ? session.address : "0x9073c632bcc6DAcE5edC5b12C5545C9a79B0c4d6",
            to: '0x9073c632bcc6DAcE5edC5b12C5545C9a79B0c4d6',
            value: 0.05,
            status: 'pending',
            timestamp: new Date(),
            function: 'mintNFT',
        }
        let response = await callBlockchain(transactionRequest)
        console.log(response)
    }

    useEffect(() => {
        if (isFormSubmitted && (isConfirming || isConfirmed || error)) {
            console.log("Sending transaction to blockchain");
            sendTransactionToBlockchain();
        }
    }, [isConfirming, isConfirmed, error, isFormSubmitted]);

    return (
        <div>
            <form onSubmit={submit}>
                <button type="submit" disabled={isPending || isConfirming}>
                    {isPending ? 'Sending...' : isConfirming ? 'Confirming...' : 'Send Transaction'}
                </button>
            </form>
            {error && <div>Error: {error.message}</div>}
            {isConfirmed && <div>Transaction Confirmed!</div>}
        </div>
    );
}