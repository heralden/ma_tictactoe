import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import {
  placePiece,
  nextPiece
} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [ null, null, null ],
        [ null, null, null ],
        [ null, null, null ]
      ],
      piece: 'X'
    };
  }

  handleClickCell = (y, x) => {
    this.setState((prevState) => ({
      board: placePiece(
        prevState.board,
        prevState.piece,
        y, x),
      piece: nextPiece(
        prevState.piece)
    }));
  }

  render() {
    return (
      <div className="App">
        <Game
          onClickCell={this.handleClickCell}
          board={this.state.board}
        />
      </div>
    );
  }
}

export default App;
