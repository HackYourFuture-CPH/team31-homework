-- Active: 1745267309573@@127.0.0.1@3306@hyf_lesson1

-- View the full status table for help with the assignment tasks
SELECT * FROM status;

--View the full task table for help with the assignment tasks
SELECT * FROM task;


--Assignment Task No 01: Find out how many tasks are in the task table
SELECT count(*) FROM task;

--Assignment Task N0 02: Find out how many tasks in the task table do not have a valid due date 
SELECT count(*) FROM task 
WHERE due_date IS NULL;

--Assignment Task No 03: Find all the tasks that are marked as done 
SELECT * FROM task
JOIN status ON status.id = task.status_id
WHERE status.name = 'done';

--Assignment Task No 04: Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id != 3 ;

--Assignment Task No 05: Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created DESC;

--Assignment Task No 06: Get the single most recently created task
SELECT * FROM task 
ORDER BY created DESC 
LIMIT 1;

--Assignment Task No 07: Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--Assignment Task No 08: Get the title and status (as text) of all tasks
SELECT title, status.name 
FROM task 
JOIN status ON task.status_id = status.id;

--Assignemnt Task No 09: Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.status_id) as task_count
FROM status 
JOIN task ON status.id = task.status_id
GROUP BY status.name;    

--Assignment Task No 10: Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id) as task_count
FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY task_count DESC;

