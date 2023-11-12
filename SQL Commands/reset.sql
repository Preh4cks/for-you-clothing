USE foriou;

-- Disable foreign key checks
SET foreign_key_checks = 0;

-- Disable safe updates
SET SQL_SAFE_UPDATES = 0;

-- Reset order_products table
DELETE FROM order_products;
ALTER TABLE order_products AUTO_INCREMENT = 1;

-- Reset orders table
DELETE FROM orders;
ALTER TABLE orders AUTO_INCREMENT = 1;

-- Reset product_categories table
DELETE FROM product_categories;
ALTER TABLE product_categories AUTO_INCREMENT = 1;

-- Reset ratings table
DELETE FROM ratings;
ALTER TABLE ratings AUTO_INCREMENT = 1;

-- Reset customers table
DELETE FROM customers;
ALTER TABLE customers AUTO_INCREMENT = 1;

-- Reset products table
DELETE FROM products;
ALTER TABLE products AUTO_INCREMENT = 1;

-- Reset categories table
DELETE FROM categories;
ALTER TABLE categories AUTO_INCREMENT = 1;

-- Enable foreign key checks
SET foreign_key_checks = 1;

-- Enable safe updates
SET SQL_SAFE_UPDATES = 1;