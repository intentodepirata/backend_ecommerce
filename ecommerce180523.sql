-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'pantalla','repuestos para la reparacion de su pantalla'),(2,'bateria','repuesto de bateria para tu movil');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  `producto_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `comentarios_usuario_idfk_idx` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_usuario_idfk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Una calidad excepcional, rapida entrega y el repuesto bien embalado y protegido ',5,1,14),(2,'Tenia el movil roto y en menos de 24h tenia el pedido en casa, encima era el precio mas bajo de toda la web. una maravilla',4,1,18),(3,'Me encanta esta pagina, tienen siempre el mejor precio y los repuestos de calidad, encima el envio me salio gratis por agrupar mas de 100 euros en el pedido. Volveria a comprar ',5,1,21);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `calle` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `codigo_postal` varchar(10) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `extra` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `direcciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (4,14,'664740061','Francia','81','Estacion De Cartama','Malaga','29580','España','antonio','lopez','1A','intentodepirata@hotmail.com'),(6,14,'664740061','Pizarra','5','Estacion De Cartama','Estacion De Cartama','29580','España','antonio','lopez','1A','intentodepirata@hotmail.com'),(7,14,'664740061','Pizarra','5','Estacion De Cartama','Estacion De Cartama','29580','España','antonio','lopez','1A','intentodepirata@hotmail.com'),(8,21,'611333222','polo de contenidos digitales','1','Malaga','Malaga','29002','España','Josema','Ezquerra Lebrón','bajo','josema@releevant.com'),(9,22,'677555999','alora','12','estacion de cartama','malaga','29580','España','Daniel','trapito','bajo','suiza@suiza.com');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Samsung'),(2,'Xiaomi'),(3,'Apple'),(4,'Huawei'),(5,'OnePlus'),(6,'OPPO');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos`
--

DROP TABLE IF EXISTS `modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) DEFAULT NULL,
  `marcas_id` int NOT NULL,
  `descripcion_modelo` text,
  PRIMARY KEY (`id`),
  KEY `fk_modelos_marcas1_idx` (`marcas_id`),
  CONSTRAINT `fk_modelos_marcas1` FOREIGN KEY (`marcas_id`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos`
--

LOCK TABLES `modelos` WRITE;
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` VALUES (1,'SM-A405F',1,'Pantalla de 6.5\" y bateria de 4500mh '),(2,'SM-G950F',1,'Pantalla de 6\" y bateria de 5000mh '),(3,'SM-G980F',1,'Pantalla de 6.9\" y bateria de 5000mh '),(4,'Redmi Note 9 Pro',2,'Pantalla de 6.8\" y bateria de 5600mh '),(5,'iPhone 11',3,'Pantalla de 5.8\" y bateria de 4300mh '),(6,'SM-A505F',1,'Pantalla de 5.9\" y bateria de 4800mh '),(7,'Mi 10',2,'Pantalla de 6.5\" y bateria de 6800mh '),(8,'P30 Lite',4,'Pantalla de 5.5\" y bateria de 4300mh '),(9,'OnePlus 8T',5,'Pantalla de 5.9\" y bateria de 4900mh '),(10,'P40',4,'Pantalla de 6.9\" y bateria de 6400mh '),(11,'iPhone X',3,'Pantalla de 5.9\" y bateria de 4370mh'),(12,'Iphone 12',3,'Pantalla de 5.9\" y bateria de 4370mh'),(13,'SM-G998B/DS',1,'Samsung Galaxy S21 Ultra 5G. Pantalla táctil Dynamic AMOLED 2X, HDR10+, 120 Hz16 millones de colores. Quad 108 MP, f/1.8, 24mm (gran angular) + 10 MP, f/4.9, 240mm (cámara periscópica) + 10 MP, f/2.4, 70mm (telefotográfico) + 12 MP, f/2.2, 13mm (ultra gran angular)'),(26,'SM-A125F',1,'Entre lo bueno y lo malo, el Samsung Galaxy A12 (SM-A125F/DS 64GB) es un móvil Android con procesador de 2.3GHz Octa-core que permite ejecutar juegos y aplicaciones pesadas.  Una ventaja del Samsung Galaxy A12 (SM-A125F/DS 64GB) es la capacidad de utilizar dos operadores móvil, un terminal Doble-SIM con dos ranuras para tarjetas SIM.  Buena conectividad de este terminal que incluye Bluetooth 5.0 + A2DP/LE, WiFi 802.11 b/g/n (2.4GHz), pero carece de conexión NFC.'),(27,'SM-A305F',1,'Una ventaja del Samsung Galaxy A30 (SM-A305FN/DS) es la capacidad de utilizar dos operadores móvil, un terminal Doble-SIM con dos ranuras para tarjetas SIM.  Gran conectividad de este terminal que incluye Bluetooth 5.0 + A2DP/LE, WiFi 802.11 a/b/g/n/ac [wifi5] (2.4GHz, 5GHz) + MIMO y NFC para realizar pagos y permite la conexión a otros terminales.'),(28,'SM-A315F',1,'Entre lo bueno y lo malo, el Samsung Galaxy A31 (SM-A315F/DS 128GB) es un móvil Android con procesador de 2GHz Octa-core que permite ejecutar juegos y aplicaciones pesadas.'),(29,'SM-A705F',1,'Una ventaja del Samsung Galaxy A70 (SM-A705FN/DS) es la capacidad de utilizar dos operadores móvil, un terminal Doble-SIM con dos ranuras para tarjetas SIM.  Gran conectividad de este terminal que incluye Bluetooth 5.0 + A2DP/LE, WiFi 802.11 a/b/g/n/ac [wifi5] (2.4GHz, 5GHz) + MIMO y NFC para realizar pagos y permite la conexión a otros terminales'),(30,'SM-N986B/DS 256GB',1,'Exynos 990 | AMOLED 6.9\' WQHD+ | 12GB | 4500mAh | 108+12.2+13+0.3MP : 10MP | Sensor Huella | 5G ');
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `total` decimal(15,2) NOT NULL,
  `direccion_id` int DEFAULT NULL,
  `tarjeta_id` int DEFAULT NULL,
  `impuestos` decimal(15,2) DEFAULT '0.21',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `direccion_id` (`direccion_id`),
  KEY `tarjeta_id` (`tarjeta_id`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`direccion_id`) REFERENCES `direcciones` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`tarjeta_id`) REFERENCES `tarjetas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_productos`
--

DROP TABLE IF EXISTS `pedidos_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos_productos` (
  `pedido_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio_producto` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`pedido_id`,`producto_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `pedidos_productos_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pedidos_productos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_productos`
