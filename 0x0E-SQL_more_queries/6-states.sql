-- creating database hbtn_0d_usa and the table states (in the database hbtn_0d_u
-- creating database
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- using database
USE hbtn_0d_usa;
-- creating table
CREATE TABLE IF NOT EXISTS states (id INT UNIQUE NOT NULL AUTO_INCREMENT, name VARCHAR(256) NOT NULL, PRIMARY KEY(id));
