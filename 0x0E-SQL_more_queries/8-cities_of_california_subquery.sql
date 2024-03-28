-- listing the cities of California that can be found in database
-- listing all rows of a column
SELECT id, name FROM cities WHERE state_id = (SELECT id FROM states WHERE name = 'California') ORDER BY id ASC;
