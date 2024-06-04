#!/usr/bin/node
/**
 * A simple Node.js script to fetch and display the number of completed tasks by user.
 * 
 * The script takes one argument:
 *   1. The URL to send the request to (expected to be a JSON placeholder for tasks).
 * 
 * It fetches the task data from the provided URL and counts the number of completed tasks
 * for each user, then prints the result.
 * 
 * Usage:
 *   ./script.js <url>
 * 
 * Example:
 *   ./script.js https://jsonplaceholder.typicode.com/todos
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
request(url, function (err, _res, body) {
  if (err) {
    console.error(err);
    return;
  }

  const completedTasksByUsers = {};
  body = JSON.parse(body);

  // Iterate through the list of tasks
  for (let i = 0; i < body.length; ++i) {
    const userId = body[i].userId;
    const completed = body[i].completed;

    // Initialize the user's task count if not already done
    if (completed && !completedTasksByUsers[userId]) {
      completedTasksByUsers[userId] = 0;
    }

    // Increment the task count for the user if the task is completed
    if (completed) {
      ++completedTasksByUsers[userId];
    }
  }

  // Print the result
  console.log(completedTasksByUsers);
});
