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
          </div> :
          <div className="add-box">
            <i className="add-icon fas fa-plus"></i>
            Add another list
          </div>
        }
      </div>
    )
  }
}
