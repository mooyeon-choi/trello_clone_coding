import React, { Component } from 'react';

class ListSetting extends Component {
  render() {
    return (
      <ul className="list-setting-items">
        <li className="list-setting-title">List Actions</li>
        <hr/>
        <li className="list-setting-item">수정하기</li>
        <li className="list-setting-item">삭제하기</li>
      </ul>
    );
  }
}

export default ListSetting;