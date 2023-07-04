-- create db
CREATE DATABASE hotels;

-- create new table 
DROP TABLE IF EXISTS links;

CREATE TABLE hotel (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    price DECIMAL(12,2),
	description VARCHAR(255),
	image VARCHAR(255) NOT NULL
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



-- enter new hotel data
INSERT INTO hotel(name, price, description, image)
VALUES ('The Grand Celestial Palace', 10000, 'Nestled amidst lush mountains, this opulent retreat offers breathtaking views, a private helipad, an infinity pool, and personalized butler service.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/DSRhotel_cek1dz.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('The Diamond Sands Resort & Spa', 7500, 'Indulge in the ultimate beachfront experience at this lavish resort, boasting private cabanas, a world-class spa, gourmet dining, and a private yacht for exploration.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/GCPhotel_kngqkf.jpg');

INSERT INTO hotel(name, price, description, image)
VALUES ('The Platinum Heights Tower', 8000, 'Ascend to the epitome of urban elegance in this sleek skyscraper. Enjoy panoramic city views, a penthouse suite with a personal chef, a rooftop infinity pool, and exclusive access to a private club.', 'https://res.cloudinary.com/dlahkgxj7/image/upload/v1687994392/PHThotel_cj1nmp.jpg');

