/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `department` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `vendor` ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `fax` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Department_code_key` ON `Department`(`code`);

-- CreateIndex
CREATE UNIQUE INDEX `Vendor_code_key` ON `Vendor`(`code`);
