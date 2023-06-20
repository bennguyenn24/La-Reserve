-- create db
CREATE DATABASE hotels;

-- create new table 
DROP TABLE IF EXISTS links;

CREATE TABLE hotel (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    price decimal(12,2),
	description VARCHAR (255)
);

-- enter new data
INSERT INTO hotel(name, price, description)
VALUES ('The Grand Celestial Palace', 10000, 'Nestled amidst lush mountains, this opulent retreat offers breathtaking views, a private helipad, an infinity pool, and personalized butler service.' );

INSERT INTO hotel(name, price, description)
VALUES ('The Diamond Sands Resort & Spa', 7500, 'Indulge in the ultimate beachfront experience at this lavish resort, boasting private cabanas, a world-class spa, gourmet dining, and a private yacht for exploration.' );

INSERT INTO hotel(name, price, description)
VALUES ('The Platinum Heights Tower', 8000, 'Ascend to the epitome of urban elegance in this sleek skyscraper. Enjoy panoramic city views, a penthouse suite with a personal chef, a rooftop infinity pool, and exclusive access to a private club.' );

