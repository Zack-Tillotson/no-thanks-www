import React from 'react';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from '../../state/actions.js';

import {Component as Table} from '../Table';
import Players from '../Players';

export default connect(Selector, Dispatcher)(React.createClass({
  componentWillMount() {
    this.props.dispatchedActions.addPlayer();
    this.props.dispatchedActions.addPlayer();
    this.props.dispatchedActions.addPlayer();
  },
  render() {
    return (
      <div>

        <header>
          Header!
        </header>

        <hr />

        <div className="body">
          <Table {...this.props.table} />
        </div>

        <hr />

        <footer>
          Footer!
        </footer>

      </div>
    )
  }
}));