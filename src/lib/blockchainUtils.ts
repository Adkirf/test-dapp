import { prisma } from '@/lib/prisma';
import { MockTransaction } from '@/types';
import { generateRandomHash } from '@/utils/hashUtils'; // Import the new hash generation function

export async function callBlockchain(transaction: Omit<MockTransaction, 'hash'>, amount?: number) {
    if (!amount) {
        amount = 1
    }
    switch (transaction.function) {
        case 'mintNFT':
            const result = await mintNFT(transaction.to, transaction.value, amount)
            const finishedTransaction: MockTransaction = {
                ...transaction,
                hash: generateRandomHash(), // Add the hash property
                status: result
            };
            console.log(finishedTransaction)
            //TODO upload to blockchain database
            return finishedTransaction
        default:
            return '';
    }
}

export async function mintNFT(to: string, value: number, amount: number): Promise<"pending" | "confirmed" | "failed"> {
    const response = await fetch('/api/smartContract', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, value, amount }),
    });

    if (response.ok) {
        const result = await response.json();
        return result.status;
    } else {
        return 'failed';
    }
}

export async function getTransactionByHash(hash: string): Promise<MockTransaction | null> {
    //return prisma.mockTransaction.findUnique({ where: { hash } });
    return null;
}

export async function getDetails(tokenId: string): Promise<{ name: string; description: string; image: string }> {
    const smartContract = await prisma.smartContract.findUnique({
        where: { address: 'mock-address' },
    });

    if (smartContract) {
        const details = JSON.parse(smartContract.details);
        return details[tokenId] || { name: '', description: '', image: '' };
    }

    return { name: '', description: '', image: '' };
}

export async function getOwnerOf(tokenId: string): Promise<string> {
    const smartContract = await prisma.smartContract.findUnique({
        where: { address: 'mock-address' },
    });

    if (smartContract) {
        const owners = JSON.parse(smartContract.owners);
        return owners[tokenId] || '';
    }

    return '';
}

export async function getTokensOf(address: string): Promise<string[]> {
    const smartContract = await prisma.smartContract.findUnique({
        where: { address },
    });

    if (smartContract) {
        const owners = JSON.parse(smartContract.owners);
        return Object.keys(owners).filter(tokenId => owners[tokenId] === address);
    }

    return [];
}