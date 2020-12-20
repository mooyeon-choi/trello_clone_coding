import React, { Component } from 'react';

class ListSetting extends Component {
  blockTransmission = event => {
    event.stopPropagation()
  }

  handleDeleteList = () => {
    this.props.onDeleteList(this.props.boardId);
  }

  render() {
    return (
      <div>
        <ul className="list-setting-items" onClick={this.blockTransmission}>
          <li className="list-setting-title">List Actions</li>
          <hr/>
          <li className="list-setting-item">수정하기</li>
          <li className="list-setting-item" onClick={this.handleDeleteList}>삭제하기</li>
        </ul>
        <div className="list-setting-background"></div>
      </div>
    );
  }
}

export default ListSetting;