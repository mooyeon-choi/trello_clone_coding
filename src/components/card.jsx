import React, { Component } from 'react'

export default class Card extends Component {
  handleDragStart = () => {
    this.props.onDragStart(this.props.card);
  }

  handleDragOver = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="card"
        draggable={this.props.draggable}
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
      >
        {this.props.card.text}
      </div>
    )
  }
}
