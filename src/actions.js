export function emptyBoard() {
  return [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ]
  ];
}

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

export function isDraw(board) {
  const flat = [].concat.apply([], board);
  return !flat.some(e => e === null);
}

function winningHorizontal(board, piece) {
  return board.some(arr =>
    arr.every(e => e === piece)
  );
}

function winningVertical(board, piece) {
  let res = false;

  for (let i in board) {
    if (res) break;
    res = board.every(arr =>
      arr[i] === piece
    );
  }

  return res;
}

function winningDiagonal(board, piece) {
  const seq = Array(board.length).fill('').map((e, i) => i);
  const rev = [ ...seq ].reverse();

  return seq.every((e) => {
    return board[e][e] === piece;
  }) || seq.every((e) => {
    const y = e;
    const x = rev[e];
    return board[y][x] === piece;
  });
}

export function winningPiece(board) {
  const pieces = [ 'X', 'O' ];
  let res = null;

  for (let index in pieces) {
    const piece = pieces[index];

    if (winningHorizontal(board, piece) 
     || winningVertical(board, piece)
     || winningDiagonal(board, piece)) {
      res = piece;
      break;
    }
  }

  if (!res && isDraw(board))
    res = 'D';

  return res;
}
