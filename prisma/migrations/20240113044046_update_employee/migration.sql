/*
  Warnings:

  - You are about to drop the column `phone` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `employee` table. All the data in the column will be lost.
  - The values [MALE,FEMALE] on the enum `Student_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE] on the enum `Student_gender` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(0))`.
  - Added the required column `cityId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familyPhone` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hireDate` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone1` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone2` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeOfBirth` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provinceId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `phone`,
    DROP COLUMN `role`,
    ADD COLUMN `cityId` INTEGER NOT NULL,
    ADD COLUMN `familyPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `hireDate` DATETIME(3) NOT NULL,
    ADD COLUMN `phone1` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone2` VARCHAR(191) NOT NULL,
    ADD COLUMN `placeOfBirth` VARCHAR(191) NOT NULL,
    ADD COLUMN `provinceId` INTEGER NOT NULL,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `zipCode` INTEGER NOT NULL,
    MODIFY `gender` ENUM('Male', 'Female') NOT NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `gender` ENUM('Male', 'Female') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('User', 'Teacher', 'Parent', 'Student', 'Admin', 'Superadmin') NOT NULL DEFAULT 'Admin';

-- CreateTable
CREATE TABLE `Position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Province` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `stateId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `Province`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `Province`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
