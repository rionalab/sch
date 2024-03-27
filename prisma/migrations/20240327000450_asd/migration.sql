/*
  Warnings:

  - Added the required column `departmentId` to the `PurchaseRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchaserequest` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `PurchaseRequest` ADD CONSTRAINT `PurchaseRequest_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
