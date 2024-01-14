/*
  Warnings:

  - You are about to drop the column `cityId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `provinceId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the `city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `province` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `city` DROP FOREIGN KEY `City_stateId_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_provinceId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `cityId`,
    DROP COLUMN `provinceId`;

-- DropTable
DROP TABLE `city`;

-- DropTable
DROP TABLE `province`;
