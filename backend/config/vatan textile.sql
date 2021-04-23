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
  `target` float(10,2) NOT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_order`
--

LOCK TABLES `cust_order` WRITE;
/*!40000 ALTER TABLE `cust_order` DISABLE KEYS */;
INSERT INTO `cust_order` VALUES (1,'2021-03-03','Reliance','R100','marmesh',24.40,25.60,'2021-04-20',10000.00),(2,'2021-03-03','Reliance','R101','marmesh',20.00,25.60,'2021-04-20',10000.00),(3,'2021-03-03','Reliance','R102','marmesh',23.00,25.67,'2021-04-20',10000.00),(4,'2021-03-03','Reliance','R103','marmesh',21.00,30.00,'2021-04-20',10000.00),(5,'2021-03-03','Reliance','R104','marmesh',24.00,31.00,'2021-04-20',10000.00),(6,'2021-03-03','Reliance','R105','marmesh',23.00,32.00,'2021-04-20',10000.00),(7,'2021-03-03','Reliance','R106','marmesh',19.00,34.00,'2021-04-20',10000.00),(8,'2021-03-03','Reliance','R107','marmesh',17.00,35.00,'2021-04-20',10000.00),(10,'2021-04-23','abc','123','abc',1234.00,123.00,'2021-04-23',123.00);
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
INSERT INTO `downtime` VALUES ('2021-04-23',1,1,'abc','06:58:00','xyz'),('2021-04-30',1,1,'abc','12:07:00','xyz');
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
INSERT INTO `grey` VALUES ('2021-04-23',1,1,'2',1.00,2.0000,1,1,'2');
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
  PRIMARY KEY (`id`,`loom`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loading_chart`
--

