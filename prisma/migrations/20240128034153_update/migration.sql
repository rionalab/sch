/*
  Warnings:

  - You are about to drop the column `initialHiringDate` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `initialHiringDate`,
    DROP COLUMN `zipCode`,
    MODIFY `bloodType` VARCHAR(191) NULL,
    MODIFY `tribe` VARCHAR(191) NULL,
    MODIFY `unit` VARCHAR(191) NULL;
