-- Active: 1746558863511@@127.0.0.1@3306@meal_sharing_app

-- Creation of DATABASE
CREATE DATABASE meal_sharing_app;

-- USING DATABASE
USE meal_sharing_app;

--Creation of TABLES
-- Table meal 
CREATE TABLE meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATETIME
);

-- Table Reservation
CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    contact_phonenumber VARCHAR(15),
    contact_name VARCHAR(100),
    contact_email VARCHAR(100),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

--Table Review
CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(150) NOT NULL,
    description TEXT,
    stars INT NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    meal_id INT NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

-- Insertion of some sample data into the meal table
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES
('Italian Pasta Night', 'A cozy dinner with fresh pasta and wine.', 'Copenhagen', '2025-06-01 18:30:00', 10, 150.00, NOW()),
('Sushi Workshop', 'Learn to make sushi with a Japanese chef.', 'Aarhus', '2025-06-05 17:00:00', 8, 200.00, NOW()),
('Vegan Brunch', 'A selection of plant-based brunch dishes.', 'Odense', '2025-06-10 10:00:00', 15, 120.00, NOW());

-- Insertion of some sample data into the reservation table
INSERT INTO reservation (number_of_guests, meal_id, contact_phonenumber, contact_name, contact_email)
VALUES
(2, 1, '1234567890', 'Alice Jensen', 'alice@example.com'),
(4, 1, '2345678901', 'Bob Nielsen', 'bob@example.com'),
(1, 2, '3456789012', 'Charlie Hansen', 'charlie@example.com'),
(3, 3, '4567890123', 'Diana Pedersen', 'diana@example.com');

-- Insertion of some sample data into the review table
INSERT INTO review (title, description, stars, meal_id)
VALUES
('Delicious and cozy', 'The pasta was amazing, and the host was friendly.', 5, 1),
('Great learning experience', 'I enjoyed making sushi myself.', 4, 2),
('Good but could be better', 'Food was nice, but service was slow.', 3, 1),
('Loved the vegan options', 'Super tasty and creative dishes.', 5, 3);

-- QUERIES on the MEAL table
-- 1. Get all meals
SELECT * 
FROM meal;

-- 2. ADD a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES
('Kacha Papeeta', 'A Famous Fruit.', 'Copenhagen', '2025-06-15 17:00:00', 12, 89.00, '2025-05-06 22:20:27');

-- 3. Get a meal with any id, fx 1
SELECT * FROM meal 
WHERE id = 1;

-- 4. Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Updated Italian Pasta Night', price = 160.00
WHERE id = 1;

-- 5. Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;

-- QUERIES on the RESERVATION table
-- 1. Get all reservations
SELECT *
FROM reservation;

-- 2. ADD a new reservation
INSERT INTO reservation (number_of_guests, meal_id, contact_phonenumber, contact_name, contact_email)
VALUES
(0, 2, '5678901234', 'Eva Sørensen', 'xyz@abc.com');

-- 3. Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- 4. Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 3, contact_name = 'NEW NAME'
WHERE id = 1;

-- 5. Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

-- QUERIES on the REVIEW table
-- 1. Get all reviews
SELECT *
FROM review;

-- 2. ADD a new review
INSERT INTO review (title, description, stars, meal_id)
VALUES
('Amazing experience', 'The food was delicious and the atmosphere was great.', 5, 2);

-- 3. Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- 4. Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 4, description = 'Updated review description.'
WHERE id = 1;

-- 5. Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- ADDITIONAL QUERIES
-- 1. Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;

-- 2. Get meals that still has available reservations
SELECT meal.*
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.max_reservations > (SELECT COUNT(*) FROM reservation WHERE meal_id = meal.id);

-- 3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE '%Rød grød%';

-- 4. Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2025-05-01' AND '2025-05-07';

-- 5. Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal  
LIMIT 5;

-- 6. Get the meals that have good reviews
SELECT meal.*
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 4;

-- 7. Get reservations for a specific meal sorted by created_date
SELECT reservation.*
FROM reservation
WHERE meal_id = 1
ORDER BY created_date DESC;

-- 8. Sort all meals by average number of stars in the reviews
SELECT meal.*, 
AVG(review.stars) AS average_stars
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_stars DESC;


