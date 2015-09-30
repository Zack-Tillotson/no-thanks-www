import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from '../state/actions.js'

const PlayerControls = React.createClass({
  removePlayerClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestRemovePlayer(this.props.player);
  },
  takeCardClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestTake();
  },
  noThanksClickHandler(event) {
    event.preventDefault();
    this.props.dispatchedActions.requestNoThanks();
  },
  render() {
    return (
      <div style={styles.container}>
        {this.props.game.state === 'pregame' && (
          <p style={[styles.button, styles.removePlayer]} onClick={this.removePlayerClickHandler}>-</p>
        )}
        {this.props.game.state === 'ongoing' && this.props.player.isCurrentPlayer && (
          <div style={[styles.button]} onClick={this.takeCardClickHandler}>Take</div>
        )}
        {this.props.game.state === 'ongoing' && this.props.player.isCurrentPlayer && (
          <div style={[styles.button]} onClick={this.noThanksClickHandler}>No Thanks</div>
        )}
      </div>
    )
  }
});

const styles = {
  container: {
    padding: "10px",
    display: "inline-block",
  },
  button: {
    padding: "5px 25px",
    border: "solid 1px #333",
    borderRadius: "5px",
    margin: 0,
    display: 'inline-block'
  },
  removePlayer: {
    background: "red",
    display: "inline-block"
  },
  take: {
  },
  noThanks: {
    marginLeft: '10px'
  }
}

export default connect(Selector, Dispatcher.ui)(Radium(PlayerControls));