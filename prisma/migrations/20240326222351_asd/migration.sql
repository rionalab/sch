/*
  Warnings:

  - You are about to drop the column `vendorId` on the `purchaserequest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `purchaserequest` DROP FOREIGN KEY `PurchaseRequest_vendorId_fkey`;

-- AlterTable
ALTER TABLE `purchaserequest` DROP COLUMN `vendorId`;
