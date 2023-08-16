#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary:
        best_scr = list(a_dictionary.keys())[0]
        for index in a_dictionary.keys():
            if a_dictionary[index] > a_dictionary.get(best_scr):
                best_scr = index
        return best_scr
