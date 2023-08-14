#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        counter = 0
        for elem in row:
            counter += 1
            print('{:d}'.format(elem), end=(" " if counter < len(row) else ""))
        print()
