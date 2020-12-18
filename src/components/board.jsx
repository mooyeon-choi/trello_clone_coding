import React, { Component } from 'react'
import AddCard from './addCard';
import Card from './card';

export default class Board extends Component {
  state = {
    checkAdd: false,
  }
  handleDragOver = event => {
    event.preventDefault();
  }

  handleDragEnter = event => {
    this.props.onDragEnter(event);
  }

  handleDragStart = card => {
    this.props.onDragStart(card);
  }

  handleAdd = () => {
    const checkAdd = !this.state.checkAdd
    this.setState({ checkAdd })
  }

  handleAddCard = (boardId, text) => {
    this.props.onAddCard(boardId, text);
  }

  handleAddBox = () => {
    alert('아직 구현되지 않은 동작입니다.')
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
      >
        {this.props.box ?
          <div className="box">
            <section className="box-name">{this.props.box.name}</section>
            {this.props.box.cards.map(card => 
              <Card 
                key={card.id}
                card={card}
                beforeBoard={this.props.id}
                onDragStart={this.handleDragStart}
                draggable="true"
              />
            )}
            <AddCard 
              checkAdd={this.state.checkAdd} 
              onAdd={this.handleAdd}
              onAddCard={this.handleAddCard}
              boardId={this.props.id}
            />
          </div> :
          <div 
            className="add-box"
            onClick={this.handleAddBox}
          >
            <i className="add-icon fas fa-plus"></i>
            Add another list
          </div>
        }
      </div>
    )
  }
}
