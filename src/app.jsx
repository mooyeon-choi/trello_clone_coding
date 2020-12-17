import React, { Component } from 'react';
import './app.css';
import Board from './components/board';
import DeleteBoard from './components/deleteBoard';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    boards: [
      {id:0, name:"todo", cards: [{id: 'card_1', text: 'Card 1'}]}, 
      {id:1, name:"ongoing", cards: [{id: 'card_2', text: 'Card 2'}]},
      {id:2, name:"done", cards: [{id: 'card_3', text: 'Card 3'}]}
    ],
    card: null,
    beforeBoard: null
  }

  handleDragEnter = event => {
    event.preventDefault();
    const target = event.target;
    if (target.id.length > 0) {
      const boards = this.state.boards;
      for (let i = 0; i < 3; i++) {
        const board = boards[i]
        const card = this.state.card
        if (board.id.toString() === target.id) {
          board.cards = [...board.cards.filter(item => item.id !== this.state.card.id), card]
        } else {
          board.cards = [...board.cards.filter(item => item.id !== this.state.card.id)]
        }
      }
      this.setState({ boards })
    }
  }

  handleAdd = text => {
    console.log('add')
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
              cards={board.cards}
              className="board"
              onDragEnter={this.handleDragEnter}
              onDragStart={this.handleDragStart}
            />
          )}
        </div>
        <div className="flexbox-delete">
          <DeleteBoard />
        </div>
      </div>
    );
  }
}

export default App;
