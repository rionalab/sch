/*
  Warnings:

  - You are about to drop the column `PKWT` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `PKWT`,
    ADD COLUMN `PKWTEnd` DATETIME(3) NULL,
    ADD COLUMN `PKWTStart` DATETIME(3) NULL;
