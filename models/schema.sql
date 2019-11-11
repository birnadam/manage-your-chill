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
    accountID		bigint,
    primary key(id)
);

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts(
	id   INTEGER auto_increment,
    accountOnwer    INTEGER NOT NULL,
    users			VARCHAR(256),
    chillerIDs		VARCHAR(256) NOT NULL,
    primary key(id)
);





DROP TABLE IF EXISTS chillers;

CREATE TABLE chillers(
	id			INTEGER auto_increment,
    location   	VARCHAR(256) NOT NULL,
    ownerID		INTEGER NOT NULL,
    tableRef	VARCHAR(256) NOT NULL,
    primary key (id)
    );

CREATE TABLE chillerData(
	id						INTEGER auto_increment,
    temp1 					INTEGER NOT NULL,
    temp2					INTEGER NOT NULL,
    temp3					INTEGER NOT NULL,
    ambientTemp				INTEGER NOT NULL,
    timestamp				INTEGER NOT NULL,
    primary key(id)
);
