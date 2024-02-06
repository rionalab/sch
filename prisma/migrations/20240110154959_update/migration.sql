/*
  Warnings:

  - Added the required column `phone` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `class` DROP FOREIGN KEY `Class_teacherId_fkey`;

-- AlterTable
ALTER TABLE `employee` ADD COLUMN `phone` VARCHAR(191) NOT NULL;
