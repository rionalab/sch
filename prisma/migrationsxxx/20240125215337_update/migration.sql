/*
  Warnings:

  - You are about to drop the column `address` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[NIP]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NIK]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `NIK` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NIP` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PKWT` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractStatus` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseAddress` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAddress` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialHiringDate` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institution` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `address`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `NIK` VARCHAR(191) NOT NULL,
    ADD COLUMN `NIP` VARCHAR(191) NOT NULL,
    ADD COLUMN `PKWT` DATETIME(3) NOT NULL,
    ADD COLUMN `childrenName` VARCHAR(191) NULL,
    ADD COLUMN `contractStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `degree` VARCHAR(191) NOT NULL,
    ADD COLUMN `fatherName` VARCHAR(191) NOT NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `houseAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `idAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `initialHiringDate` DATETIME(3) NOT NULL,
    ADD COLUMN `institution` VARCHAR(191) NOT NULL,
    ADD COLUMN `major` VARCHAR(191) NOT NULL,
    ADD COLUMN `maritalStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherName` VARCHAR(191) NOT NULL,
    ADD COLUMN `siblingName` VARCHAR(191) NULL,
    ADD COLUMN `spouseName` VARCHAR(191) NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_NIP_key` ON `Employee`(`NIP`);

-- CreateIndex
CREATE UNIQUE INDEX `Employee_NIK_key` ON `Employee`(`NIK`);
