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
-- Table structure for table `EXPERIMENTOS`
--

DROP TABLE IF EXISTS `EXPERIMENTOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EXPERIMENTOS` (
  `id_experimento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_experimento` varchar(80) NOT NULL,
  `descrip_experimento` varchar(1200) DEFAULT NULL,
  `foto_experimento` varchar(6000) DEFAULT NULL,
  `video_experimento` varchar(100) DEFAULT NULL,
  `asignatura` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_experimento`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EXPERIMENTOS`
--

LOCK TABLES `EXPERIMENTOS` WRITE;
/*!40000 ALTER TABLE `EXPERIMENTOS` DISABLE KEYS */;
INSERT INTO `EXPERIMENTOS` VALUES (1,'Plano inclinado','Este experimento consiste en deslizar un objeto por un plano inclinado para observar su movimiento y analizar cómo la inclinación afecta su aceleración. Se mide el tiempo que tarda el objeto en recorrer una distancia determinada sobre el plano. Con estos datos se calcula la aceleración y se verifica la segunda ley de Newton. También se puede estudiar el efecto de la fricción y comparar los resultados teóricos con los experimentales. Es una forma práctica de entender el movimiento rectilíneo uniformemente acelerado.','http://monlab.ddns.net/images/arduinillo.jpg','http://monlab.ddns.net/images/caidaLibre.mp4','Física'),(7,'Reacción de Neutralización Ácido-Base','Este experimento demuestra la neutralización entre un ácido y una base, produciendo una sal y agua. Se utiliza ácido clorhídrico (HCl) y una solución de hidróxido de sodio (NaOH), añadiendo un indicador como fenolftaleína para observar el cambio de color que señala el punto de neutralización.','https://img.freepik.com/foto-gratis/cerrar-retrato-manos-mujer-joven-sosteniendo-tubo-ensayo-liquido-amarillo_273609-13628.jpg?t=st=1745506841~exp=1745510441~hmac=6a3a59e876265e67257dff005800be7a0c3674f43f76875bdd8d02edffc4b9bf&w=996','http://monlab.ddns.net/images/acidoBase.mp4','Química'),(8,'Electrólisis del Agua','Este experimento permite observar la descomposición del agua en hidrógeno y oxígeno mediante electrólisis. Se aplica corriente eléctrica a través de agua destilada con un poco de electrolito (como ácido sulfúrico diluido o bicarbonato de sodio) y se recogen los gases liberados en los electrodos. El volumen del gas de hidrógeno es el doble que el del oxígeno, confirmando la fórmula H₂O.','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHaiDCbAQrYoj6aRiU0btRAoZ5hYF2jBHIzMHCDXtZvpRfLf97DMOQ-IaCMuEkfL_DNxuEdM-bQUKPL4MyhjoYoDeuLgQ6jeb_ugAqFq3JSHx7l-AytHW9tWQLKM09EF6RKdopacUpgVY/s1600/000493025.png','http://monlab.ddns.net/images/electrolisisAgua.mp4','Química');
/*!40000 ALTER TABLE `EXPERIMENTOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 20:10:57
