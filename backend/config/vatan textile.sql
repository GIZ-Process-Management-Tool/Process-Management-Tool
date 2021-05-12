-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vatan textile
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `cust_order`
--

DROP TABLE IF EXISTS `cust_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust_order` (
  `order_no` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `company` varchar(100) NOT NULL,
  `gst` varchar(15) NOT NULL,
  `quality` varchar(255) NOT NULL,
  `ppc` float(10,2) NOT NULL,
  `rate` float(10,2) NOT NULL,
  `deadline` date NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_order`
--

LOCK TABLES `cust_order` WRITE;
/*!40000 ALTER TABLE `cust_order` DISABLE KEYS */;
INSERT INTO `cust_order` VALUES (1,'2021-05-01','Reliance','R103','Marmesh',23.40,39.80,'2021-05-30',1),(2,'2021-05-02','GIZ','R1010','cotton',40.20,34.50,'2021-05-30',2),(3,'2021-05-01','xyz','R1010','Marmesh',45.00,34.50,'2021-05-30',3),(4,'2021-05-04','Remond','R103','mix',40.90,80.00,'2021-05-30',2),(5,'2021-05-08','Remond','R1010','cotton',70.00,47.00,'2021-05-30',3),(6,'2021-05-05','JNEC','R105','Polyster',34.10,12.10,'2021-05-30',3),(7,'2021-05-07','Reliance','R1011','Silk',50.10,11.00,'2021-05-30',1),(8,'2021-05-05','Remond','R1013','Mix',50.11,44.00,'2021-05-30',3),(9,'2021-05-08','mno','R105','Orbit exprot',59.80,30.10,'2021-05-30',3),(10,'2021-05-08','Reliance','R1015','cotton',29.90,50.00,'2021-05-30',1),(11,'2021-05-09','Reliance','34.2','Marmesh',10.00,24.60,'2021-05-30',3),(12,'2021-03-09','R','45.8','abc',19.00,23.00,'2021-05-30',1),(13,'2021-05-12','Reliance','R1018','cotton',70.00,35.00,'2021-05-30',2);
/*!40000 ALTER TABLE `cust_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `downtime`
--

DROP TABLE IF EXISTS `downtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `downtime` (
  `date` date NOT NULL,
  `loom` int NOT NULL,
  `shift` int NOT NULL,
  `weaver` varchar(100) NOT NULL,
  `downtime` time NOT NULL,
  `remark` varchar(255) NOT NULL,
  PRIMARY KEY (`date`,`loom`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `downtime`
--

LOCK TABLES `downtime` WRITE;
/*!40000 ALTER TABLE `downtime` DISABLE KEYS */;
INSERT INTO `downtime` VALUES ('2021-05-06',2,1,'abc','01:17:00','xyz'),('2021-05-06',3,1,'abc','07:51:00','xyz');
/*!40000 ALTER TABLE `downtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamic_table`
--

DROP TABLE IF EXISTS `dynamic_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dynamic_table` (
  `loom` int NOT NULL,
  `job_work` float DEFAULT NULL,
  `target_rs` float DEFAULT NULL,
  `p_l` float DEFAULT NULL,
  `avg_eff` float DEFAULT NULL,
  `quality` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `production_mtr` float DEFAULT NULL,
  `target` float DEFAULT NULL,
  `diff_mtr` float DEFAULT NULL,
  `eff_day` float DEFAULT NULL,
  `reason` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`loom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamic_table`
--

LOCK TABLES `dynamic_table` WRITE;
/*!40000 ALTER TABLE `dynamic_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `dynamic_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grey`
--

DROP TABLE IF EXISTS `grey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grey` (
  `date` date NOT NULL,
  `shift` int NOT NULL,
  `loom_no` int NOT NULL,
  `worker` varchar(100) NOT NULL,
  `meters` float(10,2) NOT NULL,
  `points` float(10,4) NOT NULL,
  `repairable` int NOT NULL,
  `order_no` int NOT NULL,
  `grade` varchar(5) NOT NULL,
  PRIMARY KEY (`date`,`shift`,`loom_no`,`points`,`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grey`
--

LOCK TABLES `grey` WRITE;
/*!40000 ALTER TABLE `grey` DISABLE KEYS */;
INSERT INTO `grey` VALUES ('2021-05-06',1,2,'abc',15.00,2.0000,1,2,'A'),('2021-05-06',2,3,'abc',56.00,23.0000,1,3,'A'),('2021-05-12',1,9,'pqr',398.00,1.0000,1,13,'A');
/*!40000 ALTER TABLE `grey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loading_chart`
--

DROP TABLE IF EXISTS `loading_chart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loading_chart` (
  `id` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `loom` int NOT NULL,
  `other_details` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`loom`,`start_date`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loading_chart`
--

LOCK TABLES `loading_chart` WRITE;
/*!40000 ALTER TABLE `loading_chart` DISABLE KEYS */;
INSERT INTO `loading_chart` VALUES (2,'2021-05-01','2021-05-15',1,'xyz'),(3,'2021-05-07','2021-05-07',2,'xyz');
/*!40000 ALTER TABLE `loading_chart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loom`
--

DROP TABLE IF EXISTS `loom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loom` (
  `loom_no` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL,
  PRIMARY KEY (`loom_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loom`
--

LOCK TABLES `loom` WRITE;
/*!40000 ALTER TABLE `loom` DISABLE KEYS */;
/*!40000 ALTER TABLE `loom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loom_analysis`
--

DROP TABLE IF EXISTS `loom_analysis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loom_analysis` (
  `l_date` date NOT NULL,
  `loom_no` int NOT NULL,
  `order_no` int NOT NULL,
  `total_mtr` float(10,2) NOT NULL,
  `target_rs` float(10,2) NOT NULL,
  `rs_generated` float(10,2) NOT NULL,
  PRIMARY KEY (`l_date`,`loom_no`,`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loom_analysis`
--

LOCK TABLES `loom_analysis` WRITE;
/*!40000 ALTER TABLE `loom_analysis` DISABLE KEYS */;
INSERT INTO `loom_analysis` VALUES ('2021-05-06',1,1,304.16,12105.57,5105.57),('2021-05-06',2,2,180.15,6215.17,-784.83),('2021-05-06',3,3,41.42,1428.99,-5571.01),('2021-05-06',4,4,271.56,21724.80,14724.80),('2021-05-06',5,5,118.86,5586.42,-1413.58),('2021-05-06',6,6,291.63,3528.72,-3471.28),('2021-05-06',7,7,349.91,3849.01,-1150.99),('2021-05-06',8,8,283.32,12466.08,7466.08),('2021-05-06',9,9,186.71,5619.97,619.97),('2021-05-06',10,10,437.65,21882.50,16882.50),('2021-05-07',1,1,479.45,19082.11,11582.11),('2021-05-07',2,2,222.08,7661.76,161.76),('2021-05-07',3,3,41.43,1429.34,-6070.66),('2021-05-08',4,4,72.72,5817.60,-1182.40),('2021-05-08',5,5,53.61,2519.67,-4480.33),('2021-05-08',6,6,115.01,1391.62,-5608.38),('2021-05-12',1,13,40.86,1430.10,430.10),('2021-05-12',3,13,8.09,283.15,-716.85),('2021-05-12',5,13,135.21,4732.35,3732.35),('2021-05-12',7,13,69.65,2437.75,1437.75),('2021-05-12',9,13,26.38,923.30,-76.70);
/*!40000 ALTER TABLE `loom_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loom_charges`
--

DROP TABLE IF EXISTS `loom_charges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loom_charges` (
  `l_date` date NOT NULL,
  `somet` float(10,2) NOT NULL,
  `dornier` float(10,2) NOT NULL,
  PRIMARY KEY (`l_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loom_charges`
--

LOCK TABLES `loom_charges` WRITE;
/*!40000 ALTER TABLE `loom_charges` DISABLE KEYS */;
INSERT INTO `loom_charges` VALUES ('2021-05-06',7000.00,5000.00),('2021-05-07',7500.00,8500.00),('2021-05-08',7000.00,10000.00),('2021-05-12',1000.00,1000.00);
/*!40000 ALTER TABLE `loom_charges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packing`
--

DROP TABLE IF EXISTS `packing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packing` (
  `order_no` int NOT NULL,
  `length` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packing`
--

LOCK TABLES `packing` WRITE;
/*!40000 ALTER TABLE `packing` DISABLE KEYS */;
INSERT INTO `packing` VALUES (3,1432,180,'2021-05-06'),(4,4321,4,'2021-05-06'),(5,40.8,50.1,'2021-05-14'),(8,49,70,'2021-05-15'),(11,20,12,'2021-05-08'),(13,80,85,'2021-05-12');
/*!40000 ALTER TABLE `packing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process`
--

DROP TABLE IF EXISTS `process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `process` (
  `process_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`process_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process`
--

LOCK TABLES `process` WRITE;
/*!40000 ALTER TABLE `process` DISABLE KEYS */;
INSERT INTO `process` VALUES (1,'storage'),(2,'winding'),(3,'warping'),(4,'looming'),(5,'weaving'),(6,'checking'),(7,'repairing'),(8,'packing'),(9,'dispatch');
/*!40000 ALTER TABLE `process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair`
--

DROP TABLE IF EXISTS `repair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair` (
  `order_no` int NOT NULL,
  `date` date NOT NULL,
  `machine` int NOT NULL,
  `worker` varchar(100) NOT NULL,
  `repairing_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`repairing_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair`
--

LOCK TABLES `repair` WRITE;
/*!40000 ALTER TABLE `repair` DISABLE KEYS */;
INSERT INTO `repair` VALUES (2,'2021-05-06',2,'abc',22),(4,'2021-05-06',1,'pqr',23),(13,'2021-05-12',1,'abc',24),(13,'2021-05-12',2,'abc',25);
/*!40000 ALTER TABLE `repair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shift` (
  `s_date` date NOT NULL,
  `order_no` int NOT NULL,
  `loom_no` int NOT NULL,
  `shift` int NOT NULL,
  `total_picks` float(10,2) NOT NULL,
  `meter` float(10,2) NOT NULL,
  `warped_yarn_received` int DEFAULT NULL,
  `waste_weight` float DEFAULT NULL,
  PRIMARY KEY (`s_date`,`order_no`,`loom_no`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift`
--

LOCK TABLES `shift` WRITE;
/*!40000 ALTER TABLE `shift` DISABLE KEYS */;
INSERT INTO `shift` VALUES ('2021-05-06',1,1,1,145324.00,62.10,1,10.9),('2021-05-06',1,1,2,134253.00,57.37,1,3),('2021-05-06',2,2,1,180971.00,45.02,1,20),('2021-05-06',2,2,2,543218.00,135.13,1,4),('2021-05-06',3,3,1,109867.00,24.41,1,34),('2021-05-06',3,3,2,76543.00,17.01,1,7),('2021-05-06',4,4,1,234165.00,57.25,1,1),('2021-05-06',4,4,2,876543.00,214.31,1,3),('2021-05-06',5,5,1,288831.00,41.26,1,5),('2021-05-06',5,5,2,543222.00,77.60,1,9),('2021-05-06',6,6,1,453210.00,132.91,1,6),('2021-05-06',6,6,2,541245.00,158.72,1,3),('2021-05-06',7,7,1,876512.00,174.95,1,3),('2021-05-06',7,7,2,876541.00,174.96,1,3),('2021-05-06',8,8,1,876541.00,174.92,1,4),('2021-05-06',8,8,2,543216.00,108.40,1,3),('2021-05-06',9,9,1,654321.00,109.42,1,2),('2021-05-06',9,9,2,462190.00,77.29,1,2),('2021-05-06',10,10,1,321465.00,107.51,1,3),('2021-05-06',10,10,2,987123.00,330.14,1,2),('2021-05-07',1,1,1,245380.00,104.86,1,5),('2021-05-07',1,1,2,876543.00,374.59,1,20),('2021-05-07',2,2,1,678452.00,168.77,1,3),('2021-05-07',2,2,2,214325.00,53.31,1,9),('2021-05-07',3,3,1,43215.00,9.60,1,2),('2021-05-07',3,3,2,143256.00,31.83,1,1),('2021-05-08',4,4,1,109756.00,26.84,1,2),('2021-05-08',4,4,2,187654.00,45.88,1,1),('2021-05-08',5,5,1,198765.00,28.39,1,2),('2021-05-08',5,5,2,176543.00,25.22,1,2),('2021-05-08',6,6,1,198469.00,58.20,1,3),('2021-05-08',6,6,2,193726.00,56.81,1,2),('2021-05-12',13,1,1,102976.00,14.71,1,10),('2021-05-12',13,1,2,183029.00,26.15,1,10),('2021-05-12',13,3,1,46276.00,6.61,1,10),('2021-05-12',13,3,2,10393.00,1.48,1,10),('2021-05-12',13,5,1,452728.00,64.68,1,10),('2021-05-12',13,5,2,493739.00,70.53,1,10),('2021-05-12',13,7,1,103937.00,14.85,1,10),('2021-05-12',13,7,2,383628.00,54.80,1,10),('2021-05-12',13,9,1,135389.00,19.34,1,10),('2021-05-12',13,9,2,49303.00,7.04,1,10);
/*!40000 ALTER TABLE `shift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_analysis`
--

DROP TABLE IF EXISTS `shift_analysis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shift_analysis` (
  `s_date` date NOT NULL,
  `shift` int NOT NULL,
  `total_mtr` float(10,2) DEFAULT NULL,
  `total_picks` float(10,2) DEFAULT NULL,
  `target` float(10,2) DEFAULT NULL,
  `balance` float(10,2) DEFAULT NULL,
  `supervisor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`s_date`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_analysis`
--

LOCK TABLES `shift_analysis` WRITE;
/*!40000 ALTER TABLE `shift_analysis` DISABLE KEYS */;
INSERT INTO `shift_analysis` VALUES ('2021-05-06',1,929.75,4141207.00,1000000.00,3141207.00,'abcd'),('2021-05-06',2,1136.62,4707551.00,1000000.00,3707551.00,'abcd'),('2021-05-07',1,283.23,967047.00,1000000.00,-32953.00,'mnop'),('2021-05-07',2,459.73,1234124.00,1000000.00,234124.00,'mn'),('2021-05-08',1,113.43,506990.00,1000000.00,-493010.00,'jnec'),('2021-05-08',2,127.91,557923.00,1000000.00,-442077.00,'abcd'),('2021-05-12',1,120.19,841306.00,1000000.00,-158694.00,'abcd'),('2021-05-12',2,160.00,1120092.00,1999.00,1118093.00,'1777');
/*!40000 ALTER TABLE `shift_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking1`
--

DROP TABLE IF EXISTS `tracking1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking1` (
  `orderNo` int NOT NULL,
  `processId` int NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_general_ci DEFAULT 'False',
  `error` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` time DEFAULT NULL,
  PRIMARY KEY (`orderNo`,`processId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking1`
--

LOCK TABLES `tracking1` WRITE;
/*!40000 ALTER TABLE `tracking1` DISABLE KEYS */;
INSERT INTO `tracking1` VALUES (1,0,'true',NULL,NULL),(1,1,'False',NULL,NULL),(1,3,'False',NULL,NULL),(2,0,'False',NULL,NULL),(2,1,'true',NULL,NULL),(2,2,'true',NULL,NULL),(2,3,'true',NULL,NULL),(2,4,'true',NULL,NULL),(2,5,'true',NULL,NULL),(3,0,'False',NULL,NULL),(3,1,'False',NULL,NULL),(3,2,'False',NULL,NULL),(3,3,'False',NULL,NULL),(4,0,'False',NULL,NULL),(4,1,'False',NULL,NULL),(5,2,'False',NULL,NULL),(5,3,'False',NULL,NULL),(6,0,'False',NULL,NULL),(6,1,'False',NULL,NULL),(6,2,'False',NULL,NULL),(6,3,'False',NULL,NULL),(6,4,'False',NULL,NULL),(7,0,'False',NULL,NULL),(7,1,'False',NULL,NULL),(7,2,'False',NULL,NULL),(7,3,'False',NULL,NULL),(11,0,'False',NULL,NULL),(11,1,'False',NULL,NULL),(11,2,'False',NULL,NULL),(11,3,'False',NULL,NULL),(12,5,'False',NULL,NULL),(13,0,'true','','20:47:40'),(13,1,'true','','21:38:49'),(13,2,'true','','21:51:39'),(13,3,'true','',NULL),(13,4,'true','','22:16:32'),(13,5,'true','',NULL);
/*!40000 ALTER TABLE `tracking1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warping`
--

DROP TABLE IF EXISTS `warping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warping` (
  `order_no` int NOT NULL,
  `date` date NOT NULL,
  `weight_o_w_y` float DEFAULT NULL,
  `waste_weight` float DEFAULT NULL,
  `package_defect` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warping`
--

LOCK TABLES `warping` WRITE;
/*!40000 ALTER TABLE `warping` DISABLE KEYS */;
INSERT INTO `warping` VALUES (2,'2021-05-07',70.8,30.89,'abc'),(13,'2021-05-12',20,20,'xyz...');
/*!40000 ALTER TABLE `warping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `winding`
--

DROP TABLE IF EXISTS `winding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `winding` (
  `yarn_received` int NOT NULL,
  `no_of_cones` int NOT NULL,
  `size_of_cones` float NOT NULL,
  `no_of_doffs` int NOT NULL,
  `weight_of_cones` float NOT NULL,
  `weight_of_waste` float DEFAULT NULL,
  `order_no` int NOT NULL,
  `date` date NOT NULL,
  `package_defect` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winding`
--

LOCK TABLES `winding` WRITE;
/*!40000 ALTER TABLE `winding` DISABLE KEYS */;
INSERT INTO `winding` VALUES (1,7,35,22,53,77,2,'2021-05-07','no'),(0,2,20,19,50,39,13,'2021-05-12','xyz...');
/*!40000 ALTER TABLE `winding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wtti`
--

DROP TABLE IF EXISTS `wtti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wtti` (
  `w_date` date NOT NULL,
  `balance_forDay` float(10,2) NOT NULL,
  `target_asDate` float(10,2) NOT NULL,
  `achieved_asDate` float(10,2) NOT NULL,
  `balance_asDate` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`w_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wtti`
--

LOCK TABLES `wtti` WRITE;
/*!40000 ALTER TABLE `wtti` DISABLE KEYS */;
INSERT INTO `wtti` VALUES ('2021-05-06',6848758.00,2000000.00,8848758.00,6848758.00),('2021-05-07',201171.00,2000000.00,2201171.00,201171.00),('2021-05-08',-935087.00,2000000.00,1064913.00,-935087.00),('2021-05-12',959399.00,1001999.00,1961398.00,959399.00);
/*!40000 ALTER TABLE `wtti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yarn_storage`
--

DROP TABLE IF EXISTS `yarn_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yarn_storage` (
  `yarn_received` int NOT NULL,
  `weight` float NOT NULL,
  `quality` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `order_no` int NOT NULL,
  `y_date` date DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yarn_storage`
--

LOCK TABLES `yarn_storage` WRITE;
/*!40000 ALTER TABLE `yarn_storage` DISABLE KEYS */;
INSERT INTO `yarn_storage` VALUES (1,23,'Marmesh',1,'2021-05-06'),(1,112,'Marmesh',2,'2021-05-06'),(1,50,'Marmesh',13,'2021-05-12');
/*!40000 ALTER TABLE `yarn_storage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-12 23:00:20
