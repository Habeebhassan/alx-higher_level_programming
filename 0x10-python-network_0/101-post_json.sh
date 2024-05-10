#!/bin/bash
# A script that sends a JSON POST request to a URL passed as the first arg
curl -s "$1" -d "@$2" -X POST -H "Content-Type: application/json"
