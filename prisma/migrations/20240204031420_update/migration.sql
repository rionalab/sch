-- CreateTable
CREATE TABLE `LeaveEntitlement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entitlement` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `employeeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LeaveEntitlement` ADD CONSTRAINT `LeaveEntitlement_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
