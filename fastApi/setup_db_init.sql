
CREATE USER 'mySQLUser'@'localhost' IDENTIFIED BY '1234';

CREATE DATABASE juegos_db;

GRANT ALL PRIVILEGES ON juegos_db.* TO 'mySQLUser'@'localhost';

USE juegos_db;

CREATE TABLE juegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    consola VARCHAR(255)
);

INSERT INTO juegos VALUES (1, 'Uncharted','Playstation');
INSERT INTO juegos VALUES (2, 'Halo', 'Xbox');
INSERT INTO juegos VALUES (3, 'Minecraft', 'PC');
