/*
  Warnings:

  - You are about to alter the column `assignedToUserId` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `ticket` MODIFY `assignedToUserId` INTEGER NULL;
