#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    for index in list(a_dictionary.keys()):
        if a_dictionary[index] == value:
            a_dictionary.pop(index, None)
    return a_dictionary
