/*
  Warnings:

  - The values [Lainnya] on the enum `Student_religion` will be removed. If these variants are still used in the database, this will fail.
  - The values [Lainnya] on the enum `Student_religion` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `religion` ENUM('Islam', 'Budha', 'Hindu', 'Kristen', 'Katolik', 'Khonghucu', 'Tradisional', 'Others') NOT NULL,
    MODIFY `zipCode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `religion` ENUM('Islam', 'Budha', 'Hindu', 'Kristen', 'Katolik', 'Khonghucu', 'Tradisional', 'Others') NOT NULL;
