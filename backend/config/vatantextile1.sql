-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2021 at 06:21 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vatantextile1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cust_order`
--

CREATE TABLE `cust_order` (
  `order_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `company` varchar(100) NOT NULL,
  `gst` varchar(15) NOT NULL,
  `quality` varchar(255) NOT NULL,
  `ppc` float(10,2) NOT NULL,
  `rate` float(10,2) NOT NULL,
  `deadline` date NOT NULL,
  `target` float(10,2) NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cust_order`
--

INSERT INTO `cust_order` (`order_no`, `date`, `company`, `gst`, `quality`, `ppc`, `rate`, `deadline`, `target`, `status`) VALUES
(1, '2021-03-03', 'Reliance', 'R100', 'marmesh', 24.40, 25.60, '2021-04-20', 10000.00, 1),
(2, '2021-03-03', 'Reliance', 'R101', 'marmesh', 20.00, 25.60, '2021-04-20', 10000.00, 2),
(3, '2021-03-03', 'Reliance', 'R102', 'marmesh', 23.00, 25.67, '2021-04-20', 10000.00, 3),
(4, '2021-03-03', 'Reliance', 'R103', 'marmesh', 21.00, 30.00, '2021-04-20', 10000.00, 1),
(5, '2021-03-03', 'Reliance', 'R104', 'marmesh', 24.00, 31.00, '2021-04-20', 10000.00, 2),
(6, '2021-03-03', 'Reliance', 'R105', 'marmesh', 23.00, 32.00, '2021-04-20', 10000.00, 3),
(7, '2021-03-03', 'Reliance', 'R106', 'marmesh', 19.00, 34.00, '2021-04-20', 10000.00, 1),
(8, '2021-03-03', 'Reliance', 'R107', 'marmesh', 17.00, 35.00, '2021-04-20', 10000.00, 2),
(9, '2021-04-21', 'Raymond', 'R109', 'marmesh', 2.00, 2.00, '2021-04-23', 5678567.00, 3),
(10, '2021-04-28', 'Kriti Shawl', 'R110', 'marmesh', 12.00, 12.00, '2021-04-29', 32457.00, 1),
(11, '2021-04-23', 'Kriti Shawl', 'R11', 'marmesh', 11.00, 11.00, '2021-05-07', 384763.00, 2);

-- --------------------------------------------------------

--
-- Table structure for table `downtime`
--

CREATE TABLE `downtime` (
  `date` date NOT NULL,
  `loom` int(11) NOT NULL,
  `shift` int(11) NOT NULL,
  `weaver` varchar(100) NOT NULL,
  `downtime` time NOT NULL,
  `remark` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `downtime`
--

INSERT INTO `downtime` (`date`, `loom`, `shift`, `weaver`, `downtime`, `remark`) VALUES
('0000-00-00', 34, 34, '34', '03:17:00', '34'),
('2021-04-21', 1, 1, 'ABC', '00:02:00', 'Good'),
('2021-04-24', 67, 1, 'ABC', '02:20:00', 'Good');

-- --------------------------------------------------------

--
-- Table structure for table `dynamic_table`
--

CREATE TABLE `dynamic_table` (
  `loom` int(11) NOT NULL,
  `job_work` float DEFAULT NULL,
  `target_rs` float DEFAULT NULL,
  `p_l` float DEFAULT NULL,
  `avg_eff` float DEFAULT NULL,
  `quality` varchar(45) DEFAULT NULL,
  `production_mtr` float DEFAULT NULL,
  `target` float DEFAULT NULL,
  `diff_mtr` float DEFAULT NULL,
  `eff_day` float DEFAULT NULL,
  `reason` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `grey`
--

CREATE TABLE `grey` (
  `date` date NOT NULL,
  `shift` int(11) NOT NULL,
  `loom_no` int(11) NOT NULL,
  `worker` varchar(100) NOT NULL,
  `meters` float(10,2) NOT NULL,
  `points` float(10,4) NOT NULL,
  `repairable` int(11) NOT NULL,
  `order_no` int(11) NOT NULL,
  `grade` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grey`
--

