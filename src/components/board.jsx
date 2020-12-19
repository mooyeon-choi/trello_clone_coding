import React, { Component } from 'react'
import AddList from './addList';
import AddCard from './addCard';
import Card from './card';
import ListSetting from './listSetting';

export default class Board extends Component {
  state = {
    checkAddCard: false,
    checkAddList: false,
    openSetting: false
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
            <section 
              className="list-name"
              onDragStart={this.handleListDragStart}
              draggable="true"
            >
              {this.props.list.name}
              <div className="list-setting" onClick={this.handleSetting}>
                <i className="fas fa-ellipsis-h"></i>
                { this.state.openSetting && <ListSetting /> }
              </div>
            </section>
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
