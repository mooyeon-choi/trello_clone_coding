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

  handleChangeListName = () => {
    this.props.onChangeListName();
  }

  handleDeleteAllCardInList = () => {
    this.props.onDeleteAllCardInList(this.props.boardId);
    this.props.onCloseSetting();
  }

  render() {
    return (
      <div onClick={this.handleOnListDraggable}>
        <ul className="list-setting-items" onClick={this.blockTransmission}>
          <li className="list-setting-title">List Actions</li>
          <hr/>
          <li className="list-setting-item" onClick={this.handleChangeListName}>Change List Name...</li>
          <li className="list-setting-item" onClick={this.handleDeleteList}>Delete List</li>
          {this.props.cards.length > 0 &&
            <hr/>
          }
          {this.props.cards.length > 0 &&
            <li className="list-setting-item" onClick={this.handleDeleteAllCardInList}>Delete All Card in This List...</li>
          }
        </ul>
        <div className="list-setting-background"></div>
      </div>
    );
  }
}

export default ListSetting;