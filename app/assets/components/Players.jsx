import React from 'react';
import Player from './Player';

export default React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <div className="player-list">
        {this.props.list.map((player, index) => (
          <Player {...player} 
            key = {player.__id__}
            state={this.props.state} />
        ))}
      </div>
    )
  }
})