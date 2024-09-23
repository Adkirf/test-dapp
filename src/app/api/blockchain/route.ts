import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { MockTransaction } from '@/types/blockchain';


//Post a transction
export async function POST(request: Request) {
    const data: MockTransaction = await request.json();
    const transaction = await prisma.mockTransaction.create({
        data,
    });
    return NextResponse.json(transaction);
}

//Put the smart contract to smart contract databasemodel SmartContract {
export async function PUT(request: Request) {
    const data = await request.json();
    const smartContract = await prisma.smartContract.create({
        data: {
            address: data.address,
            balances: JSON.stringify({}),
            owners: JSON.stringify({}),
            details: JSON.stringify({}),
        },
    });
    return NextResponse.json(smartContract);
}
