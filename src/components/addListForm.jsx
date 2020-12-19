import React, { Component } from 'react'

export default class AddListForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAddList(name);
    this.formRef.current.reset();
  }

  handleCancel = () => {
    this.formRef.current.reset();
    this.props.onCancel();
  }

  render() {
    return (
      <form ref={this.formRef} className="add-list-form" onSubmit={this.onSubmit}>
      <input ref={this.inputRef} type="text" className="add-list-input" placeholder="Enter a title for this list..."/>
      <div>
        <button className="add-card-button">Add List</button>
        <button 
          className="add-card-cancel-button"
          type="button"
          onClick={this.handleCancel}
        >
          <i className="cancel-icon fas fa-times"></i>
        </button>
      </div>
    </form>
    )
  }
}
