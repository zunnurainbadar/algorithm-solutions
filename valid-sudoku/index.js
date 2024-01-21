/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (!checkDuplicateInRows(board, row) || !checkDuplicateInCols(board, col)  || !notInBox(board, row - row % 3, col - col % 3)) {
                return false
            }
        }
    }
    return true
};
const checkDuplicateInRows = function (arr, row) {
    const st = new Set();
    for (let i = 0; i < 9; i++) {
        if (st.has(arr[row][i]) && arr[row][i] !== '.') {
            return false
        } else if (arr[row][i] !== '.') {
            st.add(arr[row][i])
        }

    }
    return true
}
const checkDuplicateInCols = function (arr, col) {
    const st = new Set();
    for (let i = 0; i < 9; i++) {
        if (st.has(arr[i][col]) && arr[i][col] !== '.') {
            return false
        } else if (arr[i][col] !== '.') {
            st.add(arr[i][col])
        }

    }
    return true
}
function notInBox(arr, startRow, startCol) {
    let st = new Set();
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let curr = arr[row + startRow][col + startCol];
            if (st.has(curr) && curr !== '.') {
                return false;
            }
            if (curr !== '.') {
                st.add(curr);
            }
        }
    }
    return true;
}
board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log("isValidSudoku(board)", isValidSudoku(board))