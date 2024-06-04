#!/usr/bin/node
/**
 * A simple Node.js script to fetch data from a URL and write it to a file.
 * 
 * The script takes two arguments:
 *   1. The URL to send the request to.
 *   2. The file path to write the response body to.
 * 
 * Usage:
 *   ./script.js <url> <file_path>
 * 
 * Example:
 *   ./script.js http://example.com data.txt
 */

const request = require('request');
const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: ./script.js <url> <file_path>');
  process.exit(1);
}

// Get the URL and file path from the command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send an HTTP GET request to the specified URL
request(url, function (_err, _res, body) {
  if (_err) {
    console.error('Error:', _err);
    return;
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf8', function (err) {
    if (err) {
      console.error('Error:', err);
    }
  });
});
