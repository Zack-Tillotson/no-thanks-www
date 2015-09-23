import React from 'react';
import Player from '../Player';

export default React.createClass({
  render() {
    return (
      <div>
        The Players:
        {this.props.players.map((player) => (
          <Player.Component {...player} />
        ))}
      </div>
    )
  }
})