import React, { Component } from 'react';

class AddCardForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const text = this.inputRef.current.value;
    text && this.props.onAddCard(text);
    this.formRef.current.reset();
  }
  render() {
    return (
      <form ref={this.formRef} className="add-card-form" onSubmit={this.onSubmit}>
        <textarea ref={this.inputRef} type="text" className="add-card-input" placeholder="Enter a title for this card..."/>
        <div>
          <button className="add-card-button">Add Card</button>
          <button className="add-card-cancel-button">
            <i className="cancel-icon fas fa-times"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default AddCardForm;