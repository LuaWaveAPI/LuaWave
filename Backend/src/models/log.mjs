import sqlite3 from "sqlite3";

export const log = new sqlite3.Database("./Backend/log.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chat database.");
});

log.run(`CREATE TABLE IF NOT EXISTS Register (
    id INTEGER PRIMARY KEY,
    Date NUMERIC NOT NULL,
    Endpoint VARCHAR(45) NOT NULL,
    Description VARCHAR(500) NULL DEFAULT 'DEFAULT NULL',
    DescriptionCompleted VARCHAR(500) NULL DEFAULT 'DEFAULT NULL'
)
`);

log.run(`CREATE TABLE IF NOT EXISTS Contact (
  id INTEGER PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  email TEXT NOT NULL,
  coment VARCHAR(500) NOT NULL
)
`);
