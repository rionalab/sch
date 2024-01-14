/*
  Warnings:

  - A unique constraint covering the columns `[roleName]` on the table `Position` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Position_roleName_key` ON `Position`(`roleName`);
