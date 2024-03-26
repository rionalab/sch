/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Extracurricular` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `active` to the `Extracurricular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Extracurricular` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `extracurricular` ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `code` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Extracurricular_code_key` ON `Extracurricular`(`code`);
