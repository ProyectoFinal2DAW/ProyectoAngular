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
-- Table structure for table `PREGUNTAS`
--

DROP TABLE IF EXISTS `PREGUNTAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PREGUNTAS` (
  `id_pregunta` int(11) NOT NULL AUTO_INCREMENT,
  `id_questionario` int(11) NOT NULL,
  `enunciado` varchar(255) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  `correcta` varchar(255) NOT NULL,
  `respuesta1` varchar(255) NOT NULL,
  `respuesta2` varchar(255) NOT NULL,
  `respuesta3` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `Rel_Preguntas_Cuestionarios` (`id_questionario`),
  CONSTRAINT `Rel_Preguntas_Cuestionarios` FOREIGN KEY (`id_questionario`) REFERENCES `CUESTIONARIOS` (`id_questionario`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PREGUNTAS`
--

LOCK TABLES `PREGUNTAS` WRITE;
/*!40000 ALTER TABLE `PREGUNTAS` DISABLE KEYS */;
INSERT INTO `PREGUNTAS` VALUES (1,1,'¿Cuál es el resultado de 15 ÷ 3?','4','5','3','7','10'),(2,2,'¿Qué es la velocidad?','Distancia/tiempo','Distancia/tiempo','Energía/tiempo','Masa*aceleración','Distancia*tiempo'),(3,1,'¿Cuánto es 8 × 7?','35','56','49','72','64'),(4,1,'¿Cuál es la raíz cuadrada de 81?','dsadads','9','7','8','10'),(8,1,'Si un triángulo tiene un ángulo de 90°, se llama…','sdfsdf','Triángulo rectángulo','Triángulo equilátero','Triángulo obtusángulo','Triángulo isósceles'),(11,10,'Que se utiliza para crear círculos','11','Comàs','Compass','Naranja','Regla'),(12,10,'Que es dibujo técnico','11','El arte de dibujar','Una asignatura','El arte de dibuajr','Nada'),(13,11,'Que se utiliza para crear círculos','11','Comàs','Compass','Naranja','Regla'),(14,12,'Cuanto es 3   5','11','8','3','8','5'),(15,12,'Cuanto es 4 - 8','11','-4','-5','3','-4'),(16,12,'Cuanto es 12 / 6','11','2','3','2','7'),(17,12,'Cuanto es 4 x 6','11','24','23','22','24'),(18,13,'a','11','a','a','a','a'),(19,14,'a','11','a','a','a','a'),(20,15,'a','11','e','b','c','d'),(21,16,'a','11','a','a','a','a'),(22,17,'a','11','a','a','a','a'),(23,18,'g','11','ggg','gg','gg','gg'),(24,19,'hh','11','hh','hh','hh','hh'),(26,21,'trh','11','hr','htrh','thrh','th'),(27,22,'¿Qué representa el campo gravitatorio en un punto del espacio?','11','La fuerza gravitatoria ejercida sobre una masa de prueba unitaria.','La presión que ejerce un objeto sobre el suelo.','La velocidad con la que un objeto cae en ese punto.','La cantidad de energía potencial de un cuerpo.'),(28,22,'¿Qué establece la Ley de Gravitación Universal de Newton?','11','La fuerza gravitatoria entre dos cuerpos es proporcional a sus masas e inversamente proporcional al cuadrado de su distancia.','La gravedad es una fuerza constante en todo el universo.','La fuerza gravitatoria depende solo de la masa del objeto más grande.','Los objetos solo experimentan gravedad cuando están en la superficie de la Tierra.'),(29,23,'¿Qué es el dibujo técnico?','11','Un lenguaje gráfico que representa objetos con precisión y normas específicas.','Un tipo de arte abstracto.','Un estilo libre de ilustración sin reglas establecidas.','Un método para pintar cuadros artísticos.'),(30,23,'¿Cuál de los siguientes instrumentos se utiliza para trazar líneas rectas en dibujo técnico?','11','Escuadra','Compás','Transportador','Pincel'),(31,23,'¿Qué es la escala en el dibujo técnico?','11','La relación entre las dimensiones reales de un objeto y su representación en el dibujo.','Un sistema de colores para identificar los materiales de un objeto.','Un método para sombrear dibujos.','La medición del peso del objeto dibujado.'),(32,23,'¿Qué tipo de línea se usa para representar los contornos visibles de un objeto?','11','Línea de contorno o arista visible','Línea de eje','Línea de corte','Línea discontinua'),(33,23,'¿Qué vista se representa en la parte superior de un dibujo en proyección ortogonal?','11','Vista superior o planta','Vista lateral','Vista frontal','Vista isométrica'),(34,24,'¿Cómo se dice \"Hola\" en francés?','11','Bonjour','Hola','Ciao','Hallo'),(35,24,'¿Cuál es el significado de \"Merci\"?','11','Gracias','Perdón','Por favor','Adiós'),(36,24,'¿Cómo se dice \"Mi nombre es\" en francés?','11','Je m’appelle','Moi nom est','Mon prénom','J’ai nom'),(37,25,'¿Cómo se dice \"Hola\" en francés?','11','Bonjour','Hola','Ciao','Hallo'),(38,25,'¿Cuál es el significado de \"Merci\"?','11','Gracias','Perdón','Por favor','Adiós'),(39,25,'¿Cómo se dice \"Mi nombre es\" en francés?','11','Je m’appelle','Moi nom est','Mon prénom','J’ai nom'),(49,30,'¿Qué magnitud física describe el cambio de posición de un objeto en el tiempo?','11','Velocidad','Aceleración','Rapidez','Masa');
/*!40000 ALTER TABLE `PREGUNTAS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 20:11:00
