### Schema
DROP DATABASE IF EXISTS lwkwlpyr1rhfqlag;
CREATE DATABASE lwkwlpyr1rhfqlag;
USE lwkwlpyr1rhfqlag;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
