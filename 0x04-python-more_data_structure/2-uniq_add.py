#!/usr/bin/python3
def uniq_add(my_list=[]):
    sum = 0
    for index in set(my_list):
        sum += index
    return sum
