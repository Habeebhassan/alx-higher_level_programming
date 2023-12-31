#!/usr/bin/python3
""" class Square"""


class Square:
    """ class square"""

    def __init__(self, size=0):
        """initialize square
        Args:
            size (int): size og square
        """
        if type(size) is not int:
            raise TypeError('size must be an integer')
        elif size < 0:
            raise ValueError('size must be >= 0')
        else:
            self.__size = size  #: size of the square

    def area(self):
        """returns the area.

        Returns:
            area
        """
        return self.__size**2
