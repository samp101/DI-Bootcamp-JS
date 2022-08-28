-- -- CREATE TABLE items (
-- -- 	name text,
-- -- 	amount integer
-- -- );

-- INSERT INTO items (name,amount)
-- VALUES 
-- 	('Small Desk', 100),
-- 	('Large Desk', 300),
-- 	('Fan', 80)

-- CREATE TABLE customers (First_name text, Last_name text)


-- INSERT INTO customers (first_name, last_name)
-- values
-- 	('Greg','Jones'),
-- 	('Sandra','Jones'),
-- 	('Scott','Scott'),
-- 	('Trevor','Green'),
-- 	('Melanie','Johnson') 

-- SELECT name,amount FROM items
-- WHERE amount > 80;

-- SELECT name,amount FROM items
-- WHERE amount <=300

SELECT first_name,last_name FROM customers
-- WHERE last_name = 'Smith'
-- WHERE last_name = 'Jones'
WHERE last_name != 'Jones'
