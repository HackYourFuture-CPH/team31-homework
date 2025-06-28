-- Meals Table
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);


-- Reservation Table:
CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(100),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


-- Review Table
CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT CHECK (stars >= 1 AND stars <= 5),
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


-- Adding some options:
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES
('Italian Pasta Night', 'Fresh handmade pasta with a variety of sauces.', 'Copenhagen', '2025-05-20 18:30:00', 20, 85.00, CURRENT_DATE),
('Sushi Saturday', 'Assorted sushi platters prepared by a Japanese chef.', 'Aarhus', '2025-05-25 19:00:00', 15, 120.00, CURRENT_DATE),
('BBQ Feast', 'Slow-cooked ribs, burgers, and grilled veggies.', 'Odense', '2025-06-01 17:00:00', 25, 75.00, CURRENT_DATE),
('Vegan Delight', 'A full-course plant-based gourmet dinner.', 'Copenhagen', '2025-05-22 18:00:00', 18, 65.00, CURRENT_DATE),
('Greek Night', 'Moussaka, tzatziki, and fresh pita straight from the oven.', 'Roskilde', '2025-05-30 20:00:00', 30, 90.00, CURRENT_DATE);

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(4, 1, CURRENT_TIMESTAMP, '12345678', 'Anna Jensen', 'anna@example.com'),
(2, 1, CURRENT_TIMESTAMP, '87654321', 'Mads Thomsen', 'mads@example.com'),
(5, 2, CURRENT_TIMESTAMP, '11112222', 'Yuki Sato', 'yuki@example.com'),
(3, 3, CURRENT_TIMESTAMP, '33334444', 'Lars Pedersen', 'lars@example.com'),
(6, 4, CURRENT_TIMESTAMP, '55556666', 'Emma Holm', 'emma@example.com'),
(2, 5, CURRENT_TIMESTAMP, '77778888', 'Nikos Papas', 'nikos@example.com');


INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES
('Delicious and authentic', 'The pasta was perfectly cooked, and the sauces were amazing.', 1, 5, CURRENT_TIMESTAMP),
('Fresh and flavorful', 'Loved the sushi variety, especially the salmon rolls.', 2, 4, CURRENT_TIMESTAMP),
('Meat lover’s dream', 'The ribs were fall-off-the-bone good, and everything was hot and fresh.', 3, 5, CURRENT_TIMESTAMP),
('Tasty but small portions', 'The vegan dishes were great but could’ve been more filling.', 4, 3, CURRENT_TIMESTAMP),
('Great atmosphere', 'Loved the Greek music and the food brought back memories of Athens.', 5, 4, CURRENT_TIMESTAMP);

-- Required Queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT Meal.*
FROM Meal
LEFT JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY Meal.id
HAVING SUM(Reservation.number_of_guests) < Meal.max_reservations 
   OR SUM(Reservation.number_of_guests) IS NULL;

-- Get meals that partially match a title.
SELECT * FROM Meal 
WHERE Meal.title LIKE 'Italian Pasta%';

-- Get meals that has been created between two dates
SELECT * 
FROM Meal 
WHERE Meal.created_date BETWEEN '2025-01-01' AND '2025-12-31';

-- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM Meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT *
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
WHERE Review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM Reservation
WHERE Reservation.meal_id > 0
ORDER BY Reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT *
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
ORDER BY Review.stars DESC;

