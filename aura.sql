-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2019 at 02:33 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aura`
--

-- --------------------------------------------------------

--
-- Table structure for table `aura`
--

CREATE TABLE `aura` (
  `id` int(11) NOT NULL,
  `Matchid` varchar(32) NOT NULL,
  `League` varchar(128) NOT NULL,
  `Team1` varchar(32) NOT NULL,
  `Team1Score` varchar(8) NOT NULL,
  `Team2Score` varchar(8) NOT NULL,
  `Team2` varchar(32) NOT NULL,
  `StartTime` varchar(16) NOT NULL,
  `description` text,
  `MatchStatus` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aura`
--

INSERT INTO `aura` (`id`, `Matchid`, `League`, `Team1`, `Team1Score`, `Team2Score`, `Team2`, `StartTime`, `description`, `MatchStatus`) VALUES
(1035, '197899010', 'FIFA 18. France Championship', 'Lille OSC', '2', '3', 'En Avant de Guingamp', '00:00', '[\"12:03\",\"25:41\",\"45:00\",\"55:22\",\"78:53\"]', 'Match finished'),
(1038, '197899266', 'FIFA 18. Europe League', 'Milan', '1', '1', 'Anderlecht', '00:00', '[\"61:28\",\"90:00\"]', 'Match finished'),
(1039, '197899263', 'FIFA 18. Italy Championship', 'Napoli', '1', '2', 'Crotone', '00:00', '[\"37:42\",\"55:18\",\"90:00\"]', 'Match finished'),
(1044, '197899500', 'FIFA 18. Spain Championship', 'Villarreal', '2', '4', 'Athletic Bilbao', '00:00', '[\"3:31\",\"27:40\",\"45:00\",\"50:17\",\"55:57\",\"87:12\"]', 'Match finished'),
(1046, '197794425', 'FIFA 18. Germany Championship', 'Werder Ð’remen', '1', '2', 'Hertha BSC', '00:00', '[\"13:26\",\"24:34\",\"71:45\"]', 'Match finished'),
(1048, '197899841', 'FIFA 18. World Championship', 'England', '1', '1', 'Brazil', '00:00', '[\"11:14\",\"33:33\"]', 'Match finished'),
(1049, '197900089', 'FIFA 18. Champions League', 'Paris Saint-Germain', '1', '0', 'Barcelona', '00:00', '[\"75:09\"]', 'Match finished'),
(1056, '197900086', 'FIFA 18. France Championship', 'Caen', '1', '4', 'Olympique Lyonnais', '00:00', '[\"27:01\",\"35:42\",\"43:20\",\"87:51\",\"90:00\"]', 'Match finished'),
(1057, '197900275', 'FIFA 18. Europe League', 'Anderlecht', '3', '0', 'Bayer 04', '00:00', '[\"14:52\",\"32:46\",\"43:07\"]', 'Match finished'),
(1058, '197900272', 'FIFA 18. Italy Championship', 'Roma', '1', '3', 'Sampdoria', '00:00', '[\"2:45\",\"38:42\",\"63:42\",\"74:50\"]', 'Match finished'),
(1070, '197902597', 'FIFA 18. Italy Championship', 'Fiorentina', '6', '2', 'Napoli', '00:00', '[\"5:12\",\"12:38\",\"15:38\",\"22:15\",\"47:38\",\"74:02\",\"79:06\",\"90:00\"]', 'Match finished'),
(1071, '197902600', 'FIFA 18. Europe League', 'Everton', '0', '1', 'Fenerbahce', '00:00', '[\"35:09\"]', 'Match finished'),
(1073, '197901705', 'FIFA 18. France Championship', 'Montpellier HSC', '0', '1', 'Girondins de Bordeaux', '00:00', '[\"53:49\"]', 'Match finished'),
(1077, '197902937', 'FIFA 18. Spain Championship', 'Deportivo Alaves', '1', '4', 'Leganes', '00:00', '[\"7:56\",\"11:38\",\"66:11\",\"81:15\",\"87:32\"]', 'Match finished'),
(1078, '197794428', 'FIFA 18. Germany Championship', 'Werder Ð’remen', '1', '2', 'Bayer 04', '00:00', '[\"20:49\",\"48:22\",\"51:12\"]', 'Match finished'),
(1080, '197903474', 'FIFA 18. Champions League', 'Bayern', '1', '1', 'Liverpool', '00:00', '[\"41:17\",\"77:25\"]', 'Match finished'),
(1081, '197903471', 'FIFA 18. France Championship', 'Amiens SC', '2', '1', 'Dijon FCO', '00:00', '[\"22:15\",\"41:08\",\"76:43\"]', 'Match finished'),
(1082, '197903780', 'FIFA 18. Europe League', 'Roma', '2', '0', 'Olympiacos', '00:00', '[\"62:40\",\"87:23\"]', 'Match finished'),
(1084, '197903777', 'FIFA 18. Italy Championship', 'Hellas Verona', '0', '2', 'Torino', '00:00', '[\"45:00\",\"52:38\"]', 'Match finished'),
(1085, '197904041', 'FIFA 18. Spain Championship', 'Getafe', '1', '1', 'Barcelona', '00:00', '[\"13:48\",\"36:47\"]', 'Match finished'),
(1086, '197794429', 'FIFA 18. Germany Championship', 'VfB Stuttgart', '0', '1', 'Hamburger SV', '00:00', '[\"3:44\"]', 'Match finished'),
(1087, '197904443', 'FIFA 18. World Championship', 'China', '1', '1', 'Austria', '00:00', '[\"43:46\",\"86:26\"]', 'Match finished'),
(1088, '197904651', 'FIFA 18. Champions League', 'Liverpool', '3', '1', 'Porto', '00:00', '[\"23:34\",\"45:00\",\"51:17\",\"77:29\"]', 'Match finished'),
(1089, '197904648', 'FIFA 18. France Championship', 'Nantes', '0', '2', 'Angers SCO', '00:00', '[\"85:23\",\"90:00\"]', 'Match finished'),
(1090, '197904853', 'FIFA 18. Europe League', 'Benfica', '1', '1', 'Sevilla', '00:00', '[\"64:15\",\"88:11\"]', 'Match finished'),
(1091, '197904850', 'FIFA 18. Italy Championship', 'ChievoVerona', '1', '1', 'Napoli', '00:00', '[\"6:33\",\"69:35\"]', 'Match finished'),
(1093, '197905104', 'FIFA 18. Spain Championship', 'Real Madrid', '4', '3', 'Atletico Madrid', '00:00', '[\"20:20\",\"39:47\",\"53:54\",\"60:20\",\"67:22\",\"78:14\",\"87:11\"]', 'Match finished'),
(1094, '197794430', 'FIFA 18. Germany Championship', 'Augsburg', '2', '2', 'TSG 1899 Hoffenheim', '00:00', '[\"22:47\",\"48:35\",\"64:46\",\"73:57\"]', 'Match finished'),
(1096, '197905925', 'FIFA 18. Champions League', 'Shakhtar', '1', '3', 'Atletico Madrid', '00:00', '[\"52:47\",\"68:04\",\"76:29\",\"83:36\"]', 'Match finished'),
(1098, '197906746', 'FIFA 18. Europe League', 'Olympiacos', '0', '0', 'Spartak Moscow', '00:00', '', 'Match finished'),
(1099, '197906743', 'FIFA 18. Italy Championship', 'Atalanta', '1', '1', 'ChievoVerona', '00:00', '[\"8:56\",\"17:44\"]', 'Match finished'),
(1101, '197794431', 'FIFA 18. Spain Championship', 'Las Palmas', '3', '4', 'Villarreal', '00:00', '[\"3:46\",\"24:45\",\"33:51\",\"43:10\",\"59:09\",\"74:44\",\"90:00\"]', 'Match finished'),
(1103, '197907305', 'FIFA 18. Germany Championship', 'Bayer 04', '3', '0', 'Eintracht Frankfurt', '00:00', '[\"28:16\",\"47:13\",\"69:42\"]', 'Match finished'),
(1105, '197907302', 'FIFA 18. World Championship', 'Colombia', '1', '2', 'Czech Republic', '00:00', '[\"49:47\",\"57:10\",\"83:15\"]', 'Match finished'),
(1106, '197907539', 'FIFA 18. Champions League', 'Liverpool', '2', '6', 'Lokomotiv', '00:00', '[\"5:43\",\"15:06\",\"28:11\",\"36:12\",\"40:22\",\"43:31\",\"48:24\",\"54:45\"]', 'Match finished'),
(1107, '197907536', 'FIFA 18. France Championship', 'Angers SCO', '1', '0', 'Strasbourg', '00:00', '[\"52:41\"]', 'Match finished'),
(1108, '197907720', 'FIFA 18. Europe League', 'Bayer 04', '2', '1', 'Anderlecht', '00:00', '[\"21:49\",\"26:07\",\"61:50\"]', 'Match finished'),
(1112, '197794432', 'FIFA 18. Spain Championship', 'Espanyol', '0', '3', 'Atletico Madrid', '00:00', '[\"18:29\",\"65:23\",\"74:32\"]', 'Match finished'),
(1113, '197908178', 'FIFA 18. Germany Championship', 'TSG 1899 Hoffenheim', '2', '4', '1. FSV Mainz 05', '00:00', '[\"20:35\",\"25:44\",\"33:56\",\"37:21\",\"74:28\",\"90:00\"]', 'Match finished'),
(1114, '197908536', 'FIFA 18. Europe League', 'Milan', '2', '1', 'Everton', '00:00', '[\"18:07\",\"45:00\",\"81:08\"]', 'Match finished'),
(1115, '197794433', 'FIFA 18. Italy Championship', 'Genoa', '1', '1', 'Internazionale', '00:00', '[\"9:30\",\"68:21\"]', 'Match finished'),
(1151, '197932039', 'FIFA 18. World Championship', 'Iceland', '2', '0', 'Switzerland', '00:00', '[\"50:41\",\"75:26\"]', 'Match finished'),
(1152, '197928672', 'FIFA 18. Germany Championship', 'Borussia', '1', '3', 'TSG 1899 Hoffenheim', '00:00', '[\"19:42\",\"56:24\",\"86:53\",\"90:00\"]', 'Match finished'),
(1159, '197928772', 'FIFA 18. France Championship', 'FC Metz', '3', '2', 'Girondins de Bordeaux', '00:00', '[\"12:37\",\"31:24\",\"53:43\",\"85:48\",\"90:00\"]', 'Match finished'),
(1161, '197928893', 'FIFA 18. Europe League', 'Lille OSC', '1', '0', 'Valencia', '00:00', '[\"28:36\"]', 'Match finished'),
(1164, '197837286', 'FIFA 18. Germany Championship', 'Borussia Monchengladbach', '1', '4', 'FC Koln', '00:00', '[\"15:39\",\"58:32\",\"64:44\",\"77:43\",\"90:00\"]', 'Match finished'),
(1165, '197932042', 'FIFA 18. World Championship', 'Sweden', '2', '0', 'Egypt', '00:00', '[\"5:44\",\"81:11\"]', 'Match finished'),
(1166, '197929248', 'FIFA 18. Champions League', 'CSKA Moscow', '1', '1', 'Zenit', '00:00', '[\"3:02\",\"19:07\"]', 'Match finished'),
(1168, '197929245', 'FIFA 18. France Championship', 'Caen', '3', '1', 'Lille OSC', '00:00', '[\"5:29\",\"33:30\",\"79:03\",\"84:40\"]', 'Match finished'),
(1169, '197929338', 'FIFA 18. Italy Championship', 'Internazionale', '0', '5', 'Cagliari Calcio', '00:00', '[\"6:22\",\"9:49\",\"35:32\",\"40:01\",\"53:42\"]', 'Match finished'),
(1172, '197929629', 'FIFA 18. Germany Championship', 'Borussia', '1', '2', 'Werder Ð’remen', '00:00', '[\"42:29\",\"64:04\",\"90:00\"]', 'Match finished'),
(1173, '197932045', 'FIFA 18. World Championship', 'Greece', '0', '2', 'Turkey', '00:00', '[\"96:25\",\"112:27\"]', 'Match finished'),
(1175, '197929771', 'FIFA 18. Champions League', 'Juventus', '0', '0', 'Galatasaray', '00:00', '', 'Match finished'),
(1176, '197837288', 'FIFA 18. France Championship', 'Strasbourg', '0', '1', 'Angers SCO', '00:00', '[\"6:45\"]', 'Match finished'),
(1177, '197929932', 'FIFA 18. Europe League', 'Everton', '0', '3', 'Lille OSC', '00:00', '[\"45:00\",\"49:22\",\"76:06\"]', 'Match finished'),
(1178, '197929929', 'FIFA 18. Italy Championship', 'Cagliari Calcio', '2', '3', 'ChievoVerona', '00:00', '[\"38:26\",\"57:00\",\"59:24\",\"86:29\",\"90:00\"]', 'Match finished'),
(1197, '197932054', 'FIFA 18. World Championship', 'Czech Republic', '2', '0', 'Argentina', '00:00', '[\"19:55\",\"73:34\"]', 'Match finished'),
(1201, '197931831', 'FIFA 18. Europe League', 'Everton', '1', '2', 'Anderlecht', '00:00', '[\"38:01\",\"58:15\",\"79:05\"]', 'Match finished'),
(1202, '197932060', 'FIFA 18. Spain Championship', 'Villarreal', '1', '1', 'Sevilla', '00:00', '[\"87:35\",\"90:00\"]', 'Match finished'),
(1204, '197932364', 'FIFA 18. Champions League', 'CSKA Moscow', '5', '0', 'Barcelona', '00:00', '[\"11:03\",\"57:34\",\"64:10\",\"70:16\",\"90:00\"]', 'Match finished'),
(1216, '197837297', 'FIFA 18. Germany Championship', 'FC Koln', '1', '2', 'Hamburger SV', '00:00', '[\"50:27\",\"69:19\",\"78:58\"]', 'Match finished');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aura`
--
ALTER TABLE `aura`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aura`
--
ALTER TABLE `aura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1239;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
