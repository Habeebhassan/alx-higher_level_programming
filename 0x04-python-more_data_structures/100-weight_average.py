#!/usr/bin/python3
def weight_average(my_list=[]):
    num = 0
    den = 0
    if my_list:
        for index in range(len(my_list)):
            num += my_list[index][0] * my_list[index][1]
            den += my_list[index][1]
        average = num / den
        return average
    else:
        return 0
