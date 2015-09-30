import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Selector from './selector';
import {Dispatcher} from '../state/actions';

import buttonStyles from './buttonStyles';

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
      <div style={[styles.container, styles[this.props.game.state]]}>
        {this.props.game.state === 'pregame' && (
          <p style={[buttonStyles, styles.removePlayer]} onClick={this.removePlayerClickHandler}>Remove</p>
        )}
        {this.props.game.state === 'ongoing' && this.props.player.isCurrentPlayer && (
          <div style={styles.ongoing}>
            <div key={this.props.player.__id__ + 'take'} 
              style={[buttonStyles, styles.take]} 
              onClick={this.takeCardClickHandler}>
              Take
            </div>
            <div key={this.props.player.__id__ + 'no'} 
              style={[buttonStyles, styles.noThanks]} 
              onClick={this.noThanksClickHandler}>
              No Thanks
            </div>
          </div>
        )}
      </div>
    )
  }
});

const styles = {
  container: {
    padding: "10px",
  },
  removePlayer: {
    background: "red",
    display: "inline-block",
    color: 'white'
  },
  take: {
    background: '#eee',
  },
  noThanks: {
    margin: '0 0 0 10px',
    background: '#eee',
  },
  pregame: {
    display: "inline-block"
  },
  ongoing: {
    textAlign: 'center'
  }
}

export default connect(Selector, Dispatcher.ui)(Radium(PlayerControls));