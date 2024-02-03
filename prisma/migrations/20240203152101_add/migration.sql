-- CreateTable
CREATE TABLE `_ExtracurricularToStudent` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ExtracurricularToStudent_AB_unique`(`A`, `B`),
    INDEX `_ExtracurricularToStudent_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ExtracurricularToStudent` ADD CONSTRAINT `_ExtracurricularToStudent_A_fkey` FOREIGN KEY (`A`) REFERENCES `Extracurricular`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExtracurricularToStudent` ADD CONSTRAINT `_ExtracurricularToStudent_B_fkey` FOREIGN KEY (`B`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
