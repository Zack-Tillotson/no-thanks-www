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
        {this.props.gameState === 'pregame' && (
          <div>
            <button onClick={this.addPlayerClickHandler}>Add Player</button>
            <button onClick={this.removePlayerClickHandler}>Remove Player</button>
            <button onClick={this.newGameClickHandler}>Start Game</button>
          </div>
        )}
        {this.props.gameState === 'ongoing' && (
          <div>
            <button onClick={this.takeClickHandler}>Take</button>
            <button onClick={this.noThanksClickHandler}>No Thanks!</button>
          </div>
        )}
        {this.props.gameState === 'gameover' && (
          <div>
            Game Over!
            <button onClick={this.addPlayerClickHandler}>Add Player</button>
            <button onClick={this.removePlayerClickHandler}>Remove Player</button>
            <button onClick={this.newGameClickHandler}>New Game</button>
          </div>
        )}
      </div>
    )
  }
})