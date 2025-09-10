CREATE DATABASE IF NOT EXISTS `hyf_node_week2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `hyf_node_week2`;

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `confirmed_at` datetime DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `snippets` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `contents` text NOT NULL,
  `is_private` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_idx` (`user_id`),
  CONSTRAINT `id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO users (first_name, last_name, email, token)
VALUES 
('Alice', 'Johnson', 'alice@example.com', 'token_alice_123'),
('Bob', 'Smith', 'bob@example.com', 'token_bob_456'),
('Charlie', 'Lee', 'charlie@example.com', 'token_charlie_789'),
('Diana', 'Prince', 'diana@example.com', 'token_diana_321'),
('Ethan', 'Hunt', 'ethan@example.com', 'token_ethan_654');

INSERT INTO snippets (user_id, title, contents, is_private)
VALUES
(11, 'Hello World', 'console.log("Hello, world!");', 0),
(12, 'Add Numbers', 'function add(a, b) { return a + b; }', 1),
(12, 'Simple SQL Query', 'SELECT * FROM users;', 0),
(13, 'Private Todo', '// Refactor this code before release', 1),
(14, 'Public JSON Example', '{ "name": "Alice", "age": 30 }', 0);
