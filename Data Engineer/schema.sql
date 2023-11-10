-- Create the coding_challenge_data database
CREATE DATABASE coding_challenge_data;

-- Use the coding_challenge database
USE coding_challenge;

-- Create the countries table
CREATE TABLE countries (
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   created_at DATETIME NOT NULL
);

-- Create the stores table
CREATE TABLE stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

-- Create the products table
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    store_id INT,
    FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- Create the orders table
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type INT(1) NOT NULL,
    store_id INT,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- Create the order_items table
CREATE TABLE order_items (
     order_id INT,
     product_id INT,
     quantity INT NOT NULL,
     FOREIGN KEY (order_id) REFERENCES orders(id),
     FOREIGN KEY (product_id) REFERENCES products(id),
     PRIMARY KEY (order_id, product_id)
);