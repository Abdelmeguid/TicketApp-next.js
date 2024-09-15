/*
  Warnings:

  - You are about to drop the column `assignedToUserId` on the `ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `assignedToUserId`,
    ADD COLUMN `assignedToUsername` VARCHAR(191) NULL;
