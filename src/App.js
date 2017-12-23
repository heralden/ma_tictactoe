import React, { Component } from 'react';
import './App.css';
import Game from './Game';

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

  handleClickCell = (e) => {
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
