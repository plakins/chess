-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 10.203.65.112:3306
-- Generation Time: May 17, 2019 at 02:31 PM
-- Server version: 5.6.41
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chess`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `token1` varchar(200) NOT NULL,
  `token2` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `token1`, `token2`) VALUES
(42, '1a148a59b54a8b93af541ae5f28992de', 'e72910b989ab1f894144d18cbd1a75e0'),
(43, '1560f5706017ce1dd66f7c00a72ceb43', '031537e52a202215c6545e2bd4af5357'),
(44, 'aaed6cc226ce48f6c168d21a5eb650f1', '9d1d9c129933659332077a232b4a8b94'),
(45, '80491c1f377c6081a9309fe548cd8ae7', '83405d930978f951f77257e0f1a2ce15'),
(46, '472979cce3e911b48b3bbd6bd69e4632', '0067f9dd897330b506e8b2e49ffbe599'),
(47, 'f37cdf09a05e2080cd2b98ca4f9d0fb8', '691ae0a1ddc19bc4093218cbd17a4c4f'),
(48, 'ad295f6e85ea30b1e50fc2def52ad8cd', 'c69dee965f5e231eb947703e2e44d1dc'),
(49, '184f5350b94998226bc2b87d236af23b', '8cc576b7fbb7f3410400e382d8bfa04f'),
(50, 'fc3ae39952a3c08e98e78d56bb794728', 'a29c69a8ab054c1047988368f62aec82'),
(51, 'ed9f365bcafd1fd5cb3d933befcc42cc', 'd3dda0e44bc629f5cf8157979e6b04a1'),
(52, '2531cae7e529ece3e7cb07ab0cfb86a0', 'b6cbc040eae493e30777a6ce77e1e2ed'),
(53, 'f50bc807b07b07e113f690e07965ab7e', 'f5bb53ef8cd339c72b81672d3bea7bc5'),
(54, 'ece4a8958200098f03c80bd9f94cc011', '313752ea290b936b9b5770a87850ec5f'),
(55, '6fc0a10fe2f3ac86c077cf13d311c448', '4aeaf683fdae787bcf59746bcd42898b'),
(56, '792144341a02dd89dc3571239e81ce89', 'fb68e9253234a09b8d4bbab86e14fdc0');

-- --------------------------------------------------------

--
-- Table structure for table `game_42`
--

CREATE TABLE `game_42` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_42`
--

INSERT INTO `game_42` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4'),
(4, 2, 'move', 'E7:E5'),
(5, 1, 'move', 'F1:C4'),
(6, 2, 'move', 'D7:D5'),
(7, 1, 'move', 'F2:F4'),
(8, 2, 'move', 'F7:F5');

-- --------------------------------------------------------

--
-- Table structure for table `game_43`
--

CREATE TABLE `game_43` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_43`
--

INSERT INTO `game_43` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4');

-- --------------------------------------------------------

--
-- Table structure for table `game_44`
--

CREATE TABLE `game_44` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_44`
--

INSERT INTO `game_44` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', '');

-- --------------------------------------------------------

--
-- Table structure for table `game_45`
--

CREATE TABLE `game_45` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_45`
--

INSERT INTO `game_45` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', '');

-- --------------------------------------------------------

--
-- Table structure for table `game_46`
--

CREATE TABLE `game_46` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_46`
--

INSERT INTO `game_46` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4'),
(4, 2, 'move', 'F7:F5'),
(5, 1, 'move', 'F1:C4'),
(6, 2, 'move', 'E7:E5'),
(7, 1, 'move', 'D2:D4'),
(8, 2, 'move', 'B8:C6'),
(9, 1, 'move', 'G1:F3'),
(10, 2, 'move', 'G8:F6'),
(11, 1, 'move', 'D4:E5'),
(12, 2, 'move', 'F8:B4'),
(13, 1, 'move', 'C1:D2'),
(14, 2, 'move', 'B4:C5'),
(15, 1, 'move', 'E4:F5'),
(16, 2, 'move', 'D7:D5'),
(17, 1, 'move', 'C4:D5'),
(18, 2, 'move', 'F6:D5'),
(19, 1, 'move', 'D2:G5'),
(20, 2, 'move', 'D5:F6'),
(21, 1, 'move', 'E5:F6'),
(22, 2, 'move', 'C5:B4'),
(23, 1, 'move', 'B1:C3'),
(24, 2, 'move', 'G7:F6'),
(25, 1, 'move', 'G5:F6'),
(26, 2, 'move', 'D8:F6'),
(27, 1, 'move', 'A2:A3'),
(28, 2, 'move', 'B4:A5'),
(29, 1, 'move', 'B2:B4'),
(30, 2, 'move', 'A5:B6'),
(31, 1, 'move', 'E1:E2'),
(32, 2, 'move', 'H8:G8'),
(33, 1, 'move', 'H1:E1'),
(34, 2, 'move', 'G8:H8'),
(35, 1, 'move', 'E2:F1'),
(36, 2, 'move', 'H8:G8'),
(37, 1, 'move', 'F1:G1'),
(38, 2, 'move', 'G8:H8'),
(39, 1, 'move', 'E1:F1');

