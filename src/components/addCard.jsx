import React, { Component } from 'react'
import AddCardForm from './addCardForm';

export default class AddCard extends Component {
  handleAddCard = text => {
    this.props.onAddCard(text);
  }
  render() {
    return (
      <div className="add-another-card">
        {this.props.checkAdd ? 
        <AddCardForm onAddCard={this.handleAddCard}/>
        : 
        <section className="add-another-card-button" onClick={this.handleAdd}>
          <i className="add-icon fas fa-plus"></i>
          Add another card
        </section>}
      </div>
    )
  }
}
