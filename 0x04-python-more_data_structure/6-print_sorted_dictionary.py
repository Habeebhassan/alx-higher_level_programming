#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    sorted_dict = sorted(a_dictionary)
    for index in sorted_dict:
        print("{}: {}".format(index, a_dictionary[index]))
