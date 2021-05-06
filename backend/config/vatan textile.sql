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
  `status` int NOT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_order`
--

LOCK TABLES `cust_order` WRITE;
/*!40000 ALTER TABLE `cust_order` DISABLE KEYS */;
INSERT INTO `cust_order` VALUES (1,'2021-03-03','Reliance','R100','marmesh',24.40,25.60,'2021-04-20',10000.00,1),(2,'2021-03-03','Reliance','R101','marmesh',20.00,25.60,'2021-04-20',10000.00,2),(3,'2021-03-03','Reliance','R102','marmesh',23.00,25.67,'2021-04-20',10000.00,3),(4,'2021-03-03','Reliance','R103','marmesh',21.00,30.00,'2021-04-20',10000.00,3),(5,'2021-03-03','Reliance','R104','marmesh',24.00,31.00,'2021-04-20',10000.00,2),(6,'2021-03-03','Reliance','R105','marmesh',23.00,32.00,'2021-04-20',10000.00,1),(7,'2021-03-03','Reliance','R106','marmesh',19.00,34.00,'2021-04-20',10000.00,2),(8,'2021-03-03','Reliance','R107','marmesh',17.00,35.00,'2021-04-20',10000.00,3),(10,'2021-04-23','abc','123','abc',1234.00,123.00,'2021-04-23',123.00,1),(15,'2021-04-30','Reliance','R103','abc',123.00,1001.00,'2021-04-30',9999.00,2),(20,'2021-04-25','Remond','R1010','Marmesh',35.50,25.60,'2021-05-01',100000.00,3),(21,'2021-02-25','abc','R90','xyz',35.50,25.60,'2021-04-25',10000.00,2);
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
INSERT INTO `downtime` VALUES ('2021-04-01',1,2,'abc','11:26:00','xyz'),('2021-04-20',1,1,'abc','00:00:30','xyz'),('2021-04-23',1,1,'abc','06:58:00','xyz'),('2021-04-26',6,1,'abc','00:32:00','xyz'),('2021-04-30',1,1,'abc','12:07:00','xyz'),('2021-05-08',5,1,'abc','04:02:00','xyz');
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
INSERT INTO `grey` VALUES ('2021-04-23',1,1,'2',1.00,2.0000,1,1,'2'),('2021-04-26',1,10,'abc',199.00,1.0000,1,10,'A'),('2021-04-30',1,1,'abc',1.00,1.0000,1,10,'1'),('2021-05-05',1,5,'abc',2.00,0.0000,1,5,'A'),('2021-05-08',2,8,'abc',1.00,2.0000,1,15,'A');
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
INSERT INTO `loading_chart` VALUES (1,'2021-03-05','2021-03-10',1,'xyz'),(1,'2021-03-05','2021-03-15',2,'xyz'),(2,'2021-03-05','2021-03-15',3,'xyz'),(3,'2021-03-10','2021-03-15',4,'xyz'),(4,'2021-03-11','2021-03-15',7,'xyz'),(5,'2021-04-28','2021-04-28',2,'xyz'),(5,'2021-03-12','2021-03-15',9,'xyz'),(6,'2021-03-05','2021-03-15',6,'xyz'),(7,'2021-03-05','2021-03-15',4,'xyz'),(8,'2021-03-05','2021-03-15',5,'xyz'),(10,'2021-04-30','2021-04-30',1,'xyz'),(15,'2021-04-06','2021-04-16',1,'xyz'),(15,'2021-04-23','2021-04-23',1,'xyz'),(20,'2021-04-23','2021-04-23',1,'xyz');
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
INSERT INTO `loom_analysis` VALUES ('2021-03-06',1,1,146.51,3750.66,-3249.34),('2021-03-06',2,2,588.76,15072.26,8072.26),('2021-03-06',3,3,155.13,3982.19,-3017.81),('2021-03-06',4,4,120.48,3614.40,-3385.60),('2021-03-06',5,5,235.92,7313.52,313.52),('2021-03-07',6,6,121.69,3894.08,-3105.92),('2021-03-07',7,7,146.21,4971.14,-28.86),('2021-03-07',8,8,535.11,18728.85,13728.85),('2021-03-07',10,10,4.39,539.97,-4460.03);
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
INSERT INTO `loom_charges` VALUES ('2021-03-06',7000.00,5000.00),('2021-05-07',7500.00,6500.00);
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
INSERT INTO `packing` VALUES (4,30,30,'2021-05-08'),(5,11,11,'2021-03-12');
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair`
--

