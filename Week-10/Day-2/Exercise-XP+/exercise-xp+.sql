-- create table students(
-- 	id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR (50) NOT NULL,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	birth_date date NOT NULL
-- )

-- INSERT INTO students(first_name,last_name,birth_date)
-- VALUES 
-- 	('Marc','Benichou', '1998/11/20'),
-- 	('Yoan','Cohen', '2010-12-03'),
-- 	('Lea', 'Benichou', '1987-07-27'),
-- 	('Amelia','Dux', '1996-04-07'),
-- 	('David','Grez', '2003-06-14'),
-- 	('Omer','Simpson','1980-10-03')

-- INSERT INTO students(first_name,last_name,birth_date)
-- values ('Shmuel','Posner','1993-09-13')

-- SELECT last_name,first_name,birth_date FROM students;
-- SELECT last_name,first_name FROM students;
-- SELECT last_name, first_name FROM students
-- WHERE last_name ='Benichou' and first_name ='Marc';
SELECT id, last_name, first_name, birth_date FROM students
-- WHERE first_name LIKE '%a%';
-- WHERE first_name LIKE 'a%';
-- WHERE first_name LIKE '%a';
-- WHERE first_name LIKE '%a_';
-- where id in (10, 13)
-- where birth_date >= '2000-01-01'


-- delete from students
