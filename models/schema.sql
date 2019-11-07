DROP DATABASE IF EXISTS manage_your_chill;

CREATE DATABASE manage_your_chill;

USE manage_your_chill;

DROP TABLE IF exists users;

CREATE TABLE users(
	id 				INTEGER auto_increment,
    fullName		VARCHAR(128) NOT NULL,
    companyName		VARCHAR(128),
    email			VARCHAR(128) NOT NULL,
    password		VARCHAR(256) NOT NULL,
    createdOn		VARCHAR(12)  NOT NULL,
    chillerIDs		VARCHAR(256) NOT NULL,
    primary key(id)
);


DROP TABLE IF EXISTS chillers;

CREATE TABLE chillers(
	id			INTEGER auto_increment,
    tableRef	INTEGER NOT NULL,
    primary key (id)
    );