/*
  Warnings:

  - You are about to alter the column `gender` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `VarChar(191)`.
  - You are about to alter the column `contractStatus` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `VarChar(191)`.
  - You are about to alter the column `gender` on the `student` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `remarks` VARCHAR(191) NULL,
    MODIFY `gender` VARCHAR(191) NOT NULL,
    MODIFY `contractStatus` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `gender` VARCHAR(191) NOT NULL;
