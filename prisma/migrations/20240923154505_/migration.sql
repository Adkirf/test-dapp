/*
  Warnings:

  - The primary key for the `MockTransaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `MockTransaction` table. All the data in the column will be lost.
  - The primary key for the `SmartContract` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SmartContract` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MockTransaction" (
    "hash" TEXT NOT NULL PRIMARY KEY,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "function" TEXT NOT NULL
);
INSERT INTO "new_MockTransaction" ("from", "function", "hash", "status", "timestamp", "to", "value") SELECT "from", "function", "hash", "status", "timestamp", "to", "value" FROM "MockTransaction";
DROP TABLE "MockTransaction";
ALTER TABLE "new_MockTransaction" RENAME TO "MockTransaction";
CREATE TABLE "new_SmartContract" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "balances" TEXT NOT NULL,
    "owners" TEXT NOT NULL,
    "details" TEXT NOT NULL
);
INSERT INTO "new_SmartContract" ("address", "balances", "details", "owners") SELECT "address", "balances", "details", "owners" FROM "SmartContract";
DROP TABLE "SmartContract";
ALTER TABLE "new_SmartContract" RENAME TO "SmartContract";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
