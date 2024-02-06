/*
  Warnings:

  - You are about to alter the column `remarks` on the `vendor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `vendor` MODIFY `remarks` BOOLEAN NULL;
