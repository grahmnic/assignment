// Let's read in the file into a 2d-array, parsing 
// each string element as an integer.
const fs = require('fs');
let triangle = fs.readFileSync(process.argv[2]).toString().split('\r\n').map(line => line.trim().split(' ').map(num => parseInt(num, 10)));

// Go from the bottom to the top, reading each element once for O(n)
for(let row = triangle.length - 2; row >= 0; row--) {
    // Calculate adjacent below by adding on the maximum of either branch
    for(let col = 0; col < triangle[row].length; col++) {
        triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
    }
}

// Print the top result (aggregate from the maximum path)
console.log(triangle[0][0]);