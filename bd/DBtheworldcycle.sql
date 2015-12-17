-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: theworldcycle
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adreca`
--

DROP TABLE IF EXISTS `adreca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adreca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carrer` varchar(45) NOT NULL,
  `numero` int(11) NOT NULL,
  `pis` int(11) DEFAULT NULL,
  `porta` int(11) DEFAULT NULL,
  `postal` int(11) NOT NULL,
  `id_ciutat` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adreca`
--

LOCK TABLES `adreca` WRITE;
/*!40000 ALTER TABLE `adreca` DISABLE KEYS */;
INSERT INTO `adreca` VALUES (2,'C/Maria Trulls Algué',53,NULL,NULL,8700,1),(3,'C/Calaf',103,1,2,8700,1),(4,'C/Masquefa',9,1,1,98765,13),(5,'C/Masquefa',9,2,2,98765,13),(6,'C/Masquefa',9,1,1,98765,1),(7,'C/Capallades',102,1,1,8700,1),(8,'C/Calaf',23,1,1,8700,1),(9,'C/Valencia',2,3,3,9876,15),(10,'C/Castelloli',3,NULL,NULL,8700,1);
/*!40000 ALTER TABLE `adreca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignacio`
--

DROP TABLE IF EXISTS `asignacio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asignacio` (
  `id_clt` int(11) NOT NULL,
  `id_trb` int(11) NOT NULL,
  `data_inici` date NOT NULL,
  `data_final` date DEFAULT NULL,
  PRIMARY KEY (`id_clt`,`id_trb`,`data_inici`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignacio`
--

LOCK TABLES `asignacio` WRITE;
/*!40000 ALTER TABLE `asignacio` DISABLE KEYS */;
/*!40000 ALTER TABLE `asignacio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `descripcio` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciutat`
--

DROP TABLE IF EXISTS `ciutat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciutat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciutat`
--

LOCK TABLES `ciutat` WRITE;
/*!40000 ALTER TABLE `ciutat` DISABLE KEYS */;
INSERT INTO `ciutat` VALUES (1,'Igualada'),(2,'Cervera'),(3,'Barcelona'),(4,'Girona'),(5,'Lleida'),(6,'La Pobla de Claramunt'),(7,'Olot'),(8,'Sitges'),(9,'Montbui'),(10,'Calaf'),(12,'Sant Genis'),(13,'Tarragona'),(15,'Cuenca'),(16,'');
/*!40000 ALTER TABLE `ciutat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id_usuari` int(11) NOT NULL,
  `experencia` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuari`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentar`
--

DROP TABLE IF EXISTS `comentar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentar` (
  `id_producte` int(11) NOT NULL,
  `id_usuari` int(11) NOT NULL,
  `data` date NOT NULL,
  `descripcio` varchar(500) NOT NULL,
  PRIMARY KEY (`id_producte`,`id_usuari`,`data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentar`
--

LOCK TABLES `comentar` WRITE;
/*!40000 ALTER TABLE `comentar` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra` (
  `id_producte` int(11) NOT NULL,
  `id_usuari` int(11) NOT NULL,
  `data` date NOT NULL,
  `quantitat` int(11) NOT NULL,
  `id_factura` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_producte`,`id_usuari`,`data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrassenya`
--

DROP TABLE IF EXISTS `contrassenya`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contrassenya` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrassenya`
--

LOCK TABLES `contrassenya` WRITE;
/*!40000 ALTER TABLE `contrassenya` DISABLE KEYS */;
INSERT INTO `contrassenya` VALUES (35,'250cf8b51c773f3f8dc8b4be867a9a02'),(36,'202cb962ac59075b964b07152d234b70'),(37,'189bbbb00c5f1fb7fba9ad9285f193d1'),(38,'3350073dd991a43b05aedf4969ea7e46'),(39,'1775223eeeb515c77a7f201db191af09'),(40,'d41d8cd98f00b204e9800998ecf8427e');
/*!40000 ALTER TABLE `contrassenya` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estat`
--

DROP TABLE IF EXISTS `estat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcio` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`descripcio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estat`
--

LOCK TABLES `estat` WRITE;
/*!40000 ALTER TABLE `estat` DISABLE KEYS */;
INSERT INTO `estat` VALUES (1,'activat'),(2,'baixa');
/*!40000 ALTER TABLE `estat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factura` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preutotal` float NOT NULL,
  `preu_iva` float NOT NULL,
  `preu_tasa` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura_iva`
--

DROP TABLE IF EXISTS `factura_iva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factura_iva` (
  `id_factura` int(11) NOT NULL,
  `id_iva` int(11) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id_factura`,`id_iva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura_iva`
--

LOCK TABLES `factura_iva` WRITE;
/*!40000 ALTER TABLE `factura_iva` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura_iva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura_tasa`
--

DROP TABLE IF EXISTS `factura_tasa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factura_tasa` (
  `id_factura` int(11) NOT NULL,
  `id_tasa` int(11) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id_factura`,`id_tasa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura_tasa`
--

LOCK TABLES `factura_tasa` WRITE;
/*!40000 ALTER TABLE `factura_tasa` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura_tasa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imatge`
--

DROP TABLE IF EXISTS `imatge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imatge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_arxiu` varchar(45) NOT NULL,
  `id_producte` int(11) NOT NULL,
  `imatgecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imatge`
--

LOCK TABLES `imatge` WRITE;
/*!40000 ALTER TABLE `imatge` DISABLE KEYS */;
/*!40000 ALTER TABLE `imatge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iva`
--

DROP TABLE IF EXISTS `iva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `iva` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `percentatge` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iva`
--

LOCK TABLES `iva` WRITE;
/*!40000 ALTER TABLE `iva` DISABLE KEYS */;
/*!40000 ALTER TABLE `iva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producte`
--

DROP TABLE IF EXISTS `producte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `preu` float NOT NULL,
  `unitat` int(11) NOT NULL,
  `nou/segon` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producte`
--

LOCK TABLES `producte` WRITE;
/*!40000 ALTER TABLE `producte` DISABLE KEYS */;
INSERT INTO `producte` VALUES (1,'Quadro Canyon',123.3,3,'nou'),(2,'Quadro Trek',32.2,4,'segon'),(3,'Suspensio Trek',33.2,2,'nou'),(4,'Suspensio shark',333.2,1,'segon'),(5,'Roda',12,3,'nou'),(6,'Frens Shimano',333,2,'nou'),(7,'Frens Shimano FatBike',33,4,'nou'),(8,'Bici Canyon SL',1000,2,'nou'),(9,'Bici Trek',2000,3,'nou'),(10,'Bici Trek',800,1,'segon'),(11,'Bici Specialized',1200,2,'nou');
/*!40000 ALTER TABLE `producte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permisos` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'treballador'),(3,'client');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasa`
--

DROP TABLE IF EXISTS `tasa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `percentatge` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasa`
--

LOCK TABLES `tasa` WRITE;
/*!40000 ALTER TABLE `tasa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `te_prd_ctg`
--

DROP TABLE IF EXISTS `te_prd_ctg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `te_prd_ctg` (
  `id_producte` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_producte`,`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `te_prd_ctg`
--

LOCK TABLES `te_prd_ctg` WRITE;
/*!40000 ALTER TABLE `te_prd_ctg` DISABLE KEYS */;
/*!40000 ALTER TABLE `te_prd_ctg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treballador`
--

DROP TABLE IF EXISTS `treballador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `treballador` (
  `id_usuari` int(11) NOT NULL,
  `data_inici` date NOT NULL,
  `data_fi_contracte` date DEFAULT NULL,
  PRIMARY KEY (`id_usuari`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treballador`
--

LOCK TABLES `treballador` WRITE;
/*!40000 ALTER TABLE `treballador` DISABLE KEYS */;
/*!40000 ALTER TABLE `treballador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuari`
--

DROP TABLE IF EXISTS `usuari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correu` varchar(100) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `cognom1` varchar(45) NOT NULL,
  `cognom2` varchar(45) DEFAULT NULL,
  `telefon` int(11) NOT NULL,
  `data_naix` date NOT NULL,
  `data_inici` date NOT NULL,
  `id_roles` int(11) NOT NULL,
  `id_adreca` int(11) NOT NULL,
  `id_contrassenya` int(11) NOT NULL,
  `id_estat` int(11) NOT NULL,
  PRIMARY KEY (`id`,`correu`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuari`
--

LOCK TABLES `usuari` WRITE;
/*!40000 ALTER TABLE `usuari` DISABLE KEYS */;
INSERT INTO `usuari` VALUES (3,'rogercat23@gmail.com','Roger','Freixes','Ribalta',617317321,'1991-03-03','1991-03-27',2,1,37,1),(4,'prova@gmail.com','Joan','Castells','Lopez',234534653,'1998-03-12','1998-05-28',1,1,37,1),(6,'cep@cep.net','Antonio','Dominiguez','Gomez',432345467,'1967-12-01','2015-10-14',1,1,37,1),(7,'sergio@gmail.com','Sergio','Ruiz','Muntaner',123123123,'1990-03-03','2015-10-15',1,1,37,1),(11,'ramon@gmail.com','Ramon','Freixes','Batalla',123123123,'1960-03-25','2015-10-15',1,1,37,1),(12,'llull@gmail.com','Llull','Murcia','Fernandez',12345678,'1990-05-21','2015-10-29',1,1,37,1),(13,'juanlopez@gmail.com','Juan','Lopez','Fernandez',123456789,'1992-05-10','2015-11-12',1,7,39,1),(14,'joseluis@gmail.com','Jose Luis','Sanchez','Arroyo',123456789,'1999-03-23','2015-11-19',1,8,37,1),(15,'ciber@gmail.com','Ciber','Ciber1','Ciber2',98765432,'1991-04-23','2015-11-24',1,9,37,1),(16,'prova23@gmail.com','Prova','Prova','Prova',987654321,'1991-03-24','2015-11-24',1,10,37,1),(17,'albert@gmail.com','Albert','Vialata','Fernadez',123456789,'1991-03-02','1991-03-07',1,1,37,1);
/*!40000 ALTER TABLE `usuari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendre`
--

DROP TABLE IF EXISTS `vendre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendre` (
  `id_producte` int(11) NOT NULL,
  `id_usuari` int(11) NOT NULL,
  `data` date NOT NULL,
  `quantitat` int(11) NOT NULL,
  PRIMARY KEY (`id_producte`,`id_usuari`,`data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendre`
--

LOCK TABLES `vendre` WRITE;
/*!40000 ALTER TABLE `vendre` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-17 23:10:14
