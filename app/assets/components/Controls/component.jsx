import React from 'react';

export default React.createClass({
  newGameClickHandler(event) {
    event.preventDefault();
    this.props.requestNewGame();
  },
  addPlayerClickHandler(event) {
    event.preventDefault();
    this.props.requestAddPlayer();
  },
  removePlayerClickHandler(event) {
    event.preventDefault();
    this.props.requestRemovePlayer();
  },
  startGameClickHandler(event) {
    event.preventDefault();
    this.props.requestStartGame();
  },
  takeClickHandler(event) {
    event.preventDefault();
    this.props.requestTake();
  },
  noThanksClickHandler(event) {
    event.preventDefault();
    this.props.requestNoThanks();
  },
  render() {
    return (
      <div>
        <button onClick={this.newGameClickHandler}>New Game</button>
        <button onClick={this.addPlayerClickHandler}>Add Player</button>
        <button onClick={this.removePlayerClickHandler}>Remove Player</button>
        <button onClick={this.startGameClickHandler}>Start Game</button>
        <button onClick={this.takeClickHandler}>Take</button>
        <button onClick={this.noThanksClickHandler}>No Thanks!</button>
      </div>
    )
  }
})