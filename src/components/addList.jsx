import React, { Component } from 'react'
import AddListForm from './addListForm';

export default class AddList extends Component {
  handleChangeCheckAddList = () => {
    this.props.onChangeCheckAddList();
  }

  handleCancel = () => {
    this.props.onChangeCheckAddList();
  }

  handleAddList = name => {
    this.props.onAddList(name);
  }

  render() {
    return (
      <>
      {this.props.checkAddList ?
        <AddListForm onAddList={this.handleAddList} onCancel={this.handleCancel}/>
        : 
        <div className="add-list" onClick={this.handleChangeCheckAddList}>
          <i className="add-icon fas fa-plus"></i>
          Add another list
        </div>
      }
      </>
    )
  }
}
