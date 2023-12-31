-- create db
CREATE DATABASE hotels;

-- create new table 
DROP TABLE IF EXISTS links;

CREATE TABLE hotel (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    price DECIMAL(12,2),
	description VARCHAR(255),
	image VARCHAR(255) NOT NULL,
	location VARCHAR(255),
	price_id VARCHAR(255)
);

--create table for bookings
CREATE TABLE bookings (
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	price DECIMAL(12,2),
	created DATE  DEFAULT CURRENT_DATE,
	book_date DATE NOT NULL,
	leave_date DATE NOT NULL
);

-- Adding new column to table for hotel;
ALTER TABLE hotel
ADD COLUMN price_id VARCHAR(255);

ALTER TABLE hotel
ADD COLUMN location VARCHAR(255);

-- Updating every hotel to have a price_id 
UPDATE hotel 
SET price_id = 'price_1NUzylCA7YJyiVj9ZDdlfLYz'
where name = 'Hotel C';

-- updating every hotel to have a location

UPDATE hotel
SET location = 'Prague, Czech Republic'
WHERE name = 'Hotel J';

-- deleting duplicate orders 

DELETE FROM hotel
WHERE name = 'The Platinum Heights Tower';

-- enter new hotel data
INSERT INTO hotel(name, price, description, image, price_id, location)
VALUES ('The Grand Celestial Palace', 10000, 'Nestled amidst lush mountains, this opulent retreat offers breathtaking views, a private helipad, an infinity pool, and personalized butler service.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/DSRhotel_cek1dz.jpg', 'price_1NV0KeCA7YJyiVj9ZETP0Sim', 'Santorini, Greece');

INSERT INTO hotel(name, price, description, image, price_id, location)
VALUES ('The Diamond Sands Resort & Spa', 7500, 'Indulge in the ultimate beachfront experience at this lavish resort, boasting private cabanas, a world-class spa, gourmet dining, and a private yacht for exploration.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/GCPhotel_kngqkf.jpg', 'price_1NV0L9CA7YJyiVj9IEo9zF3B', 'Bora Bora, French Polynesia');

INSERT INTO hotel(name, price, description, image, price_id, location)
VALUES ('The Platinum Heights Tower', 8000, 'Ascend to the epitome of urban elegance in this sleek skyscraper. Enjoy panoramic city views, a penthouse suite with a personal chef, a rooftop infinity pool, and exclusive access to a private club.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/PHThotel_cj1nmp.jpg', 'price_1NV0LiCA7YJyiVj92D2kZNIC', 'New York City, New York, USA');

INSERT INTO hotel(name, price, description, image)
VALUES ('Tranquil Haven Resort', 1500, 'Luxury resort with beautiful views', 'https://www.travelandleisure.com/thmb/4w2RgBE_R05BPheSi7OZL8EyvVg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Turtle-Bay-FAMILYBEACHRESORT0223-dd9bc741f7084665a284907b69be0331.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Azure Shores Hotel', 1100, 'Comfortable hotel near the beach', 'https://www.travelandleisure.com/thmb/WbHNF0i_b6nuQR9ZrsM_C8UJP0k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Rosewood-St-Barth-FAMILYBEACHRESORT0223-99c85d0daf7f4095887a2f224975568c.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Serenity Peaks Lodge', 8000, 'Cozy hotel in the countryside', 'https://www.travelandleisure.com/thmb/cBY5nWcdamu8ao65pmeOpZaV3Eo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Four-Seasons-Papagayo-FAMILYBEACHRESORT0223-f06050c64fe84b14a333ae4d7895092c.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Enchanted Oasis Retreat', 2000, 'Boutique hotel in the heart of the city', 'https://www.travelandleisure.com/thmb/mt16PO5vQN1yXhexiD2xoFgQZZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Martinhal-Sagres-FAMILYBEACHRESORT0223-6b730235a74945d5a62313595de2ca7e.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Radiant Sands Resort', 1200, 'Modern hotel with excellent amenities', 'https://www.travelandleisure.com/thmb/2reN9BJPaxMCwK6khpXkeC6M1aE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Banyan-Tree-Mayakoba-FAMILYBEACHRESORT0223-23e9dc31c1bd4781985eb46b8a84b8be.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Crystal Breeze Hotel', 900, 'Budget-friendly hotel near popular attractions', 'https://www.travelandleisure.com/thmb/ECvt20U3iRUAaz-nFv1rUzH7qKY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Montage-Laguna-beach-FAMILYBEACHRESORT0223-60b6c7daed1b46d58a6100c90e6603b3.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Blissful Bay Resort', 1750, 'Spacious rooms with stunning ocean views', 'https://www.travelandleisure.com/thmb/4w2RgBE_R05BPheSi7OZL8EyvVg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Turtle-Bay-FAMILYBEACHRESORT0223-dd9bc741f7084665a284907b69be0331.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Majestic Horizon Lodge', 11000, 'Family-friendly hotel with a pool', 'https://www.travelandleisure.com/thmb/xBnzpB269w7-67uPndx_A5r47q4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Eau-Palm-Beach-FAMILYBEACHRESORT0223-0e8f89e29a2d4a8d9111eed6b1917221.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Whimsical Woods Lodge', 950, 'Rustic hotel surrounded by nature', 'https://www.travelandleisure.com/thmb/e8z1yriL2dF9LgMCcoV1cPJs7Ls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Kimpton-Kitalay-FAMILYBEACHRESORT0223-d43c70d6575941cd945435af622b2bc8.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('Harmony Springs Retreat', 1300, 'Charming hotel in a historic building', 'https://www.travelandleisure.com/thmb/8X4Roh6A2KLg0DE5BZVYMqB1epY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-Oil-Nut-Bay-FAMILYBEACHRESORT0223-5bbcdb7d0c774cf199d3dcd567e8cd16.jpg');
