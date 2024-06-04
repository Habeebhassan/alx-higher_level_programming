#!/usr/bin/node
/**
 * A simple Node.js script to read a file and display its content.
 * 
 * The script takes one argument, which is the path to the file to be read.
 * It reads the file content in UTF-8 encoding and prints it to the standard output.
 * 
 * Usage:
 *   ./script.js <file_path>
 * 
 * Example:
 *   ./script.js example.txt
 */

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./script.js <file_path>');
  process.exit(1);
}

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file content
fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    // Print error message if file read fails
    console.error(err);
  } else {
    // Write the file content to the standard output
    process.stdout.write(data);
  }
});
