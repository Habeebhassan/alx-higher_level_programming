#!/usr/bin/node
/**
 * A simple Node.js script to fetch and display the title of a Star Wars movie.
 * 
 * The script takes one argument:
 *   1. The movie ID from the Star Wars API (SWAPI).
 * 
 * It fetches the movie data from the SWAPI and prints the movie title.
 * 
 * Usage:
 *   ./script.js <movie_id>
 * 
 * Example:
 *   ./script.js 1
 */

const request = require('request');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./script.js <movie_id>');
  process.exit(1);
}

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the URL for the SWAPI request
const starWarsUri = 'https://swapi-api.hbtn.io/api/films/'.concat(movieId);

// Send an HTTP GET request to the specified URL
request(starWarsUri, function (_err, _res, body) {
  if (_err) {
    console.error('Error:', _err);
    return;
  }

  // Parse the response body as JSON
  body = JSON.parse(body);

  // Print the movie title
  console.log(body.title);
});
