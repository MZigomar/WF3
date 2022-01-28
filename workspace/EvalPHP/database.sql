-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 27 jan. 2022 à 16:55
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `wf3_php_intermediaire`
--

-- --------------------------------------------------------

--
-- Structure de la table `advert`
--

DROP TABLE IF EXISTS `advert`;
CREATE TABLE IF NOT EXISTS `advert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `city` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `price` float NOT NULL,
  `reservation_message` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `advert`
--

INSERT INTO `advert` (`id`, `title`, `description`, `postal_code`, `city`, `type`, `price`, `reservation_message`) VALUES
(1, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(2, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(3, 'Manoir de vacances', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.', 59000, 'Lille', 'Location', 2105.6, NULL),
(4, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL),
(5, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(6, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(7, 'Manoir de vacances', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.', 59000, 'Lille', 'Location', 2105.6, NULL),
(8, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL),
(9, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(10, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(11, 'Manoir de vacances', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.', 59000, 'Lille', 'Location', 2105.6, NULL),
(12, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL),
(13, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(14, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(15, 'Manoir de vacances', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.', 59000, 'Lille', 'Location', 2105.6, NULL),
(16, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL),
(17, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(18, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(20, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL),
(21, 'Appartement', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.', 59200, 'Tourcoing', 'Location', 750.15, NULL),
(22, 'Maison azerty', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!', 59000, 'Lille', 'Vente', 550000, NULL),
(23, 'Manoir de vacances', 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.', 59000, 'Lille', 'Location', 2105.6, NULL),
(24, 'Cabane', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste neque?', 59000, 'Lille', 'Vente', 120000, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
