import React from 'react';
import {connect} from 'react-redux';

import Selector from './selector.js';
import {Dispatcher} from '../../state/actions.js';

import {Component as Table} from '../Table';
import {Component as Players} from '../Players';
import {Component as Controls} from '../Controls';

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
          <Table {...this.props.table} />
          <Players players={this.props.players} />
          <Controls {...this.props.dispatchedActions}/>
        </div>

        <hr />

        <footer>
          Footer!
        </footer>

      </div>
    )
  }
}));