import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');
    const smartContract = await prisma.smartContract.findUnique({
        where: { address: address ?? '' },
    });
    return NextResponse.json(smartContract);
}

// Mint new NFT
export async function POST(request: Request) {
    const { to, value, amount } = await request.json();

    if (value >= amount * 0.05) {
        const smartContract = await prisma.smartContract.findUnique({
            where: { address: to },
        });

        if (smartContract) {
            const balances = JSON.parse(smartContract.balances);
            const owners = JSON.parse(smartContract.owners);
            const details = JSON.parse(smartContract.details);

            balances[to] = (balances[to] || 0) + amount;
            owners['mock-token-id'] = to;
            details['mock-token-id'] = { name: 'Mock NFT', description: 'This is a mock NFT', image: 'mock-image-url' };

            await prisma.smartContract.update({
                where: { address: to },
                data: {
                    balances: JSON.stringify(balances),
                    owners: JSON.stringify(owners),
                    details: JSON.stringify(details),
                },
            });
            console.log("minting NFT suc")
            return NextResponse.json({ status: 'confirmed' });
        } else {
            console.log("failed because SC not existing")
            return NextResponse.json({ status: 'failed' });
        }
    } else {
        console.log("failed because value is not high enough")
        return NextResponse.json({ status: 'failed' });
    }
}

// Send NFT
export async function PUT(request: Request) {
    const { address, balances, owners, details } = await request.json();
    const smartContract = await prisma.smartContract.update({
        where: { address },
        data: {
            balances: JSON.stringify(balances),
            owners: JSON.stringify(owners),
            details: JSON.stringify(details),
        },
    });
    return NextResponse.json(smartContract);
}