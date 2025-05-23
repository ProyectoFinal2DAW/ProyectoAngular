-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: monlab.ddns.net    Database: monlab
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.6-MariaDB-0+deb12u1

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
-- Table structure for table `CLASES`
--

DROP TABLE IF EXISTS `CLASES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CLASES` (
  `id_clases` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_clases` varchar(60) NOT NULL,
  `descripcion_clases` varchar(500) NOT NULL,
  `contenido` varchar(100) DEFAULT NULL,
  `foto_clases` varchar(6000) DEFAULT NULL,
  `video_clases` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_clases`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLASES`
--

LOCK TABLES `CLASES` WRITE;
/*!40000 ALTER TABLE `CLASES` DISABLE KEYS */;
INSERT INTO `CLASES` VALUES (1,'Matemáticas','Información complementaria matemáticas',NULL,'http://monlab.ddns.net/images/matematicas.jpg','adsada'),(2,'Física','Información complementaria física','null','http://monlab.ddns.net/images/fisica.jpg',''),(3,'Química','Información complementaria química','contenido3.pdf','http://monlab.ddns.net/images/quimica.jpg','video3.mp4'),(11,'Biología','Aprendiendo sobre el cuerpo humano y animales','contenido8.pdf','http://monlab.ddns.net/images/biologia.jpg',''),(17,'Geología','Esto es la clase de geología','','http://monlab.ddns.net/images/geologia.jpg','');
/*!40000 ALTER TABLE `CLASES` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 20:11:01
