#!/usr/bin/node
/**
 * A simple Node.js script to count the number of movies where a specific character appears.
 * 
 * The script takes one argument:
 *   1. The URL of the Star Wars API (SWAPI) to fetch the list of movies.
 * 
 * It fetches the movie data from the SWAPI and counts the number of movies where the character
 * with ID 18 appears, then prints the count.
 * 
 * Usage:
 *   ./script.js <swapi_url>
 * 
 * Example:
 *   ./script.js https://swapi-api.hbtn.io/api/films/
 */

const request = require('request');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./script.js <swapi_url>');
  process.exit(1);
}

// Get the SWAPI URL from the command-line arguments
const starWarsUri = process.argv[2];
let times = 0;

// Send an HTTP GET request to the specified URL
request(starWarsUri, function (_err, _res, body) {
  if (_err) {
    console.error('Error:', _err);
    return;
  }

  // Parse the response body as JSON
  body = JSON.parse(body).results;

  // Iterate through the movies
  for (let i = 0; i < body.length; ++i) {
    const characters = body[i].characters;

    // Iterate through the characters in the movie
    for (let j = 0; j < characters.length; ++j) {
      const character = characters[j];
      const characterId = character.split('/')[5];

      // Check if the character ID is 18 (Wedge Antilles)
      if (characterId === '18') {
        times += 1;
      }
    }
  }

  // Print the number of times the character appears
  console.log(times);
});