LOCK TABLES `loading_chart` WRITE;
/*!40000 ALTER TABLE `loading_chart` DISABLE KEYS */;
INSERT INTO `loading_chart` VALUES (1,'2021-03-05','2021-03-10',1,'xyz'),(1,'2021-03-05','2021-03-15',2,'xyz'),(2,'2021-03-05','2021-03-15',3,'xyz'),(3,'2021-03-10','2021-03-15',4,'xyz'),(4,'2021-03-11','2021-03-15',7,'xyz'),(5,'2021-03-12','2021-03-15',9,'xyz'),(6,'2021-03-05','2021-03-15',6,'xyz'),(7,'2021-03-05','2021-03-15',4,'xyz'),(8,'2021-03-05','2021-03-15',5,'xyz'),(15,'2021-04-23','2021-04-23',1,'xyz'),(20,'2021-04-23','2021-04-23',1,'xyz');
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
  `order_no` int NOT NULL,
  `loom_no` int NOT NULL,
  `total_mtr` float(10,2) NOT NULL,
  `target_rs` float(10,2) NOT NULL,
  `rs_generated` float(10,2) NOT NULL,
  PRIMARY KEY (`l_date`,`order_no`,`loom_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loom_analysis`
--

LOCK TABLES `loom_analysis` WRITE;
/*!40000 ALTER TABLE `loom_analysis` DISABLE KEYS */;
INSERT INTO `loom_analysis` VALUES ('2021-03-06',1,1,147.56,3777.54,-3222.46),('2021-03-06',1,2,147.56,3777.54,-3222.46),('2021-03-11',2,3,180.02,4608.51,-2391.49);
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
INSERT INTO `loom_charges` VALUES ('2021-03-01',7000.00,5000.00),('2021-04-20',9000.00,9999.00),('2021-04-21',33333.00,827838.00),('2021-04-23',123.00,456.00);
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
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packing`
--

LOCK TABLES `packing` WRITE;
/*!40000 ALTER TABLE `packing` DISABLE KEYS */;
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
  `order_no` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `machine` int NOT NULL,
  `worker` varchar(100) NOT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair`
--

LOCK TABLES `repair` WRITE;
/*!40000 ALTER TABLE `repair` DISABLE KEYS */;
INSERT INTO `repair` VALUES (1,'2021-04-23',1,'abc'),(5,'2021-04-23',1,'abc');
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
INSERT INTO `shift` VALUES ('2021-03-06',1,1,1,180022.00,73.78,NULL,NULL),('2021-03-06',1,1,2,180022.00,73.78,NULL,NULL),('2021-03-06',1,2,1,11111.00,4.55,NULL,NULL),('2021-03-06',1,2,2,180022.00,73.78,NULL,NULL),('2021-03-06',6,6,1,180022.00,78.27,NULL,NULL),('2021-03-06',7,4,1,180022.00,94.75,NULL,NULL),('2021-03-06',8,5,1,180022.00,105.90,NULL,NULL),('2021-03-11',2,3,1,1234.00,0.62,NULL,NULL);
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
  `total_mtr` float(10,2) NOT NULL,
  `total_picks` float(10,2) NOT NULL,
  `target` float(10,2) NOT NULL,
  `balance` float(10,2) NOT NULL,
  `supervisor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`s_date`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_analysis`
--

LOCK TABLES `shift_analysis` WRITE;
/*!40000 ALTER TABLE `shift_analysis` DISABLE KEYS */;
INSERT INTO `shift_analysis` VALUES ('2021-03-06',1,147.56,360044.00,100000.00,260044.00,NULL),('2021-03-06',2,147.56,360044.00,100000.00,260044.00,NULL),('2021-03-11',1,90.01,180022.00,100000.00,80022.00,NULL),('2021-03-11',2,90.01,180022.00,100000.00,80022.00,NULL);
/*!40000 ALTER TABLE `shift_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking`
--

DROP TABLE IF EXISTS `tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking` (
  `order_no` int NOT NULL,
  `total_process` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking`
--

LOCK TABLES `tracking` WRITE;
/*!40000 ALTER TABLE `tracking` DISABLE KEYS */;
/*!40000 ALTER TABLE `tracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking1`
--

DROP TABLE IF EXISTS `tracking1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking1` (
  `orderNo` int NOT NULL,
  `process_id` int NOT NULL,
  PRIMARY KEY (`orderNo`,`process_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking1`
--

LOCK TABLES `tracking1` WRITE;
/*!40000 ALTER TABLE `tracking1` DISABLE KEYS */;
INSERT INTO `tracking1` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3);
/*!40000 ALTER TABLE `tracking1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking2`
--

DROP TABLE IF EXISTS `tracking2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking2` (
  `orderNo` int NOT NULL,
  `p_count` int NOT NULL,
  PRIMARY KEY (`orderNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking2`
--

LOCK TABLES `tracking2` WRITE;
/*!40000 ALTER TABLE `tracking2` DISABLE KEYS */;
INSERT INTO `tracking2` VALUES (1,5),(2,4),(3,3);
/*!40000 ALTER TABLE `tracking2` ENABLE KEYS */;
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
  `shift` int NOT NULL,
  `weight_o_w_y` float DEFAULT NULL,
  `waste_weight` float DEFAULT NULL,
  `package_defect` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`order_no`,`date`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warping`
--

LOCK TABLES `warping` WRITE;
/*!40000 ALTER TABLE `warping` DISABLE KEYS */;
INSERT INTO `warping` VALUES (1,'2021-04-23',1,123,123,'xyz');
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
  `shift` int NOT NULL,
  `package_defect` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`order_no`,`date`,`shift`),
  CONSTRAINT `order_no` FOREIGN KEY (`order_no`) REFERENCES `cust_order` (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winding`
--

LOCK TABLES `winding` WRITE;
/*!40000 ALTER TABLE `winding` DISABLE KEYS */;
INSERT INTO `winding` VALUES (1,1,2,2,123,123,1,'2021-04-23',1,'xyz');
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
INSERT INTO `wtti` VALUES ('2021-03-06',520088.00,200000.00,720088.00,NULL),('2021-03-11',160044.00,200000.00,360044.00,NULL);
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
  `weight` int NOT NULL,
  `quality` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `order_no` int NOT NULL,
  `date` date NOT NULL,
  `shift` int NOT NULL,
  PRIMARY KEY (`order_no`,`date`,`shift`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yarn_storage`
--

LOCK TABLES `yarn_storage` WRITE;
/*!40000 ALTER TABLE `yarn_storage` DISABLE KEYS */;
INSERT INTO `yarn_storage` VALUES (1,1,'abc',1,'2021-04-23',1),(2,2,'abc',2,'2021-04-23',1);
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

-- Dump completed on 2021-04-23  9:30:23
