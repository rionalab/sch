-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `bloodType` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `NIK` VARCHAR(191) NULL,
    `phone1` VARCHAR(191) NULL,
    `phone2` VARCHAR(191) NULL,
    `maritalStatus` VARCHAR(191) NULL,
    `familyPhone` VARCHAR(191) NULL,
    `idAddress` VARCHAR(191) NULL,
    `houseAddress` VARCHAR(191) NULL,
    `institution` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `major` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `tribe` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,
    `fatherName` VARCHAR(191) NULL,
    `motherName` VARCHAR(191) NULL,
    `spouseName` VARCHAR(191) NULL,
    `childrenName` VARCHAR(191) NULL,
    `siblingName` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL,
    `placeOfBirth` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Profile_email_key`(`email`),
    UNIQUE INDEX `Profile_NIK_key`(`NIK`),
    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
