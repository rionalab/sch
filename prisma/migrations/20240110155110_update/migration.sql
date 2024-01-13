/*
  Warnings:

  - You are about to drop the column `departmentId` on the `employee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_departmentId_fkey`;

-- DropIndex
DROP INDEX `Class_teacherId_fkey` ON `class`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `departmentId`;