-- --------------------------------------------------------

--
-- Table structure for table `game_47`
--

CREATE TABLE `game_47` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_47`
--

INSERT INTO `game_47` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'F2:F4'),
(4, 2, 'move', 'E7:E5'),
(5, 1, 'move', 'D2:D4'),
(6, 2, 'move', 'E5:E4'),
(7, 1, 'move', 'F4:F5');

-- --------------------------------------------------------

--
-- Table structure for table `game_48`
--

CREATE TABLE `game_48` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_48`
--

INSERT INTO `game_48` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4');

-- --------------------------------------------------------

--
-- Table structure for table `game_49`
--

CREATE TABLE `game_49` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_49`
--

INSERT INTO `game_49` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'F2:F4'),
(4, 2, 'move', 'E7:E5'),
(5, 1, 'move', 'F4:E5'),
(6, 2, 'move', 'D7:D5'),
(7, 1, 'move', 'D2:D4');

-- --------------------------------------------------------

--
-- Table structure for table `game_50`
--

CREATE TABLE `game_50` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_50`
--

INSERT INTO `game_50` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4');

-- --------------------------------------------------------

--
-- Table structure for table `game_51`
--

CREATE TABLE `game_51` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_51`
--

INSERT INTO `game_51` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4');

-- --------------------------------------------------------

--
-- Table structure for table `game_52`
--

CREATE TABLE `game_52` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_52`
--

INSERT INTO `game_52` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'F2:F4'),
(4, 2, 'move', 'E7:E5'),
(5, 1, 'move', 'F4:F5'),
(6, 2, 'move', 'D7:D6'),
(7, 1, 'move', 'F5:F6');

-- --------------------------------------------------------

--
-- Table structure for table `game_53`
--

CREATE TABLE `game_53` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_53`
--

INSERT INTO `game_53` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'F2:F4'),
(4, 2, 'move', 'D7:D5'),
(5, 1, 'move', 'E2:E4'),
(6, 2, 'move', 'D5:E4'),
(7, 1, 'move', 'G1:F3');

-- --------------------------------------------------------

--
-- Table structure for table `game_54`
--

CREATE TABLE `game_54` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_54`
--

INSERT INTO `game_54` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', '');

-- --------------------------------------------------------

--
-- Table structure for table `game_55`
--

CREATE TABLE `game_55` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_55`
--

INSERT INTO `game_55` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'E2:E4'),
(4, 2, 'move', 'D7:D5'),
(5, 1, 'move', 'F2:F4');

-- --------------------------------------------------------

--
-- Table structure for table `game_56`
--

CREATE TABLE `game_56` (
  `id` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_56`
--

INSERT INTO `game_56` (`id`, `player`, `type`, `data`) VALUES
(1, 1, 'commit', ''),
(2, 2, 'commit', ''),
(3, 1, 'move', 'D2:D4'),
(4, 2, 'move', 'D7:D5'),
(5, 1, 'move', 'H2:H4'),
(6, 2, 'move', 'B8:C6'),
(7, 1, 'move', 'C1:F4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_42`
--
ALTER TABLE `game_42`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_43`
--
ALTER TABLE `game_43`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_44`
--
ALTER TABLE `game_44`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_45`
--
ALTER TABLE `game_45`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_46`
--
ALTER TABLE `game_46`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_47`
--
ALTER TABLE `game_47`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_48`
--
ALTER TABLE `game_48`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_49`
--
ALTER TABLE `game_49`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_50`
--
ALTER TABLE `game_50`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_51`
--
ALTER TABLE `game_51`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_52`
--
ALTER TABLE `game_52`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_53`
--
ALTER TABLE `game_53`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_54`
--
ALTER TABLE `game_54`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_55`
--
ALTER TABLE `game_55`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_56`
--
ALTER TABLE `game_56`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `game_42`
--
ALTER TABLE `game_42`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `game_43`
--
ALTER TABLE `game_43`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `game_44`
--
ALTER TABLE `game_44`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `game_45`
--
ALTER TABLE `game_45`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `game_46`
--
ALTER TABLE `game_46`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `game_47`
--
ALTER TABLE `game_47`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `game_48`
--
ALTER TABLE `game_48`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `game_49`
--
ALTER TABLE `game_49`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `game_50`
--
ALTER TABLE `game_50`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `game_51`
--
ALTER TABLE `game_51`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `game_52`
--
ALTER TABLE `game_52`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `game_53`
--
ALTER TABLE `game_53`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `game_54`
--
ALTER TABLE `game_54`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `game_55`
--
ALTER TABLE `game_55`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `game_56`
--
ALTER TABLE `game_56`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
