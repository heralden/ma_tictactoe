import {
  copyBoard,
  placePiece,
  nextPiece,
  isGameOver,
  winningPiece
} from './actions';

function emptyBoard() {
  return [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ]
  ];
}

it('creates a new copy of the board', () => {
  const board = emptyBoard();
  const target = copyBoard(board);
  target[0][1] = 'X';
  expect(target).not.toEqual(board);
});

it('returns new board with placed piece', () => {
  const board = emptyBoard();
  const target = [
    [ null, null, null ],
    [ null, null, null ],
    [ null, 'X',  null ]
  ];
  const newBoard = placePiece(board, 'X', 2, 1);

  expect(newBoard).toEqual(target);
});

it('returns the next piece', () => {
  const firstPiece = nextPiece('X');
  const secondPiece = nextPiece('O');

  expect(firstPiece).toBe('O');
  expect(secondPiece).toBe('X');
});

it('returns whether game is over', () => {
  const undone = emptyBoard();
  const done = [
    [ 'X', 'O', 'X' ],
    [ 'O', 'X', 'O' ],
    [ 'X', 'O', 'X' ]
  ];

  const resUndone = isGameOver(undone);
  const resDone = isGameOver(done);

  expect(resUndone).toBe(false);
  expect(resDone).toBe(true);
});

it('returns the piece that won the game', () => {
  const Owins = [
    [ 'O', 'X', 'X' ],
    [ 'X', 'O', 'X' ],
    [ 'O', 'X', 'O' ] 
  ];
  const Xwins = [
    [ 'O', 'X', 'O' ],
    [ 'O', 'X', 'X' ],
    [ 'X', 'X', 'O' ]
  ];
  const Draw = [
    [ 'X', 'O', 'O' ],
    [ 'O', 'X', 'X' ],
    [ 'X', 'O', 'O' ]
  ];

  const resOwins = winningPiece(Owins);
  const resXwins = winningPiece(Xwins);
  const resDraw  = winningPiece(Draw);

  expect(resOwins).toBe('O');
  expect(resXwins).toBe('X');
  expect(resDraw).toBe('D');
});
