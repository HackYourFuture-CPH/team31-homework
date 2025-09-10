-- Active: 1746558863511@@127.0.0.1@3306@hyf_node_week3_warmup
CREATE DATABASE hyf_node_week3_warmup;

USE hyf_node_week3_warmup;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO contacts (first_name, last_name, email, phone) VALUES
('Selig', 'Matussov', 'smatussov0@pinterest.com', '176-630-4577'),
('Kenny', 'Yerrington', NULL, NULL),
('Emilie', 'Gaitskell', NULL, NULL),
('Jordon', 'Tokell', NULL, NULL),
('Sallyann', 'Persse', 'spersse4@webnode.com', '219-157-2368'),
('Berri', 'Bulter', NULL, NULL),
('Lanni', 'Ivanilov', 'livanilov6@fda.gov', NULL),
('Dagny', 'Milnthorpe', NULL, NULL),
('Annadiane', 'Bansal', NULL, NULL),
('Tawsha', 'Hackley', NULL, NULL),
('Rubetta', 'Ozelton', NULL, NULL),
('Charles', 'Boughey', 'cbougheyb@senate.gov', '605-358-5664'),
('Shantee', 'Robbe', NULL, NULL),
('Gleda', 'Peat', NULL, NULL),
('Arlinda', 'Ethersey', 'aetherseye@biglobe.ne.jp', '916-139-1300'),
('Armando', 'Meachem', 'ameachemf@oaic.gov.au', '631-442-5339'),
('Codi', 'Redhouse', NULL, '401-953-6897'),
('Ann', 'Buncombe', 'abuncombeh@ow.ly', '210-338-0748'),
('Louis', 'Matzkaitis', 'lmatzkaitisi@ebay.com', '583-996-6979'),
('Jessey', 'Pala', NULL, NULL),
('Archy', 'Scipsey', 'ascipseyk@ask.com', '420-983-2426'),
('Benoit', 'Mould', 'bmouldl@bing.com', '271-217-9218'),
('Sherm', 'Girardey', 'sgirardeym@guardian.co.uk', '916-999-2957'),
('Raquel', 'Mudge', 'rmudgen@slate.com', '789-830-7473'),
('Tabor', 'Reavey', NULL, NULL);
