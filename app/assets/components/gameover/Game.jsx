import React from 'react';
import Players from './Players';
import PageControls from './PageControls';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Game Over!</h2>
        <Players {...this.props.players} />
        <PageControls {...this.props.dispatchedActions} />
      </div>
    );
  }
})