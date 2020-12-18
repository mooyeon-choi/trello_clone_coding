import React, { Component } from 'react'

export default class AddCard extends Component {
  handleAdd = () => {
    this.props.onAdd();
  }
  render() {
    return (
      <div className="add-another-card">
        {this.props.checkAdd ? 
        <div>
          <button className="add-card-button">Add Card</button>
          <button className="add-cancel-button">
            <i className="cancel-icon fas fa-times"></i>
          </button>
        </div> 
        : 
        <section className="add-another-card-button" onClick={this.handleAdd}>
          <i className="add-icon fas fa-plus"></i>
          Add another card
        </section>}
      </div>
    )
  }
}