INSERT INTO `grey` (`date`, `shift`, `loom_no`, `worker`, `meters`, `points`, `repairable`, `order_no`, `grade`) VALUES
('2021-04-22', 1, 1, 'ABC', 34.00, 1.0000, 0, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `loading_chart`
--

CREATE TABLE `loading_chart` (
  `id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `loom` int(11) NOT NULL,
  `other_details` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loading_chart`
--

INSERT INTO `loading_chart` (`id`, `start_date`, `end_date`, `loom`, `other_details`) VALUES
(1, '2021-03-05', '2021-03-10', 1, 'xyz'),
(1, '2021-03-05', '2021-03-15', 2, 'xyz'),
(2, '2021-03-05', '2021-03-15', 3, 'xyz'),
(3, '2021-03-10', '2021-03-15', 4, 'xyz'),
(4, '2021-03-11', '2021-03-15', 7, 'xyz'),
(5, '2021-03-12', '2021-03-15', 9, 'xyz'),
(6, '2021-04-22', '2021-04-22', 6, '6'),
(23, '2021-04-24', '2021-04-23', 3, '6');

-- --------------------------------------------------------

--
-- Table structure for table `loom`
--

CREATE TABLE `loom` (
  `loom_no` int(11) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `loom_analysis`
--

CREATE TABLE `loom_analysis` (
  `l_date` date NOT NULL,
  `order_no` int(11) NOT NULL,
  `loom_no` int(11) NOT NULL,
  `total_mtr` float(10,2) NOT NULL,
  `target_rs` float(10,2) NOT NULL,
  `rs_generated` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loom_analysis`
--

INSERT INTO `loom_analysis` (`l_date`, `order_no`, `loom_no`, `total_mtr`, `target_rs`, `rs_generated`) VALUES
('2021-03-06', 1, 1, 147.56, 3777.54, -3222.46),
('2021-03-06', 1, 2, 147.56, 3777.54, -3222.46),
('2021-03-11', 2, 3, 180.02, 4608.51, -2391.49);

-- --------------------------------------------------------

--
-- Table structure for table `loom_charges`
--

CREATE TABLE `loom_charges` (
  `l_date` date NOT NULL,
  `somet` float(10,2) NOT NULL,
  `dornier` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loom_charges`
--

INSERT INTO `loom_charges` (`l_date`, `somet`, `dornier`) VALUES
('2021-03-01', 7000.00, 5000.00);

-- --------------------------------------------------------

--
-- Table structure for table `packing`
--

CREATE TABLE `packing` (
  `order_no` int(11) NOT NULL,
  `length` float DEFAULT NULL,
  `weight` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packing`
--

INSERT INTO `packing` (`order_no`, `length`, `weight`) VALUES
(0, 67, 67),
(1, 23, 112),
(34, 34, 34);

-- --------------------------------------------------------

--
-- Table structure for table `process`
--

CREATE TABLE `process` (
  `process_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `process`
--

INSERT INTO `process` (`process_id`, `name`) VALUES
(1, 'storage'),
(2, 'winding'),
(3, 'warping'),
(4, 'looming'),
(5, 'weaving'),
(6, 'checking'),
(7, 'repairing'),
(8, 'packing'),
(9, 'dispatch');

-- --------------------------------------------------------

--
-- Table structure for table `repair`
--

CREATE TABLE `repair` (
  `order_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `machine` int(11) NOT NULL,
  `worker` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `repair`
--

INSERT INTO `repair` (`order_no`, `date`, `machine`, `worker`) VALUES
(1, '2021-04-21', 2, 'ABC');

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `s_date` date NOT NULL,
  `order_no` int(11) NOT NULL,
  `loom_no` int(11) NOT NULL,
  `shift` int(11) NOT NULL,
  `total_picks` float(10,2) NOT NULL,
  `meter` float(10,2) NOT NULL,
  `warped_yarn_received` int(11) DEFAULT NULL,
  `waste_weight` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`s_date`, `order_no`, `loom_no`, `shift`, `total_picks`, `meter`, `warped_yarn_received`, `waste_weight`) VALUES
('2021-03-06', 1, 1, 1, 180022.00, 73.78, NULL, NULL),
('2021-03-06', 1, 1, 2, 180022.00, 73.78, NULL, NULL),
('2021-03-06', 1, 2, 1, 180022.00, 73.78, NULL, NULL),
('2021-03-06', 1, 2, 2, 180022.00, 73.78, NULL, NULL),
('2021-03-11', 2, 3, 1, 180022.00, 90.01, NULL, NULL),
('2021-03-11', 2, 3, 2, 180022.00, 90.01, NULL, NULL),
('2021-04-23', 0, 3, 1, 242.00, 0.00, NULL, NULL),
('2021-04-25', 0, 5, 0, 12345.00, 0.00, NULL, NULL),
('2021-04-25', 0, 56, 0, 56.00, 0.00, NULL, NULL),
('2021-04-30', 0, 6, 1, 4545.00, 0.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shift_analysis`
--

CREATE TABLE `shift_analysis` (
  `s_date` date NOT NULL,
  `shift` int(11) NOT NULL,
  `total_mtr` float(10,2) NOT NULL,
  `total_picks` float(10,2) NOT NULL,
  `target` float(10,2) NOT NULL,
  `balance` float(10,2) NOT NULL,
  `supervisor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shift_analysis`
--

INSERT INTO `shift_analysis` (`s_date`, `shift`, `total_mtr`, `total_picks`, `target`, `balance`, `supervisor`) VALUES
('2021-03-06', 1, 147.56, 250044.00, 100000.00, 260044.00, NULL),
('2021-03-06', 2, 147.56, 360044.00, 100000.00, 160044.00, NULL),
('2021-03-11', 1, 45435.00, 354.00, 345.00, 23000.00, NULL),
('2021-03-11', 2, 90.01, 180022.00, 100000.00, 80022.00, NULL),
('2021-04-28', 1, 34.00, 123.00, 425.00, 55756.00, 'asdf');

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE `tracking` (
  `orderNo` int(11) NOT NULL,
  `processId` int(10) NOT NULL,
  `status` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tracking`
--

INSERT INTO `tracking` (`orderNo`, `processId`, `status`) VALUES
(10, 0, NULL),
(10, 1, NULL),
(10, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `warping`
--

CREATE TABLE `warping` (
  `order_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `shift` int(11) NOT NULL,
  `weight_o_w_y` float DEFAULT NULL,
  `waste_weight` float DEFAULT NULL,
  `package_defect` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warping`
--

INSERT INTO `warping` (`order_no`, `date`, `shift`, `weight_o_w_y`, `waste_weight`, `package_defect`) VALUES
(1, '2021-04-03', 1, 1, 1, '1'),
(2, '2021-04-23', 2, 2, 2, '2'),
(3, '2021-04-23', 1, 3453.8, 57.8, '2'),
(12, '0000-00-00', 12, 12, 12, '12'),
(12, '2021-04-25', 12, 12, 12, '12'),
(45, '2021-04-25', 45, 45, 45, '45'),
(56, '0000-00-00', 56, 56, 56, '56'),
(67, '2021-04-25', 67, 67, 67, '67'),
(123, '0000-00-00', 1, 12, 12, '1');

-- --------------------------------------------------------

--
-- Table structure for table `winding`
--

CREATE TABLE `winding` (
  `yarn_received` int(11) NOT NULL,
  `no_of_cones` int(11) NOT NULL,
  `size_of_cones` float NOT NULL,
  `no_of_doffs` int(11) NOT NULL,
  `weight_of_cones` float NOT NULL,
  `weight_of_waste` float DEFAULT NULL,
  `order_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `shift` int(11) NOT NULL,
  `package_defect` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `winding`
--

INSERT INTO `winding` (`yarn_received`, `no_of_cones`, `size_of_cones`, `no_of_doffs`, `weight_of_cones`, `weight_of_waste`, `order_no`, `date`, `shift`, `package_defect`) VALUES
(0, 1, 1, 1, 1, 1, 1, '2021-04-21', 1, '1'),
(0, 2, 2, 2, 2, 22, 2, '2021-04-22', 2, '2'),
(324, 2, 2, 2, -1, 2, 2, '2021-04-25', 2, '2');

-- --------------------------------------------------------

--
-- Table structure for table `wtti`
--

CREATE TABLE `wtti` (
  `date` date NOT NULL,
  `balance_forDay` float(10,2) NOT NULL,
  `target_asDate` float(10,2) NOT NULL,
  `achieved_asDate` float(10,2) NOT NULL,
  `balance_asDate` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `yarn_storage`
--

CREATE TABLE `yarn_storage` (
  `yarn_received` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `quality` varchar(20) NOT NULL,
  `order_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `shift` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `yarn_storage`
--

INSERT INTO `yarn_storage` (`yarn_received`, `weight`, `quality`, `order_no`, `date`, `shift`) VALUES
(1, 132, '12', 1, '2021-04-21', 1),
(35, 234, '23', 2, '2021-04-25', 1),
(34, 34, '34', 3, '2021-04-26', 1),
(12, 12, '12', 4, '2021-04-26', 12),
(1, 1, '1', 5, '2021-04-26', 1),
(23, 23, '23', 23, '2021-04-25', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cust_order`
--
ALTER TABLE `cust_order`
  ADD PRIMARY KEY (`order_no`);

--
-- Indexes for table `downtime`
--
ALTER TABLE `downtime`
  ADD PRIMARY KEY (`date`,`loom`,`shift`);

--
-- Indexes for table `dynamic_table`
--
ALTER TABLE `dynamic_table`
  ADD PRIMARY KEY (`loom`);

--
-- Indexes for table `grey`
--
ALTER TABLE `grey`
  ADD PRIMARY KEY (`date`,`shift`,`loom_no`,`points`,`order_no`);

--
-- Indexes for table `loading_chart`
--
ALTER TABLE `loading_chart`
  ADD PRIMARY KEY (`id`,`loom`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `loom`
--
ALTER TABLE `loom`
  ADD PRIMARY KEY (`loom_no`);

--
-- Indexes for table `loom_analysis`
--
ALTER TABLE `loom_analysis`
  ADD PRIMARY KEY (`l_date`,`order_no`,`loom_no`);

--
-- Indexes for table `loom_charges`
--
ALTER TABLE `loom_charges`
  ADD PRIMARY KEY (`l_date`);

--
-- Indexes for table `packing`
--
ALTER TABLE `packing`
  ADD PRIMARY KEY (`order_no`);

--
-- Indexes for table `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`process_id`);

--
-- Indexes for table `repair`
--
ALTER TABLE `repair`
  ADD PRIMARY KEY (`order_no`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`s_date`,`order_no`,`loom_no`,`shift`);

--
-- Indexes for table `shift_analysis`
--
ALTER TABLE `shift_analysis`
  ADD PRIMARY KEY (`s_date`,`shift`);

--
-- Indexes for table `tracking`
--
ALTER TABLE `tracking`
  ADD PRIMARY KEY (`orderNo`,`processId`);

--
-- Indexes for table `warping`
--
ALTER TABLE `warping`
  ADD PRIMARY KEY (`order_no`,`date`,`shift`);

--
-- Indexes for table `winding`
--
ALTER TABLE `winding`
  ADD PRIMARY KEY (`order_no`,`date`,`shift`);

--
-- Indexes for table `wtti`
--
ALTER TABLE `wtti`
  ADD PRIMARY KEY (`date`);

--
-- Indexes for table `yarn_storage`
--
ALTER TABLE `yarn_storage`
  ADD PRIMARY KEY (`order_no`,`date`,`shift`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cust_order`
--
ALTER TABLE `cust_order`
  MODIFY `order_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `loom`
--
ALTER TABLE `loom`
  MODIFY `loom_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `process`
--
ALTER TABLE `process`
  MODIFY `process_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `repair`
--
ALTER TABLE `repair`
  MODIFY `order_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `winding`
--
ALTER TABLE `winding`
  ADD CONSTRAINT `order_no` FOREIGN KEY (`order_no`) REFERENCES `cust_order` (`order_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
