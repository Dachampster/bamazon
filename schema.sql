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

