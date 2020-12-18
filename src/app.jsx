import React, { Component } from 'react';
import './app.css';
import Board from './components/board';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    boards: [
      {id:"0", list: {name:"To Do", cards: [{id: 'card_1', text: 'React 공부'}]}},
      {id:"1", list: {name:"Doing", cards: [{id: 'card_2', text: 'JavaScript 공부'}]}},
      {id:"2", list: {name:"Done", cards: [{id: 'card_3', text: '아침 운동'}]}},
      {id:"3", list: null}
    ],
    card: null,
  }

  handleDragEnter = event => {
    event.preventDefault();
    const target = event.target;
    if (target.id.length > 0 && this.state.boards.find(item => item.id === target.id).list) {
      const boards = this.state.boards;
      for (let i = 0; i < 3; i++) {
        const board = boards[i]
        const card = this.state.card
        if (board.id.toString() === target.id) {
          board.list.cards = [...board.list.cards.filter(item => item.id !== this.state.card.id), card]
        } else {
          board.list.cards = [...board.list.cards.filter(item => item.id !== this.state.card.id)]
        }
      }
      this.setState({ boards })
    }
  }

  handleDragStart = card => {
    this.setState({ card });
  }

  handleAddCard = (boardId, text) => {
    const boards = this.state.boards;
    boards.find(item => item.id === boardId).list.cards = [...boards.find(item => item.id === boardId).list.cards, { id: Date.now(), text }]
    this.setState({ boards })
  }

  handleAddList = name => {
    const before = this.state.boards;
    const boards = [...before.slice(0, before.length - 1), {id: Date.now(), list: { name , cards: []}}, before[before.length - 1]]
    this.setState({ boards })
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
              list={board.list}
              className="board"
              onDragEnter={this.handleDragEnter}
              onDragStart={this.handleDragStart}
              onAddCard={this.handleAddCard}
              onAddList={this.handleAddList}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
