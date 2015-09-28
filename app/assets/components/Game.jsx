import React from 'react';
import {connect} from 'react-redux';

import Selector from './Game/selector.js';
import {Dispatcher} from '../state/actions.js';

import Table from './Table';
import Players from './Players';
import Controls from './Controls';

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
          <Controls {...this.props.dispatchedActions} gameState={this.props.game.state}/>
          <Table {...this.props.table} />
          <Players {...this.props.players} />
        </div>

        <hr />

        <footer>
          Footer!
        </footer>

      </div>
    )
  }
}));