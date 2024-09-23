-- CreateTable
CREATE TABLE "MockTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "function" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SmartContract" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "balances" TEXT NOT NULL,
    "owners" TEXT NOT NULL,
    "details" TEXT NOT NULL
);
