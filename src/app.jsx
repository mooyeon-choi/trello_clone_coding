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
    clickFrame: null,
    updateListName: null,
  }

  handleDragEnter = event => {
    event.preventDefault();
    const target = event.target;
    console.log(target.id.length)
    if (target.id.length > 0) if (this.state.boards.find(item => item.id === target.id).list) {
      const boards = this.state.boards;
      if (this.state.item.type === "card") {
        for (let i = 0; i < boards.length - 1; i++) {
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
        for (let i = 0; i < boards.length - 1; i ++) {
          boards[i].list !== list && lists.push(boards[i].list);
        }
        let index = 0;
        for (let i = 0; i < boards.length - 1; i ++) {
          if (boards[i].id !== target.id) {
            boards[i].list = lists[index];
            index++;
          } else {
            boards[i].list = list;
          }
        }
      }
      this.setState({ boards })
    }
  }

  handleDragStart = item => {
    console.log(item)
    this.setState({ item });
  }

  handleAddCard = (boardId, text) => {
    const boards = this.state.boards;
    boards.find(item => item.id === boardId).list.cards = [...boards.find(item => item.id === boardId).list.cards, { id: Date.now().toString(), type: "card", text }]
    this.setState({ boards })
  }

  handleAddList = name => {
    const before = this.state.boards;
    const boards = [...before.slice(0, before.length - 1), {id: Date.now().toString(), list: { name, type: "list", cards: []}}, before[before.length - 1]]
    console.log(boards)
    this.setState({ boards })
  }

  handleDeleteList = boardId => {
    const boards = this.state.boards.filter(item => item.id !== boardId);
    this.setState({ boards })
  }

  checkClickFrame = event => {
    if (event.target.className !== "add-list-input" && event.target.className !== "list-name") {
      this.setState({ onUpdateListName: null })
    } 
    console.log(event.target.className)
  }

  handleChangeListName = listName => {
    const onUpdateListName = listName;
    console.log(listName)
    this.setState({ onUpdateListName })
  }

  render() {
    return (
      <div onClick={this.checkClickFrame}>
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
              onDeleteList={this.handleDeleteList}
              onClickFrame={this.checkClickFrame}
              onUpdateListName={this.state.onUpdateListName}
              onChangeListName={this.handleChangeListName}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
