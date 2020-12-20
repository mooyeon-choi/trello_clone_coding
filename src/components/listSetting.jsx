import React, { Component } from 'react';

class ListSetting extends Component {
  blockTransmission = event => {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDeleteList = () => {
    this.props.onDeleteList(this.props.boardId);
  }

  handleOnListDraggable = () => {
    this.props.onListDraggable();
  }

  render() {
    return (
      <div onClick={this.handleOnListDraggable}>
        <ul className="list-setting-items" onClick={this.blockTransmission}>
          <li className="list-setting-title">List Actions</li>
          <hr/>
          <li className="list-setting-item">Change List Name...</li>
          <li className="list-setting-item" onClick={this.handleDeleteList}>Delete List</li>
        </ul>
        <div className="list-setting-background"></div>
      </div>
    );
  }
}

export default ListSetting;