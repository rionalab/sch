-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: sch
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bloodType` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NIP` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NIK` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contractStatus` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maritalStatus` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `familyPhone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idAddress` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `houseAddress` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `institution` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `major` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remarks` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fatherName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `motherName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spouseName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `childrenName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `siblingName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `religion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hireDate` datetime(3) NOT NULL,
  `PKWTStart` datetime(3) DEFAULT NULL,
  `TMT` datetime(3) DEFAULT NULL,
  `PKWTEnd` datetime(3) DEFAULT NULL,
  `dob` datetime(3) NOT NULL,
  `placeOfBirth` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `positionId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Employee_NIP_key` (`NIP`),
  UNIQUE KEY `Employee_email_key` (`email`),
  UNIQUE KEY `Employee_NIK_key` (`NIK`),
  UNIQUE KEY `Employee_userId_key` (`userId`),
  KEY `Employee_positionId_fkey` (`positionId`),
  CONSTRAINT `Employee_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Employee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (1,'Rika Anggraeni','','A','1000000001','reecabloo@gmail.com','1371131301910002','089677356148','-','Active','Married','088211539345','Jalan Bintara 7 No. 60, RT/RW. 001/002, Bintara, Bekasi Barat 17134','-','UNAS','Hubungan Internasional','S1','','Primary','','Sutristo','Any Ramdano','Budi Hartono','Ahmad Agha','Edy Susanto','Islam','Female','2024-02-10 08:55:55.000','2024-02-10 08:55:55.000','2024-02-10 08:55:55.000','2024-02-11 08:55:55.000','1984-07-01 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL),(2,'Ramadhan Prasetyo','','A','1000000002','ramadhan.kidsrepublic@gmail.com','1371121301910002','0812-9741-8454','021-8408751','Inactive','Married','08568204348','Jl. SPG 7 No.2 Lubang Buaya RT 007/RW 009 Jakarta Timur, 13810','-','IISIP','Komunikasi','D3/D4','','Managemen','Tidak Active tgl 28 Feb 2023','Suhermanto','Siti Aisyah','Yusan Rizki Rahayu','Aaron Rizki Pratama','Muhammad Shiam Prayoga','Islam','Male','2024-02-10 08:55:55.000','2024-02-10 08:55:55.000','2024-02-10 08:55:55.000','2024-02-11 08:55:55.000','1994-02-26 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL),(3,'Syifa Fauziah','','A','1000000003','fauziahsyifa438@gmail.com','1371131352910002','087835728566','-','Active','Married','087875981255','Jln Pangkalan Jati V No 59 RT 011/005 No 59','Jln Cempaka Bulak RT 003 RW 005 No 43 unit 1B','STIE Swadaya','Management','S1','','Managemen',NULL,'Alif Hardianto','Sutarsih','Prade Kunto Arief Dwi Sanjaya','Daniyal Zhafran Radefa','Ramzy Nur Fauzan','Islam','Female','2024-02-10 08:55:55.000','2021-09-05 17:00:00.000','2024-02-10 08:55:55.000','2023-09-05 17:00:00.000','1992-06-18 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL),(4,'Novia Rizky Sulaiman','','','1000000004','noviarizkysulaiman@gmail.com','1371131301510002','081295148764','-','Active','Married','081380385411','Jl. Raya Ragunan, Gang Mawar, Pasar Minggu, Rt. 012/03, Jakarta Selatan - 12520','Jl. Masjid Jami Nurul Huda, Kampung Babakan, Desa Tahurhalang, Kabupaten Bogor - 16320','Universitas Indraprasta PGRI','Pendidikan Bahasa Inggris','S1','','Preschool & Kindergarten',NULL,'Alm. Idup Sulaiman','Rukaya Lantong','Perri Hanto','Azzam Aulia Shakeil','Noval Sulaeman & Siti Azizah Sulaiman','Islam','Female','2024-02-10 08:55:55.000','2024-02-10 08:55:55.000','2021-09-30 17:00:00.000','2024-02-11 08:55:55.000','1993-02-04 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL),(5,'Ratih Puspitasari','','','1000000005','ra.puspitasari@gmail.com','1374431301910002','081291418642','Tidak ada','Active','Married','081291418643','Jl. Sambisari A.260, Duta Kranji, Bintara - Bekasi Barat','-','UI','Ilmu Kesejahteraan Sosial','S1','','Preschool & Kindergarten',NULL,'Hidayat Effendi','Sofiah Muchtar','Galih Sendika Artistya','M. Ammar Artistya','Astri Lestari dan M. Wildan Fadhilah','Islam','Female','2024-02-10 08:55:55.000','2015-10-22 17:00:00.000','2018-01-07 17:00:00.000','2017-10-22 17:00:00.000','1986-11-27 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL),(6,'Kartika Nur April','','','1000000006','baningbaning12@gmail.com','1371131301977002','081218024114','-','Active','Separated','081283764943','Komplek Masnaga Bintara Jaya','Kp. Setu Bintara Jaya Rt. 04/Rw. 01 No. 88. Bintara Jaya. Bekasi Barat  ','Universitas Krisnadwipayana','Jurusan Administrasi Niaga','S1','','Preschool & Kindergarten',NULL,'Warkim','Ningsih','-','Banyu Baning Putera Nugraha','Romadona','Islam','Female','2024-02-10 08:55:55.000','2021-07-04 17:00:00.000','2021-07-04 17:00:00.000','2023-07-04 17:00:00.000','1982-04-05 17:00:00.000','South Kennedi',1,'2024-02-10 08:55:55.639','2024-02-10 08:55:55.639',NULL);
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-19  0:14:44
