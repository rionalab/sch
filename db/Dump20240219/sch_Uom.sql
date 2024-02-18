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
-- Table structure for table `Uom`
--

DROP TABLE IF EXISTS `Uom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Uom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acronym` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uom_code_key` (`code`),
  UNIQUE KEY `Uom_name_key` (`name`),
  UNIQUE KEY `Uom_acronym_key` (`acronym`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Uom`
--

LOCK TABLES `Uom` WRITE;
/*!40000 ALTER TABLE `Uom` DISABLE KEYS */;
INSERT INTO `Uom` VALUES (1,'Buah','Buah','This is unit of measurement buah','bh',1),(2,'Kilogram','Kilogram','This is unit of measurement kilogram','kg',1),(4,'Liter','Liter','This is unit of measurement liter','Lt',1),(5,'Meter','Meter','This is unit of measurement meter','m',1),(6,'Pack','Pack','This is unit of measurement pack','pk',1),(7,'Kotak','Kotak','This is unit of measurement kotak','Kt',1),(8,'Inches','Inches','This is unit of measurement inches','inc',1),(9,'Drum','Drum','This is unit of measurement drum','drm',1),(10,'Batang','Batang','This is unit of measurement batang','btg',1),(11,'Botol','Botol','This is unit of measurement botol','btl',1),(12,'Karton','Karton','This is unit of measurement karton','krt',1),(13,'Box','Box','This is unit of measurement box','box',1),(14,'Unit','Unit','This is unit of measurement unit','unit',1),(15,'Kaleng','Kaleng','This is unit of measurement kaleng','klg',1),(16,'Lusin','Lusin','This is unit of measurement lusin','lsn',1),(17,'Set','Set','This is Unit Of Measurement set','set',1);
/*!40000 ALTER TABLE `Uom` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-19  0:15:08
