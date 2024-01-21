// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
    // Write your code here
    for(let i=0;i<d;i++){    
        const temp_0 = a[0]
        for(let j=0;j<a.length;j++){
            a[j] = a[j+1]
        }
        a[a.length-1] = temp_0
    }
    return a
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
