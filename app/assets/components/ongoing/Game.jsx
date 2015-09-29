import React from 'react';
import Table from './Table';
import Players from './Players';

export default React.createClass({
  render() {
    return (
      <div>
        <Table {...this.props.table} />
        <Players {...this.props.players} 
          requestTake={this.props.dispatchedActions.requestTake} 
          requestNoThanks={this.props.dispatchedActions.requestNoThanks} />
      </div>
    );
  }
})