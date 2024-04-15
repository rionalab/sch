/*
  Warnings:

  - You are about to alter the column `religion` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.
  - You are about to alter the column `maritalStatus` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(7))` to `VarChar(191)`.
  - You are about to alter the column `religion` on the `student` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(5))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `religion` VARCHAR(191) NOT NULL,
    MODIFY `maritalStatus` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `religion` VARCHAR(191) NOT NULL;
