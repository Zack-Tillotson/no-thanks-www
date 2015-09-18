import React from 'react';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from './actions.js';

import Cards from 'Cards';
import Players from 'Players';

export default connect(Selector, Dispatcher)(React.createClass({
  componentWillMount() {
    this.props.addPlayer();
    this.props.addPlayer();
    this.props.addPlayer();
  },
  render() {
    return (
      <div>

        <header>
          Header!
        </header>

        <hr />

        <div className="body">
          <Cards.Component cards={this.props.cards} />
          <Players.Component players={this.props.players} />
        </div>

        <hr />

        <footer>
          Footer!
        </footer>

      </div>
    )
  }
}));