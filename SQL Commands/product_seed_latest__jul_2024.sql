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
  ('Casual Leather Belt', 'Steve Madden', 650, 650, 0.82, '/images/belt.jpg', 'Stylish casual leather belt for men.', 28, NOW(), NOW()),
  
  ('Shirt Black', 'Champion', 800, 800, 0.9, 'https://m.media-amazon.com/images/I/81PqX7YyLBL._AC_SY550_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash OriginImported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Shirt White', 'Champion', 800, 800, 1, 'https://m.media-amazon.com/images/I/51dPz+dQTZL._AC_SX522_.jpg', "Product details Fabric type 100% Cotton Care instructions Machine Wash Origin Imported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Shirt Blue', 'Champion', 800, 800, 0.85, 'https://m.media-amazon.com/images/I/71Xgx41+NyL._AC_SX569_.jpg', "Product details Fabric type 100% Cotton Care instructions Machine Wash Origin Imported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Polo Shirt Black', 'Cossniss', 900, 700, 1, 'https://m.media-amazon.com/images/I/7176fMiEuWL._AC_SX522_.jpg', "Product details Fabric type 100% Cotton Care instructions Machine Wash Origin Imported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Polo Shirt White', 'Cossniss', 900, 700, 0.95, 'https://m.media-amazon.com/images/I/81SIQOx9syL._AC_SX522_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash OriginImported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Polo Shirt Blue', 'Cossniss', 900, 700, 0.8, 'https://m.media-amazon.com/images/I/817BxHCJhwL._AC_SX522_.jpg', "Product details Fabric type 100% Cotton Care instructions Machine Wash Origin Imported Neck styleCrew Neck About this item THE FIT - Standard-fit men's T-shirt for a classic look. THE FEEL - Crafted from a soft, 5.5 oz. cotton or cotton blend. THE LOOK - Classic short-sleeve style with ribbed crew neckline and soft back neck tape. SPOT THE C - Iconic C logo at the chest and left sleeve are recognizable on and off the field. Note: C logo patch color may vary from image.", 10, NOW(), NOW()),
  ('Short Classic-Fit Black', 'Amazon', 800, 600, 0.88, 'https://m.media-amazon.com/images/I/71wcnt4mVuL._AC_SX569_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Short Classic-Fit White', 'Amazon', 800, 600, 0.95, 'https://m.media-amazon.com/images/I/71OuGHBsLKL._AC_SY550_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Short Classic-Fit Blue', 'Amazon', 800, 600, 0.8, 'https://m.media-amazon.com/images/I/71oa8K-iZKL._AC_SY550_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Slim-Fit Pants Black', 'Amazon', 800, 800, 0.95, 'https://m.media-amazon.com/images/I/71Avxf+kbHL._AC_SX569_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Slim-Fit Pants White', 'Amazon', 800, 800, 0.97, 'https://m.media-amazon.com/images/I/61kwAigA6VL._AC_SY550_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Slim-Fit Pants Blue', 'Amazon', 800, 800, 0.81, 'https://m.media-amazon.com/images/I/71Fo0AlxOyL._AC_SY550_.jpg', "Product details Fabric type 100% Cotton Care instructionsMachine Wash Warm, Tumble Dry nOriginImported Closure typeZipper About this item CLASSIC FIT: Roomy through hip and thigh with straight leg. Sits at the waist. COTTON TWILL: Gently structured cotton twill that is naturally breathable with a garment wash for a soft, durable hand. EVERYDAY SHORTS: Classic khaki chino shorts in a non-stretch, garment-washed fabric for a versatile warm-weather wardrobe staple. DETAILS: Zip fly with button at waist, front slant pockets, and button-through back welt pockets. INSEAM: 9 on US size 32.", 10, NOW(), NOW()),
  ('Tshirt Black', 'Automet', 800, 800, 0.84, 'https://m.media-amazon.com/images/I/71NgezgFidL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Tshirt White', 'Automet', 800, 800, 1, 'https://m.media-amazon.com/images/I/71M8CON5miL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Tshirt Blue', 'Automet', 800, 800, 0.7, 'https://m.media-amazon.com/images/I/71NlXBhxifL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Summer Top Black', 'Wiholl', 800, 600, 0.84, 'https://m.media-amazon.com/images/I/71pIB9vI1JL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Summer Top White', 'Wiholl', 800, 600, 0.9, 'https://m.media-amazon.com/images/I/61xXyhxqdkL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Summer Top Blue', 'Wiholl', 800, 600, 0.8, 'https://m.media-amazon.com/images/I/71yTSdlPuvL._AC_SY550_.jpg', "Product details Fabric type60%Polyester,35%Rayon,5%Sapndex Care instructionsMachine Wash Origin Imported Closure type Pull On About this item Material:The short sleeve tops is made of 35%rayon+60%polyester+5 %spandex，solid color, super soft, lightweight, breathable and stretchy Design:basic t-shirts,U neck,short sleeve,solid color,loose fit,lightweight,comfy under shirts,casual style, Match: This womens short sleeve T shirts is perfect match with lounge shorts/sweatpants/jeans/pants in summer/spring/fall,Also can wear as a undershirt and match with casual coat or jacket. Creat a chic and stylish daily look. Occasion: Casual lounge t shirts, perfect for daily life/workout/travel/running/home/office/vacation/sport/gym/yoga/going out. Note: Machine wash with a laundry bag, hand wash cold, do not bleach.", 10, NOW(), NOW()),
  ('Fleece Short Black', 'Amazon', 800, 700, 0.75, 'https://m.media-amazon.com/images/I/61yJuhyPNOL._AC_SY550_.jpg', "Fabric type60% Cotton, 40% Polyester Care instructionsMachine Wash Warm, Tumble Dry OriginImported Closure typeElastic About this item REGULAR FIT: Close but comfortable fit through hip and thigh with ease through the leg opening. Mid rise, sits below the natural waist. COZY BRUSHED BACK FLEECE: Buttery soft and comfy midweight cotton blend fleece with brushed interior. EVERYWHERE SWEATSHORT: These everyday fleece shorts give you ultimate comfort and versatility whether you are at the gym, running errands, going for a walk, or just lounging at home. DETAILS: Features a drawstring pull-on waistband for all-day comfort and the perfect fit, and front slant pocket to hold the essentials. INSEAM: 3 1/2“ on US size S.", 10, NOW(), NOW()),
  ('Fleece Short White', 'Amazon', 800, 700, 0.9, 'https://m.media-amazon.com/images/I/71Q6usnIF8L._AC_SY550_.jpg', "Fabric type60% Cotton, 40% Polyester Care instructionsMachine Wash Warm, Tumble Dry OriginImported Closure typeElastic About this item REGULAR FIT: Close but comfortable fit through hip and thigh with ease through the leg opening. Mid rise, sits below the natural waist. COZY BRUSHED BACK FLEECE: Buttery soft and comfy midweight cotton blend fleece with brushed interior. EVERYWHERE SWEATSHORT: These everyday fleece shorts give you ultimate comfort and versatility whether you are at the gym, running errands, going for a walk, or just lounging at home. DETAILS: Features a drawstring pull-on waistband for all-day comfort and the perfect fit, and front slant pocket to hold the essentials. INSEAM: 3 1/2“ on US size S.", 10, NOW(), NOW()),
  ('Biker Short Black', 'Fullsoft', 800, 800, 0.8, 'https://m.media-amazon.com/images/I/71V1N1CkO+L._AC_SX466_.jpg', "Fabric type60% Cotton, 40% Polyester Care instructionsMachine Wash Warm, Tumble Dry OriginImported Closure typeElastic About this item REGULAR FIT: Close but comfortable fit through hip and thigh with ease through the leg opening. Mid rise, sits below the natural waist. COZY BRUSHED BACK FLEECE: Buttery soft and comfy midweight cotton blend fleece with brushed interior. EVERYWHERE SWEATSHORT: These everyday fleece shorts give you ultimate comfort and versatility whether you are at the gym, running errands, going for a walk, or just lounging at home. DETAILS: Features a drawstring pull-on waistband for all-day comfort and the perfect fit, and front slant pocket to hold the essentials. INSEAM: 3 1/2“ on US size S.", 10, NOW(), NOW()),
  ('Biker Short White', 'Fullsoft', 800, 800, 0.85, 'https://m.media-amazon.com/images/I/61rW0SQE3kL._AC_SX466_.jpg', "Fabric type60% Cotton, 40% Polyester Care instructionsMachine Wash Warm, Tumble Dry OriginImported Closure typeElastic About this item REGULAR FIT: Close but comfortable fit through hip and thigh with ease through the leg opening. Mid rise, sits below the natural waist. COZY BRUSHED BACK FLEECE: Buttery soft and comfy midweight cotton blend fleece with brushed interior. EVERYWHERE SWEATSHORT: These everyday fleece shorts give you ultimate comfort and versatility whether you are at the gym, running errands, going for a walk, or just lounging at home. DETAILS: Features a drawstring pull-on waistband for all-day comfort and the perfect fit, and front slant pocket to hold the essentials. INSEAM: 3 1/2“ on US size S.", 10, NOW(), NOW()),
  ('Biker Short Blue', 'Fullsoft', 800, 800, 1, 'https://m.media-amazon.com/images/I/71d2J4JJspL._AC_SX466_.jpg', "Fabric type60% Cotton, 40% Polyester Care instructionsMachine Wash Warm, Tumble Dry OriginImported Closure typeElastic About this item REGULAR FIT: Close but comfortable fit through hip and thigh with ease through the leg opening. Mid rise, sits below the natural waist. COZY BRUSHED BACK FLEECE: Buttery soft and comfy midweight cotton blend fleece with brushed interior. EVERYWHERE SWEATSHORT: These everyday fleece shorts give you ultimate comfort and versatility whether you are at the gym, running errands, going for a walk, or just lounging at home. DETAILS: Features a drawstring pull-on waistband for all-day comfort and the perfect fit, and front slant pocket to hold the essentials. INSEAM: 3 1/2“ on US size S.", 10, NOW(), NOW());


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
INSERT INTO categories(name, created_at, updated_at) VALUES
  ('male', NOW(), NOW()),
  ('female', NOW(), NOW()),
  ('shirt', NOW(), NOW()),
  ('short', NOW(), NOW()),
  ('pants', NOW(), NOW()),
  ('black', NOW(), NOW()),
  ('white', NOW(), NOW()),
  ('blue', NOW(), NOW())
  ;




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



-- -- ATTACH CATEGORIES TO PRODUCTS 22
-- -- Product 1
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 11, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 12, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 13, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 14, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 15, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 16, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 17, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 18, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 19, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 20, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 21, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(8, 22, NOW(), NOW()); -- gray


INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 23, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 24, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 25, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 26, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 27, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 28, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 29, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 30, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 31, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 32, NOW(), NOW()); -- gray
INSERT INTO product_categories(categories_id, products_id, created_at, updated_at) VALUES(16, 33, NOW(), NOW()); -- gray
