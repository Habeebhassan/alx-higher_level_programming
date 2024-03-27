-- Lists records in the table second_table
-- Records are ordered by descending
SELECT `score`, `name`
FROM `second_table`
WHERE `score` >= 10
ORDER BY `score` DESC;
