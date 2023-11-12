USE foriou;

-- GENERATE PRODUCTS
INSERT INTO products(name, vendor, unit_price, discounted_price, rating, image_url, description, inventory_count, created_at, updated_at)
VALUES
  ('Padded Office Desk Chair', 'Unlabeled', 7000, 6000, 0.86, 'https://m.media-amazon.com/images/I/91utwIPuRTL._AC_SX522_.jpg', 'Comfortable padded office desk chair.', 10, NOW(), NOW()),
  ('Wireless Earbuds', 'Syntrava', 1500, 750, 0.5, 'https://m.media-amazon.com/images/I/61nh7vLi0GL._AC_SY450_.jpg', 'High-quality wireless earbuds for an immersive audio experience.', 20, NOW(), NOW()),
  ('Amazon Fire HD 10 tablet', 'Amazon', 7000, 6000, 0.92, 'https://m.media-amazon.com/images/I/61mEDXofrYS._AC_SX425_.jpg', 'Amazon Fire HD 10 tablet for reading and entertainment.', 15, NOW(), NOW()),
  ('Short Skirt', 'Lyaner', 1500, 1500, 0.88, 'https://m.media-amazon.com/images/I/61uxveH2aaL._AC_UY550_.jpg', 'Stylish short skirt for parties and casual occasions.', 25, NOW(), NOW()),
  ('Golden Groundhog TCG', 'Pokemon', 900, 900, 0.84, 'https://m.media-amazon.com/images/I/81BbRrwnWGL._AC_SX679_.jpg', 'Pokemon TCG cards for anime enthusiasts.', 30, NOW(), NOW()),
  ('Moist T-Shirt', 'Unlabeled', 800, 800, 0.84, 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61YaMT4BY-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png', 'Comfortable and moisture-wicking T-shirt for men.', 18, NOW(), NOW()),
  ('Throw Pillow Case Jesus', 'Unlabeled', 500, 500, 0.96, 'https://m.media-amazon.com/images/I/712JsXaYaoL._AC_SX522_.jpg', 'Decorative throw pillow case with a Jesus design.', 12, NOW(), NOW()),
  ('Womens Summer T Shirts', 'Unlabeled', 1100, 1100, 0.96, 'https://m.media-amazon.com/images/I/81k4A3ebawL._AC_UY550_.jpg', 'Colorful and stylish summer T-shirts for women.', 22, NOW(), NOW()),
  ('Pullover Hoodie Sweatshirt', 'SweatyRocks', 1500, 1500, 0.96, 'https://m.media-amazon.com/images/I/71xftTDPj+L._AC_UY550_.jpg', 'Warm and comfortable pullover hoodie sweatshirt for women.', 16, NOW(), NOW()),
  ('Casual Leather Belt', 'Steve Madden', 650, 650, 0.82, 'https://m.media-amazon.com/images/I/71e0b5j7y3L._AC_UX342_.jpg', 'Stylish casual leather belt for men.', 28, NOW(), NOW());


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