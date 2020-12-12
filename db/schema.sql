### Schema
DROP DATABASE IF EXISTS daBurger_db;
CREATE DATABASE daBurger_db;
USE daBurger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
