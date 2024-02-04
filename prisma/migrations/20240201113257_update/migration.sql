/*
  Warnings:

  - You are about to alter the column `blacklist` on the `vendor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `remarks` on the `vendor` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `vendor` MODIFY `blacklist` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `remarks` VARCHAR(191) NULL;
