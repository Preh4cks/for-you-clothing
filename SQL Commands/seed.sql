USE foriou;

-- GENERATE PRODUCTS
INSERT INTO products(name, vendor, unit_price, discounted_price, rating, image_url, description, inventory_count, created_at, updated_at)
VALUES
  ('Padded Office Desk Chair', 'Unlabeled', 7000, 6000, 0.86, '/images/chair.jpg', 'Comfortable padded office desk chair.', 10, NOW(), NOW()),
  ('Wireless Earbuds', 'Syntrava', 1500, 750, 0.5, '/images/earphone.jpg', 'High-quality wireless earbuds for an immersive audio experience.', 20, NOW(), NOW()),
  ('Amazon Fire HD 10 tablet', 'Amazon', 7000, 6000, 0.92, '/images/tablet.jpg', 'Amazon Fire HD 10 tablet for reading and entertainment.', 15, NOW(), NOW()),
  ('Short Skirt', 'Lyaner', 1500, 1500, 0.88, '/images/skirt.jpg', 'Stylish short skirt for parties and casual occasions.', 25, NOW(), NOW()),
  ('Golden Groundhog TCG', 'Pokemon', 900, 900, 0.84, '/images/cards.jpg', 'Pokemon TCG cards for anime enthusiasts.', 30, NOW(), NOW()),
  ('Moist T-Shirt', 'Unlabeled', 800, 800, 0.84, '/images/black_shirt.jpg', 'Comfortable and moisture-wicking T-shirt for men.', 18, NOW(), NOW()),
  ('Throw Pillow Case Jesus', 'Unlabeled', 500, 500, 0.96, '/images/pillow.jpg', 'Decorative throw pillow case with a Jesus design.', 12, NOW(), NOW()),
  ('Womens Summer T Shirts', 'Unlabeled', 1100, 1100, 0.96, '/images/blouse.jpg', 'Colorful and stylish summer T-shirts for women.', 22, NOW(), NOW()),
  ('Pullover Hoodie Sweatshirt', 'SweatyRocks', 1500, 1500, 0.96, '/images/jacket.jpg', 'Warm and comfortable pullover hoodie sweatshirt for women.', 16, NOW(), NOW()),
  ('Casual Leather Belt', 'Steve Madden', 650, 650, 0.82, '/images/belt.jpg', 'Stylish casual leather belt for men.', 28, NOW(), NOW());


-- GENERATE CATEGORIES
INSERT INTO categories(name, created_at, updated_at) VALUES
  ('gray', NOW(), NOW()),
  ('black', NOW(), NOW()),
  ('leather', NOW(), NOW()),
  ('adjustable', NOW(), NOW()),
  ('office', NOW(), NOW()),
  ('work', NOW(), NOW()),
  ('chair', NOW(), NOW()),
  ('male', NOW(), NOW()),
  ('earphones', NOW(), NOW()),
  ('wireless', NOW(), NOW()),
  ('earbuds', NOW(), NOW()),
  ('headphones', NOW(), NOW()),
  ('tablet', NOW(), NOW()),
  ('reading', NOW(), NOW()),
  ('ebook', NOW(), NOW()),
  ('female', NOW(), NOW()),
  ('red', NOW(), NOW()),
  ('yellow', NOW(), NOW()),
  ('green', NOW(), NOW()),
  ('blue', NOW(), NOW()),
  ('orange', NOW(), NOW()),
  ('pink', NOW(), NOW()),
  ('party', NOW(), NOW()),
  ('pokemon', NOW(), NOW()),
  ('cards', NOW(), NOW()),
  ('anime', NOW(), NOW()),
  ('shirt', NOW(), NOW()),
  ('casual', NOW(), NOW()),
  ('pillow', NOW(), NOW()),
  ('cover', NOW(), NOW()),
  ('sweater', NOW(), NOW()),
  ('rainbow', NOW(), NOW()),
  ('belt', NOW(), NOW());


-- ATTACH CATEGORIES TO PRODUCTS
-- Product 1
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (1, 1, NOW(), NOW()), -- gray
  (2, 1, NOW(), NOW()), -- black
  (3, 1, NOW(), NOW()), -- leather
  (4, 1, NOW(), NOW()), -- adjustable
  (5, 1, NOW(), NOW()), -- office
  (6, 1, NOW(), NOW()), -- work
  (7, 1, NOW(), NOW()); -- chair

-- Product 2
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (8, 2, NOW(), NOW()), -- male
  (2, 2, NOW(), NOW()), -- black
  (9, 2, NOW(), NOW()), -- earphones
  (10, 2, NOW(), NOW()), -- wireless
  (11, 2, NOW(), NOW()), -- earbuds
  (12, 2, NOW(), NOW()); -- headphones

-- Product 3
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (2, 3, NOW(), NOW()), -- black
  (13, 3, NOW(), NOW()), -- tablet
  (14, 3, NOW(), NOW()), -- reading
  (15, 3, NOW(), NOW()); -- ebook

-- Product 4
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (16, 4, NOW(), NOW()), -- female
  (2, 4, NOW(), NOW()), -- black
  (17, 4, NOW(), NOW()), -- red
  (18, 4, NOW(), NOW()), -- yellow
  (19, 4, NOW(), NOW()), -- green
  (20, 4, NOW(), NOW()), -- blue
  (21, 4, NOW(), NOW()), -- orange
  (22, 4, NOW(), NOW()), -- pink
  (23, 4, NOW(), NOW()); -- party

-- Product 5
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (8, 5, NOW(), NOW()), -- male
  (24, 5, NOW(), NOW()), -- pokemon
  (25, 5, NOW(), NOW()), -- cards
  (26, 5, NOW(), NOW()); -- anime

-- Product 6
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (8, 6, NOW(), NOW()), -- male
  (27, 6, NOW(), NOW()), -- shirt
  (2, 6, NOW(), NOW()), -- black
  (28, 6, NOW(), NOW()); -- casual

-- Product 7
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (8, 7, NOW(), NOW()), -- male
  (29, 7, NOW(), NOW()), -- pillow
  (30, 7, NOW(), NOW()); -- cover

-- Product 8
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (16, 8, NOW(), NOW()), -- female
  (2, 8, NOW(), NOW()), -- black
  (17, 8, NOW(), NOW()), -- red
  (18, 8, NOW(), NOW()), -- yellow
  (19, 8, NOW(), NOW()), -- green
  (20, 8, NOW(), NOW()), -- blue
  (21, 8, NOW(), NOW()), -- orange
  (22, 8, NOW(), NOW()), -- pink
  (23, 8, NOW(), NOW()); -- party

-- Product 9
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (16, 9, NOW(), NOW()), -- female
  (31, 9, NOW(), NOW()), -- rainbow
  (17, 9, NOW(), NOW()), -- red
  (18, 9, NOW(), NOW()), -- yellow
  (19, 9, NOW(), NOW()), -- green
  (20, 9, NOW(), NOW()), -- blue
  (21, 9, NOW(), NOW()), -- orange
  (22, 9, NOW(), NOW()), -- pink
  (32, 9, NOW(), NOW()); -- sweater

-- Product 10
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES
  (8, 10, NOW(), NOW()), -- male
  (2, 10, NOW(), NOW()), -- black
  (33, 10, NOW(), NOW()); -- belt