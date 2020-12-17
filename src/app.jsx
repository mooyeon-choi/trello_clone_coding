import React, { Component } from 'react';
import './app.css';
import Board from './components/board';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    boards: [
      {id:0, box: {name:"To Do", cards: [{id: 'card_1', text: 'Card 1'}]}},
      {id:1, box: {name:"Doing", cards: [{id: 'card_2', text: 'Card 2'}]}},
      {id:2, box: {name:"Done", cards: [{id: 'card_3', text: 'Card 3'}]}},
      {id:3, box: null}
    ],
    card: null,
  }

  handleDragEnter = event => {
    event.preventDefault();
    const target = event.target;
    if (target.id.length > 0 && this.state.boards[target.id].box) {
      const boards = this.state.boards;
      for (let i = 0; i < 3; i++) {
        const board = boards[i]
        const card = this.state.card
        if (board.id.toString() === target.id) {
          board.box.cards = [...board.box.cards.filter(item => item.id !== this.state.card.id), card]
        } else {
          board.box.cards = [...board.box.cards.filter(item => item.id !== this.state.card.id)]
        }
      }
      this.setState({ boards })
    }
  }

  handleDragStart = card => {
    this.setState({ card });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="flexbox">
          {this.state.boards.map(board =>
            <Board
              key={board.id}
              id={board.id}
              box={board.box}
              className="board"
              onDragEnter={this.handleDragEnter}
              onDragStart={this.handleDragStart}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
