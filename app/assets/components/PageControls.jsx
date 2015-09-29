import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from '../state/actions.js'

const PageControls = React.createClass({
  addPlayerClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestAddPlayer();
  },
  newGameClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestNewGame();
  },
  resetGameClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestPlayAgain();
  },
  render() {
    return (
      <div>
        <div>
          {this.props.game.state === 'pregame' && (
            <p key="add-player" 
              style={[styles.button, styles.addPlayer]} 
              onClick={this.addPlayerClickHandler}>
              +
            </p>
          )}
          {this.props.game.state === 'pregame' && (
            <p key="start-game" 
              style={[styles.button, styles.startGame]} 
              onClick={this.newGameClickHandler}>
              Start Game
            </p>
          )}
          {this.props.game.state === 'gameover' && (
            <p key="reset-game" 
              style={[styles.button, styles.resetGame]} 
              onClick={this.resetGameClickHandler}>
              Play Again
            </p>
          )}
        </div>
      </div>
    )
  }
});

const styles = {
  add: {
    padding: "10px",
    background: "green"
  },
  button: {
    padding: "5px 25px",
    border: "solid 1px #333",
    borderRadius: "5px"
  },
  addPlayer: {
    background: "#C4FFC4",
    display: "inline-block"
  },
  startGame: {
    background: "#bbb"
  },
  resetGame: {

  }
}

export default connect(Selector, Dispatcher.ui)(Radium(PageControls));