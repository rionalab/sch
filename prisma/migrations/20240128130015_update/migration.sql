-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_userId_fkey`;

-- AlterTable
ALTER TABLE `employee` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
