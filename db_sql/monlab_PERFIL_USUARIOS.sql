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
-- Table structure for table `PERFIL_USUARIOS`
--

DROP TABLE IF EXISTS `PERFIL_USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERFIL_USUARIOS` (
  `id_usuarios` int(11) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `genero` enum('hombre','mujer','no binario','prefiero no decirlo') NOT NULL,
  `pais` varchar(60) DEFAULT NULL,
  `idioma` enum('catalan','castellano','ingles') DEFAULT NULL,
  `edad` int(3) NOT NULL,
  `foto_perfil_usuario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  CONSTRAINT `Rel_Usuario_Perfil` FOREIGN KEY (`id_usuarios`) REFERENCES `USUARIOS` (`id_usuarios`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERFIL_USUARIOS`
--

LOCK TABLES `PERFIL_USUARIOS` WRITE;
/*!40000 ALTER TABLE `PERFIL_USUARIOS` DISABLE KEYS */;
INSERT INTO `PERFIL_USUARIOS` VALUES (3,'Admin User','prefiero no decirlo',NULL,'catalan',40,'adminuser.jpg');
/*!40000 ALTER TABLE `PERFIL_USUARIOS` ENABLE KEYS */;
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
