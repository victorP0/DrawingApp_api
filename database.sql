CREATE DATABASE DrawingApp;

drop table if EXISTS Arts;

CREATE TABLE Arts(
    id VARCHAR (100) PRIMARY KEY,
    author TEXT NOT NULL,
    description TEXT,
    src TEXT,
    key TEXT
);
