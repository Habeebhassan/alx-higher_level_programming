#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let c = 0; c < size; c++) {
    let column = '';
    for (let r = 0; r < size; r++) column += 'X';
    console.log(column);
  }
}
