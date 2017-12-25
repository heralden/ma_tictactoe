import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import {
  emptyBoard,
  placePiece,
  nextPiece,
  winningPiece
} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: emptyBoard(),
      piece: 'X',
      gameOver: '',
      lock: false
    };
  }

  gameOverMsg = (result) => {
    let msg;
    if (result === 'D')
      msg = "Draw";
    else
      msg = result.concat(" won!");

    setTimeout(() => { 

      this.setState({
        gameOver: msg
      });

      setTimeout(() => {

        this.setState({
          board: emptyBoard(),
          piece: 'X',
          gameOver: '',
          lock: false
        });

      }, 2000);

    }, 1000);
  }

  handleClickCell = (y, x) => {
    if (this.state.lock)
      return;

    if (this.state.board[y][x] !== null)
      return;

    this.setState((prevState) => {

      const obj = {
        board: placePiece(
          prevState.board,
          prevState.piece,
          y, x
        ),
        piece: nextPiece(
          prevState.piece
        )
      };

      const result = winningPiece(obj.board);
      if (result) {
        this.gameOverMsg(result);
        obj.lock = true;
      }

      return obj;
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.gameOver.length ? (
          <p className="placeholder-text">
            {this.state.gameOver}
          </p>
        ) : (
          <Game
            onClickCell={this.handleClickCell}
            board={this.state.board}
          />
        )}
      </div>
    );
  }
}

export default App;
