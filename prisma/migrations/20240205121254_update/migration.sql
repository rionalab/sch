/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `LeaveType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `LeaveType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `leaverequest` DROP FOREIGN KEY `LeaveRequest_employeeId_fkey`;

-- AlterTable
ALTER TABLE `leaverequest` MODIFY `employeeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `leavetype` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `code` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `LeaveType_code_key` ON `LeaveType`(`code`);

-- AddForeignKey
ALTER TABLE `LeaveRequest` ADD CONSTRAINT `LeaveRequest_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