LOCK TABLES `repair` WRITE;
/*!40000 ALTER TABLE `repair` DISABLE KEYS */;
INSERT INTO `repair` VALUES (1,'2021-03-06',1,'abc',1),(5,'2021-03-11',1,'abc',21);
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
INSERT INTO `shift` VALUES ('2021-03-06',1,1,1,180954.00,74.16,1,1),('2021-03-06',1,1,2,176543.00,72.35,1,1),('2021-03-06',2,2,1,980756.00,490.38,1,1),('2021-03-06',2,2,2,196754.00,98.38,1,1),('2021-03-06',3,3,1,158151.00,68.76,1,1),('2021-03-06',3,3,2,198654.00,86.37,1,1),('2021-03-06',4,4,1,54231.00,25.82,1,1),('2021-03-06',4,4,2,198796.00,94.66,1,1),('2021-03-06',5,5,1,109897.00,45.79,1,1),('2021-03-06',5,5,2,456321.00,190.13,1,1),('2021-03-07',6,6,2,156437.00,68.02,1,1),('2021-03-07',7,7,1,123456.00,64.98,1,1),('2021-03-07',7,7,2,154328.00,81.23,1,2),('2021-03-07',8,8,1,456376.00,268.46,1,1),('2021-03-07',8,8,2,453298.00,266.65,1,1),('2021-03-07',10,10,1,109708.00,0.89,1,1),('2021-03-07',10,10,2,432156.00,3.50,1,1);
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
INSERT INTO `shift_analysis` VALUES ('2021-03-06',1,990.92,2027410.00,1000000.00,1027410.00,'abcd'),('2021-03-06',2,541.89,1227068.00,1000000.00,227068.00,'xyz'),('2021-03-07',1,388.00,812991.00,1000000.00,-187009.00,'abcd'),('2021-03-07',2,419.40,1196219.00,108765.00,1087454.00,'xyz');
/*!40000 ALTER TABLE `shift_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking`
--

DROP TABLE IF EXISTS `tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking` (
  `orderNo` int NOT NULL,
  `process_id` int NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`orderNo`,`process_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking`
--

LOCK TABLES `tracking` WRITE;
/*!40000 ALTER TABLE `tracking` DISABLE KEYS */;
INSERT INTO `tracking` VALUES (1,1,'True'),(1,2,'True'),(1,3,'False'),(1,4,'False'),(1,5,'False'),(2,1,'True'),(2,2,'False'),(2,3,'False'),(2,4,'False'),(3,1,'True'),(3,2,'True'),(3,3,'True');
/*!40000 ALTER TABLE `tracking` ENABLE KEYS */;
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
INSERT INTO `warping` VALUES (3,'2021-03-30',40,30,'xyz...');
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
  PRIMARY KEY (`order_no`),
  CONSTRAINT `order_no` FOREIGN KEY (`order_no`) REFERENCES `cust_order` (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winding`
--

LOCK TABLES `winding` WRITE;
/*!40000 ALTER TABLE `winding` DISABLE KEYS */;
INSERT INTO `winding` VALUES (1,10,20,12,110,10,1,'2021-04-11','xyz...'),(0,1,1,1,1,1,2,'2021-03-11','abc');
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
INSERT INTO `wtti` VALUES ('2021-03-06',1254478.00,2000000.00,3254478.00,1254478.00),('2021-03-07',900445.00,1108765.00,2009210.00,900445.00);
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
  `y_date` date DEFAULT NULL,
  `shift` int DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yarn_storage`
--

LOCK TABLES `yarn_storage` WRITE;
/*!40000 ALTER TABLE `yarn_storage` DISABLE KEYS */;
INSERT INTO `yarn_storage` VALUES (1,21,'Silk',1,'2021-03-14',NULL),(1,10,'silk',2,'2021-03-10',NULL),(1,10,'Silk',3,'2021-03-05',NULL),(1,500,'polister',7,'2021-03-12',0);
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

-- Dump completed on 2021-05-06  9:07:29
