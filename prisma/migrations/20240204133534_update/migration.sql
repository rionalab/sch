-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_departmentId_fkey`;

-- AlterTable
ALTER TABLE `inventory` MODIFY `departmentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
