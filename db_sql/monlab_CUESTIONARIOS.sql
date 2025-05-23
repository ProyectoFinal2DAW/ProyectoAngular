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
-- Table structure for table `CUESTIONARIOS`
--

DROP TABLE IF EXISTS `CUESTIONARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CUESTIONARIOS` (
  `id_questionario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cuestionario` varchar(80) NOT NULL,
  `descrip_cuestionario` varchar(500) NOT NULL,
  `foto_cuestionario` varchar(100) DEFAULT NULL,
  `video_cuestionario` varchar(100) DEFAULT NULL,
  `fecha_publicacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_questionario`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CUESTIONARIOS`
--

LOCK TABLES `CUESTIONARIOS` WRITE;
/*!40000 ALTER TABLE `CUESTIONARIOS` DISABLE KEYS */;
INSERT INTO `CUESTIONARIOS` VALUES (1,'Cuestionario Básico','Cuestionario de nivel básico','cuestionario1.jpg','cuestionario1.mp4','2025-02-24 16:34:04'),(2,'Cuestionario Intermedio','Cuestionario de nivel intermedio',NULL,'cuestionario2.mp4','2025-02-24 16:34:04'),(4,'Prueba cuestionario','esto es una prueba de crear cuestionario',NULL,NULL,'2025-03-26 09:15:23'),(10,'Cartagon y compas','Unidad 1','','','2025-04-01 14:29:28'),(11,'Cartagon y compas','Unidad 1','https://upload.wikimedia.org/wikipedia/commons/e/ef/Ancre_a_Cosne_sur_Loire_DSC_0029.JPG','','2025-04-01 14:32:19'),(12,'Operaciones','Cálculo básico','https://upload.wikimedia.org/wikipedia/commons/e/ef/Ancre_a_Cosne_sur_Loire_DSC_0029.JPG','','2025-04-01 14:34:08'),(13,'a','a','https://upload.wikimedia.org/wikipedia/commons/e/ef/Ancre_a_Cosne_sur_Loire_DSC_0029.JPG','','2025-04-01 14:34:46'),(14,'a','a','https://upload.wikimedia.org/wikipedia/commons/e/ef/Ancre_a_Cosne_sur_Loire_DSC_0029.JPG','','2025-04-01 14:39:29'),(15,'dsfsdfsd','sdfsdf','sdfsdf','','2025-04-01 15:05:20'),(16,'a','a','a','','2025-04-01 15:07:48'),(17,'a','a','a','','2025-04-01 15:19:07'),(18,'gg','gg','gg','','2025-04-01 17:11:47'),(19,'hh','hh','hh','','2025-04-01 17:47:20'),(21,'tryhr','yhhyt','yyy','','2025-04-01 17:51:33'),(22,'Test Campo Gravitatorio','Cuestionario para comprobar los conocimientos sobre campos gravitatorios.','','','2025-04-02 15:45:57'),(23,'Dibujo Técnico Básico','Cuestionario inicial','','','2025-04-02 17:52:49'),(24,'Francés Básico','Cuestionario de francé básico','','','2025-04-02 18:03:53'),(25,'Francés Básico','Cuestionario de introducción','','','2025-04-02 18:07:30'),(30,'Cuestionario básico sobre cinemática','Este es un cuestionario para repasar conceptos de cinematica','','','2025-05-12 18:33:33');
/*!40000 ALTER TABLE `CUESTIONARIOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 20:10:59
