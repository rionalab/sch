/*
  Warnings:

  - You are about to drop the column `teacherId` on the `class` table. All the data in the column will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeId` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `class` DROP COLUMN `teacherId`,
    ADD COLUMN `employeeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `parentId` INTEGER NULL;

-- DropTable
DROP TABLE `department`;

-- CreateTable
CREATE TABLE `Parent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motherName` VARCHAR(191) NOT NULL,
    `motherPhone` VARCHAR(191) NOT NULL,
    `motherEmail` VARCHAR(191) NOT NULL,
    `motherPhoto` VARCHAR(191) NOT NULL,
    `fatherName` VARCHAR(191) NOT NULL,
    `fatherPhone` VARCHAR(191) NOT NULL,
    `fatherEmail` VARCHAR(191) NOT NULL,
    `fatherPhoto` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
