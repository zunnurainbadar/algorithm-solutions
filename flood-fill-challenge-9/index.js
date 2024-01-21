/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const oldColor = image[sr][sc];

  if (oldColor === color) {
    return image;
  }

  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || image[row][col] !== oldColor) {
      return;
    }

    image[row][col] = color;

    dfs(row - 1, col); // Top
    dfs(row + 1, col); // Bottom
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  };

  dfs(sr, sc);

  return image;  
};

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

const sr = 1;
const sc = 1;
const newColor = 2;

console.log(floodFill(image, sr, sc, newColor));


// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.
