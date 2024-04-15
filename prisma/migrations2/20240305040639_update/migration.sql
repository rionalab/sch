/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `RoleAction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `roleaction` MODIFY `actions` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `RoleAction_name_key` ON `RoleAction`(`name`);
