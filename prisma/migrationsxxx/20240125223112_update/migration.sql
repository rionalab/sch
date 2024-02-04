/*
  Warnings:

  - You are about to alter the column `maritalStatus` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `maritalStatus` ENUM('Single', 'Married', 'Divorced', 'Widowed', 'Separated') NOT NULL;
