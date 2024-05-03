#!/usr/bin/python3

"""
    This script fetches and displays a list of all states stored in the 'hbtn_0e_0_usa' database.
    It requires the user to provide their username, password, and database name as command-line arguments. this create a new database for the user.
"""

import sys
import MySQLdb

if __name__ == '__main__':
    # Establishing a connection to the database using the provided username, password, and database name
    db_username = sys.argv[1]
    db_password = sys.argv[2]
    db_name = sys.argv[3]
    
    db_connection = MySQLdb.connect(
        user=db_username,
        passwd=db_password,
        db=db_name,
        host='localhost',
        port=3306
    )

    # Creating a cursor object to interact with the database
    cursor = db_connection.cursor()

    # Executing a query to fetch all states from the 'states' table, ordered by their ID in ascending order
    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    # Fetching all the data returned by the query
    states_data = cursor.fetchall()

    # Displaying each row of the fetched data, representing a state
    for state_row in states_data:
        print(state_row)

    # Closing the cursor and database connection
    cursor.close()
    db_connection.close()
