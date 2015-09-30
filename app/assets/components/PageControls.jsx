import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Selector from './selector';
import {Dispatcher} from '../state/actions';

import buttonStyles from './buttonStyles';

const PageControls = React.createClass({
  isValidNumberOfPlayers() {
    return this.props.players.list.length > 0;
  },
  addHumanPlayerClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestAddPlayer('human');
  },
  addAiPlayerClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestAddPlayer('ai');
  },
  newGameClickHandler(event) {
    event.preventDefault();
    if(this.isValidNumberOfPlayers()) {
      this.props.dispatchedActions.requestNewGame();
    }
  },
  resetGameClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestPlayAgain();
  },
  render() {
    const validity = this.isValidNumberOfPlayers() ? 'valid' : 'invalid';
    return (
      <div style={styles.container}>
        <div>
          {this.props.game.state === 'pregame' && (
            <div>
              <p key="add-human" 
                style={[buttonStyles, styles.addPlayer]} 
                onClick={this.addHumanPlayerClickHandler}>
                Add Human Player
              </p>
              <p key="add-ai" 
                style={[buttonStyles, styles.addPlayer]} 
                onClick={this.addAiPlayerClickHandler}>
                Add AI Player
              </p>
            </div>
          )}
          {this.props.game.state === 'pregame' && (
            <p key="start-game" 
              style={[buttonStyles, styles.startGame, styles.validity[validity]]} 
              onClick={this.newGameClickHandler}>
              Start Game
            </p>
          )}
          {this.props.game.state === 'gameover' && (
            <p key="reset-game" 
              style={[buttonStyles, styles.resetGame]} 
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
  container: {
    textAlign: 'center',
    marginTop: '10px'
  },
  addPlayer: {
    display: "inline-block",
    background: '#eee',
    margin: '10px'
  },
  startGame: {
    cursor: 'pointer',
    background: '#eee',
  },
  resetGame: {
  },
  validity: {
    valid: {
      color: 'black',
      background: "#ccc",
      fontWeight: 'bold'
    },
    invalid: {
      background: '#ccc',
      color: '#999',
      cursor: 'not-allowed',
      border: 'none'
    }
  }
}

export default connect(Selector, Dispatcher.ui)(Radium(PageControls));