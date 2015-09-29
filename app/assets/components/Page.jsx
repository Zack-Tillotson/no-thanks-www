import React from 'react';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from '../state/actions.js';

import Pregame from './pregame/Game';
import OngoingGame from './ongoing/Game';
import GameOver from './gameover/Game';

export default connect(Selector, Dispatcher.ui)(React.createClass({
  componentWillMount() {
    
  },
  render() {
    return (
      <div>

        <header>
          Header!
        </header>

        <hr />

        <div className="body">
          {this.props.game.state === 'pregame' && (
            <Pregame dispatchedActions={this.props.dispatchedActions} players={this.props.players}/>
          )}
          {this.props.game.state === 'ongoing' && (
            <OngoingGame dispatchedActions={this.props.dispatchedActions} players={this.props.players} table={this.props.table} />
          )}
          {this.props.game.state === 'gameover' && (
            <GameOver dispatchedActions={this.props.dispatchedActions} players={this.props.players} winner={this.props.players.winner} />
          )}
        </div>

        <hr />

        <footer>
          Footer!
        </footer>

      </div>
    )
  }
}));