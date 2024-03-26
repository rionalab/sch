/*
  Warnings:

  - You are about to drop the column `name` on the `purchaserequestitem` table. All the data in the column will be lost.
  - You are about to drop the column `uomId` on the `purchaserequestitem` table. All the data in the column will be lost.
  - Added the required column `inventoryId` to the `PurchaseRequestItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `purchaserequestitem` DROP FOREIGN KEY `PurchaseRequestItem_uomId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_departmentId_fkey`;

-- AlterTable
ALTER TABLE `purchaserequestitem` DROP COLUMN `name`,
    DROP COLUMN `uomId`,
    ADD COLUMN `inventoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `departmentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseRequestItem` ADD CONSTRAINT `PurchaseRequestItem_inventoryId_fkey` FOREIGN KEY (`inventoryId`) REFERENCES `Inventory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
