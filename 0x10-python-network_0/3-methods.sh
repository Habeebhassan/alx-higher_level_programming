#!/bin/bash
# A script that takes in a URL and displays all HTTP method
curl -s -I -X OPTIONS "$1" | grep "Allow:" | cut -f2- -d" "
