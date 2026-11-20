-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: EduColab
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `competencias`
--

DROP TABLE IF EXISTS `competencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `competencias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disciplinas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `materiais`
--

DROP TABLE IF EXISTS `materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiais` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(180) NOT NULL,
  `descricao` text DEFAULT NULL,
  `tipo` enum('pdf','link','documento','outro') NOT NULL DEFAULT 'documento',
  `caminho_ou_url` varchar(500) NOT NULL,
  `autor_id` int(10) unsigned NOT NULL,
  `disciplina_id` int(10) unsigned NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `autor_id` (`autor_id`),
  KEY `disciplina_id` (`disciplina_id`),
  CONSTRAINT `materiais_ibfk_1` FOREIGN KEY (`autor_id`) REFERENCES `utilizadores` (`id`),
  CONSTRAINT `materiais_ibfk_2` FOREIGN KEY (`disciplina_id`) REFERENCES `disciplinas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos_ajuda`
--

DROP TABLE IF EXISTS `pedidos_ajuda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_ajuda` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(180) NOT NULL,
  `descricao` text NOT NULL,
  `solicitante_id` int(10) unsigned NOT NULL,
  `competencia_id` int(10) unsigned NOT NULL,
  `estado` enum('aberto','em_andamento','concluido','cancelado') NOT NULL DEFAULT 'aberto',
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `solicitante_id` (`solicitante_id`),
  KEY `competencia_id` (`competencia_id`),
  CONSTRAINT `pedidos_ajuda_ibfk_1` FOREIGN KEY (`solicitante_id`) REFERENCES `utilizadores` (`id`),
  CONSTRAINT `pedidos_ajuda_ibfk_2` FOREIGN KEY (`competencia_id`) REFERENCES `competencias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `perfil_competencias`
--

DROP TABLE IF EXISTS `perfil_competencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil_competencias` (
  `utilizador_id` int(10) unsigned NOT NULL,
  `competencia_id` int(10) unsigned NOT NULL,
  `tipo` enum('sei','quero') NOT NULL,
  `nivel` tinyint(3) unsigned DEFAULT NULL,
  `prioridade` enum('baixa','media','alta') DEFAULT NULL,
  PRIMARY KEY (`utilizador_id`,`competencia_id`,`tipo`),
  KEY `competencia_id` (`competencia_id`),
  CONSTRAINT `perfil_competencias_ibfk_1` FOREIGN KEY (`utilizador_id`) REFERENCES `utilizadores` (`id`),
  CONSTRAINT `perfil_competencias_ibfk_2` FOREIGN KEY (`competencia_id`) REFERENCES `competencias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sessoes`
--

DROP TABLE IF EXISTS `sessoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessoes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` int(10) unsigned NOT NULL,
  `ajudante_id` int(10) unsigned NOT NULL,
  `data_hora` datetime DEFAULT NULL,
  `estado_sessao` enum('agendada','em_curso','concluida','cancelada') NOT NULL DEFAULT 'agendada',
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `ajudante_id` (`ajudante_id`),
  CONSTRAINT `sessoes_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos_ajuda` (`id`),
  CONSTRAINT `sessoes_ibfk_2` FOREIGN KEY (`ajudante_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `utilizadores`
--

DROP TABLE IF EXISTS `utilizadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilizadores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `email` varchar(160) NOT NULL,
  `senha_hash` varchar(255) NOT NULL,
  `papel` enum('aluno','professor','administrador') NOT NULL DEFAULT 'aluno',
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-19 11:58:41
