/*
  Warnings:

  - You are about to drop the column `roleId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `todo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropForeignKey
ALTER TABLE `todo` DROP FOREIGN KEY `Todo_userId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `roleId`,
    ADD COLUMN `positionId` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `position` ADD COLUMN `category` ENUM('Edu', 'NonEdu') NOT NULL DEFAULT 'Edu';

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `todo`;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_userId_key` ON `Employee`(`userId`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
