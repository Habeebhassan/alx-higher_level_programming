-- List number of records with same score in the table second_table
-- Record  ordered by descending
SELECT `score`, COUNT(*) AS `number`
FROM `second_table`
GROUP BY `score`
ORDER BY `number` DESC;
