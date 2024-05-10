@!/usr/bin/python3
""" a Python script that fetches https://alx-intranet.hbtn.io/status"""
import urlib.request


if __name__ == "__main__":
    import urllib.request as request
    with request.urlopen('https://alx-intranet.hbtn.io/status') as r:
        body = r.read()
        print('Body response:')
        print("\t- type: {}".format(type(body)))
        print("\t- content: {}".format(body))
        print("\t- utf8 content: {}".format(body.decode('utf-8')))
