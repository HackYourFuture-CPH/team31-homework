-- Active: 1746558863511@@127.0.0.1@3306@hyf_lesson1



-- HOMEWORK-PART 01: WORKING WITH TASK TABLE

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES
('New Task Added', 'I added a new task as homewrok assignment', '2025-04-27', '2025-04-28', '2025-06-01', 1, 13);

-- Change the title of a task
UPDATE task
SET title = 'Sumbmit Final Report'
WHERE id = 36;

-- Change a task due date

UPDATE task
SET due_date = '2025-04-27 00:00:00' 
WHERE id = 36;

-- Change a task status

UPDATE task
SET status_id = 2
WHERE id = 36;

-- Mark a task as complete

UPDATE task
SET status_id = 3
WHERE id = 36;

-- Delete a task

DELETE FROM task
WHERE id = 36;

-- HOMEWORK-PART 02: SCHOOL DATABASE

-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

-- Databse Creation
CREATE DATABASE my_school_db;

-- USING the database
USE my_school_db;

-- Creating Class Table as class_structure
CREATE TABLE class_structure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    begins_at DATE NOT NULL,
    ends_at  DATE NOT NULL
);

-- Creating Student Table as student_details

CREATE TABLE student_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class_structure(id) 
);


-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

-- Creating Index on student_name
CREATE INDEX sr_number_student
ON student_details(student_name);

-- Adding a new column to class_structure table using ENUM
ALTER TABLE class_structure
ADD COLUMN class_status ENUM('not-started', 'ongoing', 'finished') NOT NULL;

-- HOMEWORK-PART 03: More queries

-- USE the database hyf_lesson1
USE hyf_lesson1;

-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title, task.description, user.email 
FROM task
JOIN user ON task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks assigned to users whose name is 'Donald Duck' and the task status is 'Not Started'

SELECT task.* FROM task
JOIN user ON task.user_id = user.id
WHERE user.name = 'Donald Duck' AND task.status_id = 1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT task.* FROM task
JOIN user ON task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT MONTHNAME(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY MONTHNAME(created)
ORDER BY month ASC;






