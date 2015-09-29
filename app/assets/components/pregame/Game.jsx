import React from 'react';
import Players from './Players';
import PageControls from './PageControls';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Setup</h2>
        <Players {...this.props.players} requestRemovePlayer={this.props.dispatchedActions.requestRemovePlayer} />
        <PageControls {...this.props.dispatchedActions} group='start' />          
      </div>
    );
  }
})