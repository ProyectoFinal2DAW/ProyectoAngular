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
-- Table structure for table `USUARIOS`
--

DROP TABLE IF EXISTS `USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USUARIOS` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `id_roles` int(11) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `estado` enum('activa','desactivada') NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT NULL,
  `profileImage` text DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  UNIQUE KEY `usuario` (`usuario`),
  UNIQUE KEY `correo_electronico` (`email`),
  KEY `IX_Relationship2` (`id_roles`),
  CONSTRAINT `Roles_x_Usuarios` FOREIGN KEY (`id_roles`) REFERENCES `ROLES` (`id_roles`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIOS`
--

LOCK TABLES `USUARIOS` WRITE;
/*!40000 ALTER TABLE `USUARIOS` DISABLE KEYS */;
INSERT INTO `USUARIOS` VALUES (3,3,'admin1','admin1@example.com','hashed_password3','activa','2025-01-21 15:25:59',NULL),(6,1,'pol','pol@gmail.com','1234','activa',NULL,NULL),(9,2,'aleix','aleix@gmail.com','aleix11','activa','2025-05-20 11:48:43','awdasdawdasdawd'),(10,1,'adawdas','adawda@gmail.com','dawdasd','activa','2025-05-20 12:31:15','dadawdasdawdasd'),(14,1,'Toni Rams Sebastia','toniramseb@campus.monlau.com','','activa','2025-05-20 13:05:55','http://monlab.ddns.net/images/noUserImage.jpg'),(15,2,'Usuario de prueba','usuariodeprueba@gmail.com','1234','activa','2025-05-20 13:46:21','sdfsdfsdf'),(23,1,'CHRISTIAN RIERA IGLESIAS','christianrieigl@monlau.com','1234','activa','2025-05-20 14:50:26','blob:http://localhost:8000/11721379-f1fd-4c56-b7d8-a1a7c13298f1'),(27,2,'Roberto Manca','mancar@monlau.com','1234','activa','2025-05-20 15:44:14',NULL),(30,1,'Aleix Martínez Zahiño','aleixmarzah@campus.monlau.com','1234','activa','2025-05-20 15:45:59',NULL),(35,1,'Javier Salvador Marco','salvadorj@monlau.com','1234','activa','2025-05-21 15:33:21','blob:http://localhost:8000/359c22b3-228a-49a6-b31b-8b0503eed0c4'),(36,3,'undefined','andres@gmail.com','1234','activa','2025-05-21 15:44:22','http://monlab.ddns.net/images/noUserImage.jpg'),(39,2,'Raül Castillejo García','raulcasgar@campus.monlau.com','','activa','2025-05-22 15:15:08','http://monlab.ddns.net/images/noUserImage.jpg');
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 20:10:58