--

LOCK TABLES `pedidos_productos` WRITE;
/*!40000 ALTER TABLE `pedidos_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `categoria_id` int NOT NULL,
  `cantidad` int NOT NULL DEFAULT '0',
  `rating` int NOT NULL DEFAULT '0',
  `referencia` varchar(255) NOT NULL,
  `modelos_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `fk_productos_modelos1_idx` (`modelos_id`),
  CONSTRAINT `fk_productos_modelos1` FOREIGN KEY (`modelos_id`) REFERENCES `modelos` (`id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Pantalla oled compatible para iPhone X','Pantalla OLED compatible para el iPhone X',59.99,'iphone-x-pantalla.webp',1,50,5,'PANT-001',11),(16,'Pantalla completa Samsung Galaxy A12','Pantalla Original LCD para Samsung Galaxy SM-A125F',49.00,'pantallaiphone12.webp',1,13,4,'GH97-21900A',26),(17,'Pantalla completa Samsung Galaxy A30','Pantalla Original LCD para Samsung Galaxy SM-A305F',50.00,'A30.webp',1,23,4,'GH97-18450A',27),(18,'Pantalla Samsung A70 / A705','Pantalla Original Amoled para Samsung A70 / A705',79.00,'A70.webp',1,12,3,'GH97-17530A',29),(19,'Pantalla completa con marco para Huawei p40','Pantalla Original LCD para Huawei p40 servicepack',119.00,'huawei-p40-bateria.webp',1,3,4,'PANT-HP40-1',10),(23,'Pantalla completa Samsung Galaxy A31','Pantalla Original LCD para Samsung Galaxy SM-A315F',65.00,'A31.webp',1,12,5,'GH97-18900A',28);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre_en_tarjeta` varchar(50) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `vencimiento_mes` tinyint NOT NULL,
  `vencimiento_anio` smallint NOT NULL,
  `cvv` varchar(4) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tarjetas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` VALUES (3,14,'Antonio Alvarez Lopez','1234123412341234',12,12,'123','Visa'),(4,14,'Antonio Alvarez Lopez','1234123412341239',11,11,'111','Mastercard'),(5,14,'Antonio Alvarez Lopez','1234123412341234',12,12,'222','Visa'),(6,14,'Antonio Alvarez Lopez12','1234123412341234',12,12,'444','Visa'),(7,14,'Antonio Alvarez Lopez','1234123412343565',11,12,'77','Visa'),(8,14,'Antonio Alvarez Lopez','1234123412341234',11,21,'1','Visa'),(9,14,'Antonio Alvarez Lopez','1234123412341234',11,11,'111','Visa'),(10,21,'Josema Ezquerra','22223331115678',1,29,'123','Visa Gold'),(11,22,'Daniel Trapito','2222444466663333',12,12,'123','Visa gold'),(12,23,'Antonio Alvarez Lopez','1234123412341234',12,12,'123','Visa');
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `token` varchar(255) DEFAULT NULL,
  `confirmado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (14,'antonio','lopez','intentodepirata@hotmail.com',' $2b$10$QVi0UkrHC7ghJElJfoDdiOYgeHWZOS/gQ6JX/pmDeDsxCPoyS.Lui',1,'23e2323wfdwdwed',1),(18,'Lucia','diaz montilla','correo@correo.com','$2b$10$SbpyypQAyp75xkMTZ.SQR.tyN1I.lStTQPIFY6YNkTt0iBbhNtg3i',0,'23e2323wfdwdwed',1),(21,'Josema','Ezquerra Lebrón','josema@releevant.com','$2b$10$.eHEK/A1Y1/gZ7Oe11TKv.1O6d0o30WJXcaYdIz/I9CorY1CDPjQ.',0,'23e2323wfdwdwed',1),(22,'Daniel','trapito','suiza@suiza.com','$2b$10$FsY0pkYKu0APyET3ZO75UeVSZDf.cvAMb1NzSGW/bgwC7iyzGLEpu',0,'23e2323wfdwdwed',1),(23,'israel','menis','correo3@correo.com','$2b$10$GbqXFF3fdArQ5Zcoa.oDIOFpyPs5MXwpczYckMrlqKEP.dMWIOIyO',0,'23e2323wfdwdwed',1),(24,'antonio','lopez','intentodepirata@gmail.com','$2b$10$91ZIsE3LI5KLqi.HUl8Qz.VYvkeJU6fRAFLXsz41nE97EDovV/PQq',1,'23e2323wfdwdwed',1),(26,'Nacho','Viano','nacho@releevant.com','$2b$10$NCazGjgY5AFzupjLdYD9iORbVIgKn338EoihshBzTUGYjrU8a1wza',0,'23e2323wfdwdwed',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 19:52:46
