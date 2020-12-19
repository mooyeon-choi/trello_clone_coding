import React, { Component } from 'react';
import './app.css';
import Board from './components/board';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    boards: [
      {id:"0", list: {name:"To Do", type: "list", cards: [{id: 'card_1', type: "card", text: 'React 공부'}]}},
      {id:"1", list: {name:"Doing", type: "list", cards: [{id: 'card_2', type: "card", text: 'JavaScript 공부'}]}},
      {id:"2", list: {name:"Done", type: "list", cards: [{id: 'card_3', type: "card", text: '아침 운동'}]}},
      {id:"3", list: null}
    ],
    item: null,
  }

  handleDragEnter = event => {
    event.preventDefault();
    const target = event.target;
    if (target.id.length > 0 && this.state.boards.find(item => item.id === target.id).list) {
      const boards = this.state.boards;
      if (this.state.item.type === "card") {
        for (let i = 0; i < 3; i++) {
          const board = boards[i]
          const card = this.state.item
          if (board.id.toString() === target.id) {
            board.list.cards = [...board.list.cards.filter(item => item.id !== card.id), card]
          } else {
            board.list.cards = [...board.list.cards.filter(item => item.id !== card.id)]
          }
        }
        this.setState({ boards })
      } else if (this.state.item.type === "list") {
        const lists = [];
        const list = this.state.item;
        boards.forEach(board => {
          board.list !== list && lists.push(board.list);
        });
        let index = 0;
        boards.forEach(board => {
          if (board.id !== target.id) {
            board.list = lists[index];
            index++;
          } else {
            board.list = list;
          }
        });
        this.setState({ boards })
      }
    }
  }

  handleDragStart = item => {
    console.log(item)
    this.setState({ item });
  }

  handleAddCard = (boardId, text) => {
    const boards = this.state.boards;
    boards.find(item => item.id === boardId).list.cards = [...boards.find(item => item.id === boardId).list.cards, { id: Date.now(), type: "card", text }]
    this.setState({ boards })
  }

  handleAddList = name => {
    const before = this.state.boards;
    const boards = [...before.slice(0, before.length - 1), {id: Date.now(), type: "card", list: { name , cards: []}}, before[before.length - 1]]
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
              board={board}
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
