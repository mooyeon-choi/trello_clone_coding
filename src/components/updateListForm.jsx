import React, { Component } from 'react'

export default class UpdateListForm extends Component {
  state = {
    value: this.props.listName
  }

  handleValueChange = event => {
    this.setState({ value: event.target.value });
  }

  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onListNameUpdate(this.props.boardId, name);
    this.props.onCloseSetting();
  }

  render() {
    return (
      <form className="update-list-form" ref={this.formRef} onSubmit={this.onSubmit}>
        <input 
          className="add-list-input"
          ref={this.inputRef} 
          type="text" 
          value={this.state.value} 
          onChange={this.handleValueChange}
        />
      </form>
    )
  }
}
