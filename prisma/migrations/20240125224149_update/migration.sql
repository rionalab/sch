-- AlterTable
ALTER TABLE `employee` MODIFY `contractStatus` ENUM('Active', 'Inactive', 'Resign', 'Mutation') NOT NULL;
