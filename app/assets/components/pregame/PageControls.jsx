import React from 'react';

export default React.createClass({
  addPlayerClickHandler(event) {
    event.preventDefault();
    this.props.requestAddPlayer();
  },
  newGameClickHandler(event) {
    event.preventDefault();
    this.props.requestNewGame();
  },
  render() {
    return (
      <div>
        <div>
          <button onClick={this.addPlayerClickHandler}>+</button>
          <button onClick={this.newGameClickHandler}>Start Game</button>
        </div>
      </div>
    )
  }
})