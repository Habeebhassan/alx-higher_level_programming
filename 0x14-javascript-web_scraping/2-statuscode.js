#!/usr/bin/node
/**
 * A simple Node.js script to perform an HTTP GET request to a given URL.
 * 
 * The script takes one argument:
 *   1. The URL to send the request to.
 * 
 * It prints the HTTP status code of the response.
 * 
 * Usage:
 *   ./script.js <url>
 * 
 * Example:
 *   ./script.js http://example.com
 */

const request = require('request');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./script.js <url>');
  process.exit(1);
}

// Get the URL from the command-line arguments
const url = process.argv[2];

// Send an HTTP GET request to the specified URL
request(url, function (_err, res) {
  if (res) {
    // Print the response status code if a response was received
    console.log('code:', res.statusCode);
  } else {
    console.error('Error:', _err);
  }
});
