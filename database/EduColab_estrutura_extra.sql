
DROP TABLE IF EXISTS `tarefas`, `membros_projeto`, `projetos`, `respostas`, `denuncias`, `avaliacoes`;

CREATE TABLE `projetos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(180) NOT NULL,
  `descricao` text DEFAULT NULL,
  `prazo` date DEFAULT NULL,
  `professor_id` int(10) unsigned NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `professor_id` (`professor_id`),
  CONSTRAINT `projetos_ibfk_1` FOREIGN KEY (`professor_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `membros_projeto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `projeto_id` int(10) unsigned NOT NULL,
  `aluno_id` int(10) unsigned NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `adicionado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `projeto_aluno` (`projeto_id`, `aluno_id`),
  KEY `aluno_id` (`aluno_id`),
  CONSTRAINT `membros_projeto_ibfk_1` FOREIGN KEY (`projeto_id`) REFERENCES `projetos` (`id`),
  CONSTRAINT `membros_projeto_ibfk_2` FOREIGN KEY (`aluno_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tarefas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `projeto_id` int(10) unsigned NOT NULL,
  `titulo` varchar(180) NOT NULL,
  `prazo` date DEFAULT NULL,
  `estado` enum('a_fazer','em_andamento','concluido') NOT NULL DEFAULT 'a_fazer',
  `responsavel_id` int(10) unsigned DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `projeto_id` (`projeto_id`),
  KEY `responsavel_id` (`responsavel_id`),
  CONSTRAINT `tarefas_ibfk_1` FOREIGN KEY (`projeto_id`) REFERENCES `projetos` (`id`),
  CONSTRAINT `tarefas_ibfk_2` FOREIGN KEY (`responsavel_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `avaliacoes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `material_id` int(10) unsigned NOT NULL,
  `aluno_id` int(10) unsigned NOT NULL,
  `nota` tinyint(3) unsigned NOT NULL,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `material_aluno` (`material_id`, `aluno_id`),
  KEY `aluno_id` (`aluno_id`),
  CONSTRAINT `avaliacoes_ibfk_1` FOREIGN KEY (`material_id`) REFERENCES `materiais` (`id`),
  CONSTRAINT `avaliacoes_ibfk_2` FOREIGN KEY (`aluno_id`) REFERENCES `utilizadores` (`id`),
  CONSTRAINT `avaliacoes_chk_nota` CHECK (`nota` BETWEEN 1 AND 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `denuncias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `material_id` int(10) unsigned NOT NULL,
  `denunciante_id` int(10) unsigned NOT NULL,
  `motivo` text NOT NULL,
  `resolvida` tinyint(1) NOT NULL DEFAULT 0,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `material_id` (`material_id`),
  KEY `denunciante_id` (`denunciante_id`),
  CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`material_id`) REFERENCES `materiais` (`id`),
  CONSTRAINT `denuncias_ibfk_2` FOREIGN KEY (`denunciante_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `respostas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` int(10) unsigned NOT NULL,
  `autor_id` int(10) unsigned NOT NULL,
  `texto` text NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `autor_id` (`autor_id`),
  CONSTRAINT `respostas_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos_ajuda` (`id`),
  CONSTRAINT `respostas_ibfk_2` FOREIGN KEY (`autor_id`) REFERENCES `utilizadores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;