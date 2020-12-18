import React, { Component } from 'react'
import AddCardForm from './addCardForm';

export default class AddCard extends Component {
  handleAdd = () => {
    this.props.onAdd();
  }
  handleAddCard = (boardId, text) => {
    this.props.onAddCard(boardId, text);
  }
  render() {
    return (
      <div className="add-another-card">
        {this.props.checkAddCard ? 
        <AddCardForm 
          onAddCard={this.handleAddCard} 
          boardId={this.props.boardId}
          onCancel={this.props.onAdd}
        />
        : 
        <section className="add-another-card-button" onClick={this.handleAdd}>
          <i className="add-icon fas fa-plus"></i>
          Add another card
        </section>}
      </div>
    )
  }
}
