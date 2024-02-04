/*
  Warnings:

  - You are about to alter the column `contractStatus` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `TMT` DATETIME(3) NULL,
    MODIFY `contractStatus` ENUM('Active', 'Resign', 'Mutation') NOT NULL,
    MODIFY `initialHiringDate` DATETIME(3) NULL;
