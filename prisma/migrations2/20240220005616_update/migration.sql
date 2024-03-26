/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `role`,
    ADD COLUMN `hasUpdatePassword` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `roleId` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `RoleAction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` ENUM('EmployeeNonEdu', 'Teacher', 'Parent', 'Student', 'Admin', 'HR', 'Superadmin') NOT NULL,
    `access` VARCHAR(191) NOT NULL,
    `roleAccess` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `RoleAction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
