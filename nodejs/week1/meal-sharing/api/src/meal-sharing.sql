-- Databases week 3 - Homework

CREATE DATABASE mealsharing;
USE mealsharing;

-- Meals Table
CREATE TABLE meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL,
    created_date DATE
);

-- Reservations Table
CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    contact_phone_number VARCHAR(15),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);

-- Reviews Table
CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);

-- Insert Iranian meals (2025 dates)
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
('Gheymeh', 'Delicious split peas stew with meat and limoo amani', 'Tehran - Golha Restaurant', '2025-10-01 19:00:00', 20, 12.99, '2025-09-20'),
('Kabab', 'Mixed kababs with rice and grilled tomato', 'Isfahan - Naqsh-e Jahan Hall', '2025-10-02 18:30:00', 30, 20.50, '2025-09-21'),
('Zereshk Polo', 'Rice with barberries and saffron chicken', 'Shiraz - Hafez Garden', '2025-10-03 17:00:00', 25, 17.00, '2025-09-22'),
('Fesenjan', 'Chicken stew with walnut and pomegranate sauce', 'Mashhad - Imam Reza Complex', '2025-10-04 18:00:00', 15, 22.75, '2025-09-23'),
('Ash Reshteh', 'Herbal thick soup with noodles and kashk', 'Tabriz - Bagh-e Shahr', '2025-10-05 19:30:00', 40, 10.00, '2025-09-24');

-- Sample reservations
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phone_number, contact_name, contact_email) VALUES 
(3, 1, '2025-09-30', '09121234567', 'Ali Rezaei', 'ali.rezaei@example.com'),
(2, 2, '2025-09-30', '09331234567', 'Zahra Moradi', 'zahra.moradi@example.com'),
(4, 3, '2025-09-30', '09129876543', 'Mohammad Jafari', 'm.jafari@example.com'),
(1, 4, '2025-09-30', '09221234567', 'Fatemeh Gholami', 'fatemeh.gh@example.com'),
(5, 5, '2025-09-30', '09127778888', 'Hossein Barzegar', 'hossein.b@example.com');

-- Sample reviews
INSERT INTO review (title, description, meal_id, stars, created_date) VALUES 
('Bebakht Gheymeh', 'Khaterat e koodaki ro zendeh kard', 1, 5, '2025-09-25'),
('Kabab e vaghean alie', 'Khoshmazeh va por gosht!', 2, 5, '2025-09-26'),
('Zereshk polo khob bood', 'Rice mikhosht behtare bashad.', 3, 3, '2025-09-27'),
('Fesenjan gheire ghabl', 'Shirin o torsh o por loz.', 4, 4, '2025-09-28'),
('Ash reshteh be del neshast', 'Garmi o sadegi dasht.', 5, 5, '2025-09-29');