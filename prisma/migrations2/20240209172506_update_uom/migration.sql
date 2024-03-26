/*
  Warnings:

  - You are about to drop the column `UOM` on the `inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[acronym]` on the table `Uom` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uomId` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acronym` to the `Uom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Uom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `UOM`,
    ADD COLUMN `uomId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `uom` ADD COLUMN `acronym` VARCHAR(191) NOT NULL,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Uom_acronym_key` ON `Uom`(`acronym`);

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
