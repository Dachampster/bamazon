-- schema
CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
  ID int AUTO_INCREMENT,
  Item varchar(30) NOT NULL,
  Price decimal(10) NOT NULL,
  Stock int(10) NOT NULL,
  PRIMARY KEY(id)
);


INSERT INTO products (ID, Item, Price, Stock) VALUES (1,"Pickles",1.99,25);
INSERT INTO products (Item, Department, Price, Stock)VALUES ("Mongo DB", "Electronics", 399, 1);
INSERT INTO products (Item, Department, Price, Stock)VALUES ("React-JS", "Electronics", 299, 3);
INSERT INTO products (Item, Department, Price, Stock)VALUES ("a real programming language", "Electronics", 60, 14);

