/*
  Warnings:

  - You are about to drop the column `roleName` on the `position` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Position` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Position_roleName_key` ON `position`;

-- AlterTable
ALTER TABLE `position` DROP COLUMN `roleName`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Position_name_key` ON `Position`(`name`);
