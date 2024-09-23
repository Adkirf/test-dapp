import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const defaultSmartContract = {
    address: "0x9073c632bcc6DAcE5edC5b12C5545C9a79B0c4d6",
    balances: JSON.stringify({}),
    owners: JSON.stringify({}),
    details: JSON.stringify({}),
  };

  const smartContract = await prisma.smartContract.upsert({
    where: { address: defaultSmartContract.address },
    update: {},
    create: defaultSmartContract,
  });

  console.log("Default smart contract uploaded:", smartContract);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
