export function copyBoard(board) {
  return board.map((arr) => arr.slice());
}

export function placePiece(board, piece, y, x) {
  let newBoard = copyBoard(board);
  newBoard[y][x] = piece;
  return newBoard;
}

export function nextPiece(piece) {
  return piece === 'X' ? 'O' : 'X';
}

export function isGameOver(board) {
  const flat = [].concat.apply([], board);
  return !flat.some(e => e === null);
}

export function winningPiece(board) {
  // shorthands
  // - an entire subarray has the same non-null elements = horizontal
  // - the same index of all subarray have the same non-null elements = vertical
  // - check manually for same pieces in either 0,0 1,1 2,2 or 0,2 1,1 2,0 = diagonal
}
