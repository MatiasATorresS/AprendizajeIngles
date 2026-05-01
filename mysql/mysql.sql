CREATE DATABASE `signup` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);


CREATE TABLE `unidades_ingles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `unidades_ingles` (`id`, `nombre`, `descripcion`) VALUES (1, 'Unit 1: Days Gone By', 'Describe actions that happened in the past.');
INSERT INTO `unidades_ingles` (`id`, `nombre`, `descripcion`) VALUES (2, 'Unit 2: The People Around Us', 'Describe actions in the past that continue in the present.');
INSERT INTO `unidades_ingles` (`id`, `nombre`, `descripcion`) VALUES (3, 'Unit 3: The Beauty That Surrounds Us', 'Express needs and probabilities.');
INSERT INTO `unidades_ingles` (`id`, `nombre`, `descripcion`) VALUES (4, 'Unit 4: Great Moments', 'Provide essential or additional information using relative clauses.');


CREATE TABLE `materias_ingles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `unidad_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `unidad_id` (`unidad_id`),
  CONSTRAINT `materias_ingles_ibfk_1` FOREIGN KEY (`unidad_id`) REFERENCES `unidades_ingles` (`id`)
);


INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (1,'Past Simple','Description for Past Simple.',1);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (2,'Past Continuous','Description for Past Continuous.',1);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (3,'Present Perfect','Description for Present Perfect ',2);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (4,'Present Perfect (ever & never)','Description for Present Perfect (ever & never).',2);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (5,'Present Perfect (How long, for & since)','Description for Present Perfect (How long, for & since).',2);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (6,'Expressing Necessity and Probability','Description for Expressing Necessity and Probability.',3);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (7,'Expressing Predictions and Promises','Description for Expressing Predictions and Promises.',3);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (8,'Past Simple Passive','Description for Past Simple Passive.',3);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (9,'Present Simple','Description for Present Simple.',3);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (10,'Present Simple Passive','Description for Present Simple Passive.',3);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (11,'Relative Clauses: Defining & Non-Defining','Description for Relative Clauses: Defining & Non-Defining.',4);
INSERT INTO `materias_ingles` (`id`,`nombre`,`descripcion`,`unidad_id`) VALUES (12,'Question Tags','Description for Question Tags.',4);

CREATE TABLE `user_exercises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `questions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`questions`)),
  `user_answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`user_answers`)),
  `results` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`results`)),
  `score` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_exercises_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `login` (`id`)
)


