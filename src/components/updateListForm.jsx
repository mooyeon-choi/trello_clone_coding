import React, { Component } from 'react'

export default class UpdateListForm extends Component {
  render() {
    return (
      <form className="update-list-form">
        <input type="text" value={this.props.listName} className="add-list-input"/>
      </form>
    )
  }
}
