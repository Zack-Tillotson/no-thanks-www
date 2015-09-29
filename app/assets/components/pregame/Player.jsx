import React from 'react';
import CardStack from '../CardStack';
import PlayerControls from './PlayerControls';

export default React.createClass({
  render() {
    return (
      <div className="player">
        <span className="name">{this.props.name}</span>
        <PlayerControls requestRemove={this.props.requestRemove} />
      </div>
    )
  }
})