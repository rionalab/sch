/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Position` will be added. If there are existing duplicate values, this will fail.
  - The required column `code` was added to the `Position` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `position` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Position_code_key` ON `Position`(`code`);
