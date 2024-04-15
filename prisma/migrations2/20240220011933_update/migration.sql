/*
  Warnings:

  - You are about to drop the column `access` on the `roleaction` table. All the data in the column will be lost.
  - Added the required column `actions` to the `RoleAction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `roleaction` DROP COLUMN `access`,
    ADD COLUMN `actions` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `roleId` DROP DEFAULT;
