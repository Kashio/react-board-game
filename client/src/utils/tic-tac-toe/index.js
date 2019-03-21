export function isGameOver(board, row, column) {
    let win = true;
    // Check horizontal (we support any NxN board)
    for (let i = 0; i < board.length; i++) {
        if (board[row][column] !== board[row][i]) {
            win = false;
            break;
        }
    }
    if (win) {
        return true;
    }
    win = true;
    // Check vertically (we support any NxN board)
    for (let i = 0; i < board.length; i++) {
        if (board[row][column] !== board[i][column]) {
            win = false;
            break;
        }
    }
    if (win) {
        return true;
    }
    // Check diagonally (we support any NxN board)
    if (row === column) {
        win = true;
        for (let i = 0; i < board.length; i++) {
            if (board[row][column] !== board[i][i]) {
                win = false;
                break;
            }
        }
        if (win) {
            return true;
        }
    }
    // Check anti-diagonally (we support any NxN board)
    if (row + column === board.length - 1) {
        win = true;
        for (let i = 0; i < board.length; i++) {
            if (board[row][column] !== board[i][(board.length - 1) - i]) {
                win = false;
                break;
            }
        }
        if (win) {
            return true;
        }
    }
    return win;
}

export function isDraw(board, turn) {
    return turn === Math.pow(board.length, 2) - 1;
}