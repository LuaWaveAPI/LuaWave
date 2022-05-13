import sqlite3 from "sqlite3";

export const luawave = new sqlite3.Database("./Backend/luawave.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chat database.");
});

luawave.run(`CREATE TABLE IF NOT EXISTS Articles (
        Articles_id INTEGER PRIMARY KEY,
        Name VARCHAR(45) NOT NULL,
        Description VARCHAR(500) NULL DEFAULT 'DEFAULT NULL',
        Stock INTEGER NOT NULL,
        Photo TEXT NOT NULL,
        Price NUMERIC NOT NULL,
        Category INTEGER NOT NULL,
        CONSTRAINT Category
            FOREIGN KEY (Category)
            REFERENCES Categories (ID_category)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
    )
`);

luawave.run(`CREATE TABLE IF NOT EXISTS Rental( 
        Rental_id INTEGER PRIMARY KEY,
        Name VARCHAR(45) NOT NULL,
        DNI VARCHAR(10) NOT NULL,
        Email VARCHAR(100) NOT NULL,
        Phone VARCHAR(15) NULL DEFAULT 'DEFAULT NULL',
        Code_postal VARCHAR(5) NOT NULL
    )
`);

luawave.run(
  `CREATE TABLE IF NOT EXISTS Categories(
        ID_category INTEGER PRIMARY KEY,
        Name VARCHAR(45) NOT NULL,
        Description VARCHAR(100) NOT NULL
    )`
);

luawave.run(`CREATE TABLE IF NOT EXISTS Rental_articles (
        Rental_articles_id INT AUTO_INCREMENT,
        Articles_id INT NOT NULL,
        Rental_id INT NOT NULL,
        Rental_date DATETIME NOT NULL,
        Return_date DATETIME NOT NULL,
        Quantity INT NOT NULL,
        Price DECIMAL NOT NULL,
        PRIMARY KEY (Rental_articles_id, Articles_id, Rental_id),
        CONSTRAINT Articles_id
            FOREIGN KEY (Articles_id)
            REFERENCES Articles (Articles_id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
        CONSTRAINT Rental_id
            FOREIGN KEY (Rental_id)
            REFERENCES Rental (Rental_id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
    )
`);

luawave.run(
  `CREATE TABLE IF NOT EXISTS Staff (
        Staff_id INTEGER PRIMARY KEY,
        Name VARCHAR(45) NOT NULL,
        DNI VARCHAR(10) NOT NULL,
        Password VARCHAR(45) NOT NULL,
        Email VARCHAR(100) NOT NULL,
        Phone VARCHAR(15) NULL DEFAULT 'Sin info',
        Address VARCHAR(100) NULL DEFAULT 'Sin info',
        Active BOOLEAN NOT NULL DEFAULT TRUE
    )
`
);
