import React, { Component } from 'react'
import AddList from './addList';
import AddCard from './addCard';
import Card from './card';
import ListSetting from './listSetting';
import UpdateListForm from './updateListForm';

export default class Board extends Component {
  state = {
    checkAddCard: false,
    checkAddList: false,
    openSetting: false,
    onListDraggable: true
  }

  handleDragOver = event => {
    event.preventDefault();
  }

  handleDragEnter = event => {
    this.props.onDragEnter(event);
  }

  handleDragStart = card => {
    this.props.onDragStart(card);
  }

  handleListDragStart = () => {
    this.props.onDragStart(this.props.list);
  }

  handleAdd = () => {
    const checkAddCard = !this.state.checkAddCard;
    this.setState({ checkAddCard });
  }

  handleAddCard = (boardId, text) => {
    this.props.onAddCard(boardId, text);
  }

  handleChangeCheckAddList = () => {
    const checkAddList = !this.state.checkAddList;
    this.setState({ checkAddList });
  }

  handleAddList = (name) => {
    this.props.onAddList(name);
  }

  handleSetting = () => {
    const openSetting = !this.state.openSetting;
    this.setState({ openSetting })
  }

  handleDeleteList = boardId => {
    this.props.onDeleteList(boardId);
  }

  closeListDraggable = () => {
    const onListDraggable = "false";
    this.setState({ onListDraggable });
  }

  handleOnListDraggable = () => {
    const onListDraggable = "true";
    this.setState({ onListDraggable });
  }

  handleChangeListName = () => {
    this.props.onChangeListName(this.props.list.name);
  }

  handleListNameUpdate = (boardId, name) => {
    this.props.onListNameUpdate(boardId, name);
  }

  handleCloseSetting = () => {
    const openSetting = false
    this.setState({ openSetting })
  }

  handleDeleteAllCardInList = boardId => {
    this.props.onDeleteAllCardInList(boardId);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
      >
        {this.props.list ?
          <div className="list">
            { this.props.onUpdateListName === this.props.list.name ? 
            <UpdateListForm 
              listName={this.props.list.name}
              boardId={this.props.id}
              onListNameUpdate={this.handleListNameUpdate}
              onCloseSetting={this.handleCloseSetting}
            />
            :
            <section 
              className="list-name-space"
            >
              <section 
                className="list-name"
                onDragStart={this.handleListDragStart}
                draggable={this.state.onListDraggable}
                onClick={this.handleChangeListName}
              >
                {this.props.list.name}
              </section>
              <div 
                onMouseLeave={this.handleOnListDraggable} 
                onMouseOver={this.closeListDraggable} 
                className="list-setting" 
                onClick={this.handleSetting}
              >
                <i className="fas fa-ellipsis-h"></i>
                { this.state.openSetting && 
                  <ListSetting 
                    boardId={this.props.id}
                    cards={this.props.list.cards}
                    onDeleteList={this.handleDeleteList} 
                    onListDraggable={this.handleOnListDraggable} 
                    onChangeListName={this.handleChangeListName}
                    onDeleteAllCardInList={this.handleDeleteAllCardInList}
                    onCloseSetting={this.handleCloseSetting}
                  /> 
                }
              </div>
            </section>
            }
            {this.props.list.cards.map(card => 
              <Card 
                key={card.id}
                card={card}
                beforeBoard={this.props.id}
                onDragStart={this.handleDragStart}
                draggable="true"
              />
            )}
            <AddCard 
              checkAddCard={this.state.checkAddCard} 
              onAdd={this.handleAdd}
              onAddCard={this.handleAddCard}
              boardId={this.props.id}
            />
          </div> :
          <AddList 
            onAddList={this.handleAddList}
            onChangeCheckAddList={this.handleChangeCheckAddList} 
            checkAddList={this.state.checkAddList}
          />
        }
      </div>
    )
  }
}
