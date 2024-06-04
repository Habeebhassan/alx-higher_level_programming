#!/usr/bin/node
/**
 * A simple Node.js script to write content to a file.
 * 
 * The script takes two arguments: 
 *   1. The path to the file to be written to.
 *   2. The content to write to the file.
 * 
 * Usage:
 *   ./script.js <file_path> <content>
 * 
 * Example:
 *   ./script.js example.txt "Hello, world!"
 */

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: ./script.js <file_path> <content>');
  process.exit(1);
}

// Get the file path and content from the command-line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the content to the file
fs.writeFile(filePath, content, 'utf8', function (err) {
  if (err) {
    // Print error message if file write fails
    console.error(err);
  }
});
