/*
  Warnings:

  - You are about to drop the `family` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fruit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `family`;

-- DropTable
DROP TABLE `fruit`;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `religion` ENUM('Islam', 'Budha', 'Hindu', 'Kristen', 'Katolik', 'Khonghucu', 'Tradisional', 'Lainnya') NOT NULL,
    `departmentId` INTEGER NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `bloodType` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `tribe` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `bloodType` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `tribe` VARCHAR(191) NOT NULL,
    `religion` ENUM('Islam', 'Budha', 'Hindu', 'Kristen', 'Katolik', 'Khonghucu', 'Tradisional', 'Lainnya') NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `classId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `className` VARCHAR(191) NOT NULL,
    `teacherId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
