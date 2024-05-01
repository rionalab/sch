-- CreateTable
CREATE TABLE `StudentRegistration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(191) NOT NULL,
    `birthOrder` VARCHAR(191) NOT NULL,
    `totalChild` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `placeOfBirth` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `regisDate` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `houseAddress` VARCHAR(191) NOT NULL,
    `distance` VARCHAR(191) NOT NULL,
    `languages` VARCHAR(191) NOT NULL,
    `goingToShoolBy` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `nisn` VARCHAR(191) NULL,
    `oldSchoolName` VARCHAR(191) NULL,
    `oldSchoolAddress` VARCHAR(191) NULL,
    `fullName_father` VARCHAR(191) NOT NULL,
    `placeOfBirth_father` VARCHAR(191) NOT NULL,
    `dob_father` VARCHAR(191) NOT NULL,
    `religion_father` VARCHAR(191) NOT NULL,
    `relationWithChild_father` VARCHAR(191) NOT NULL,
    `maritalStatus_father` VARCHAR(191) NOT NULL,
    `theChildLivesWith_father` VARCHAR(191) NOT NULL,
    `nationality_father` VARCHAR(191) NOT NULL,
    `officeAddress_father` VARCHAR(191) NOT NULL,
    `idType_father` VARCHAR(191) NOT NULL,
    `idNumber_father` VARCHAR(191) NOT NULL,
    `phoneNumber_father` VARCHAR(191) NOT NULL,
    `nameInstitution_father` VARCHAR(191) NOT NULL,
    `occupationPosition_father` VARCHAR(191) NOT NULL,
    `email_father` VARCHAR(191) NOT NULL,
    `city_father` VARCHAR(191) NOT NULL,
    `lastEducation_father` VARCHAR(191) NOT NULL,
    `universityName_father` VARCHAR(191) NOT NULL,
    `postalCode_father` VARCHAR(191) NOT NULL,
    `address_father` VARCHAR(191) NOT NULL,
    `fullName_mother` VARCHAR(191) NOT NULL,
    `placeOfBirth_mother` VARCHAR(191) NOT NULL,
    `dob_mother` VARCHAR(191) NOT NULL,
    `religion_mother` VARCHAR(191) NOT NULL,
    `relationWithChild_mother` VARCHAR(191) NOT NULL,
    `maritalStatus_mother` VARCHAR(191) NOT NULL,
    `theChildLivesWith_mother` VARCHAR(191) NOT NULL,
    `nationality_mother` VARCHAR(191) NOT NULL,
    `officeAddress_mother` VARCHAR(191) NOT NULL,
    `idType_mother` VARCHAR(191) NOT NULL,
    `idNumber_mother` VARCHAR(191) NOT NULL,
    `phoneNumber_mother` VARCHAR(191) NOT NULL,
    `nameInstitution_mother` VARCHAR(191) NOT NULL,
    `occupationPosition_mother` VARCHAR(191) NOT NULL,
    `email_mother` VARCHAR(191) NOT NULL,
    `city_mother` VARCHAR(191) NOT NULL,
    `lastEducation_mother` VARCHAR(191) NOT NULL,
    `universityName_mother` VARCHAR(191) NOT NULL,
    `postalCode_mother` VARCHAR(191) NOT NULL,
    `address_mother` VARCHAR(191) NOT NULL,
    `preschoolName` VARCHAR(191) NOT NULL,
    `preschoolyear` VARCHAR(191) NOT NULL,
    `preschoolAddress` VARCHAR(191) NOT NULL,
    `primaryName` VARCHAR(191) NOT NULL,
    `primaryyear` VARCHAR(191) NOT NULL,
    `primaryAddress` VARCHAR(191) NOT NULL,
    `othersName` VARCHAR(191) NOT NULL,
    `othersyear` VARCHAR(191) NOT NULL,
    `othersAddress` VARCHAR(191) NOT NULL,
    `arts` VARCHAR(191) NOT NULL,
    `music` VARCHAR(191) NOT NULL,
    `cognitive` VARCHAR(191) NOT NULL,
    `sport` VARCHAR(191) NOT NULL,
    `organization` VARCHAR(191) NOT NULL,
    `others` VARCHAR(191) NOT NULL,
    `schoolInformation` VARCHAR(191) NOT NULL,
    `declaration` VARCHAR(191) NOT NULL,
    `typeActivities1` VARCHAR(191) NOT NULL,
    `locationActivities1` VARCHAR(191) NOT NULL,
    `timeActivities1` VARCHAR(191) NOT NULL,
    `startEndActivities1` VARCHAR(191) NOT NULL,
    `typeActivities2` VARCHAR(191) NOT NULL,
    `locationActivities2` VARCHAR(191) NOT NULL,
    `timeActivities2` VARCHAR(191) NOT NULL,
    `startEndActivities2` VARCHAR(191) NOT NULL,
    `typeActivities3` VARCHAR(191) NOT NULL,
    `locationActivities3` VARCHAR(191) NOT NULL,
    `timeActivities3` VARCHAR(191) NOT NULL,
    `startEndActivities3` VARCHAR(191) NOT NULL,
    `personLiveWithName1` VARCHAR(191) NOT NULL,
    `personLiveWithRelation1` VARCHAR(191) NOT NULL,
    `personLiveWithAddress1` VARCHAR(191) NOT NULL,
    `personLiveWithPhone1` VARCHAR(191) NOT NULL,
    `personLiveWithEmail1` VARCHAR(191) NOT NULL,
    `personLiveWithName2` VARCHAR(191) NOT NULL,
    `personLiveWithRelation2` VARCHAR(191) NOT NULL,
    `personLiveWithAddress2` VARCHAR(191) NOT NULL,
    `personLiveWithPhone2` VARCHAR(191) NOT NULL,
    `personLiveWithEmail2` VARCHAR(191) NOT NULL,
    `personLiveWithName3` VARCHAR(191) NOT NULL,
    `personLiveWithRelation3` VARCHAR(191) NOT NULL,
    `personLiveWithAddress3` VARCHAR(191) NOT NULL,
    `personLiveWithPhone3` VARCHAR(191) NOT NULL,
    `personLiveWithEmail3` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;