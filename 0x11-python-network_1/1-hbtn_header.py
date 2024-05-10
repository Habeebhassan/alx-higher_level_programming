@!/usr/bin/python3
"""  a Python script that takes in a URL, sends a request to the URL and displays the value of the X-Request-Id"""

import urllib.request
import sys

# Check if a URL is provided as a command-line argument
if len(sys.argv) != 2:
    print("Usage: python script.py <URL>")
    sys.exit(1)

url = sys.argv[1]

try:
    # Send a request to the URL
    with urllib.request.urlopen(url) as response:
        # Get the value of the X-Request-Id variable from the response headers
        request_id = response.headers.get('X-Request-Id')
        if request_id:
            print("X-Request-Id:", request_id)
        else:
            print("X-Request-Id header not found in the response.")
except urllib.error.URLError as e:
    print("Error occurred while fetching the URL:", e)
