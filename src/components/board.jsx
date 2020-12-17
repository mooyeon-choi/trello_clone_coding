import React, { Component } from 'react'
import Card from './card';

export default class Board extends Component {
  handleDragOver = event => {
    event.preventDefault();
  }

  handleDragEnter = event => {
    this.props.onDragEnter(event);
  }

  handleDragStart = card => {
    this.props.onDragStart(card);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
      >
        <div className="box">
          {this.props.cards.map(card => 
            <Card 
              key={card.id}
              card={card}
              beforeBoard={this.props.id}
              onDragStart={this.handleDragStart}
              draggable="true"
            />
          )}
        </div>
      </div>
    )
  }
}
