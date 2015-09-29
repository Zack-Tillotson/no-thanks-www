import React from 'react';
import Player from './Player';

export default React.createClass({
  propTypes: {
    showRemove: React.PropTypes.bool,
    removePlayer: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      mode: false
    };
  },
  render() {
    return (
      <div className="player-list">
        {this.props.list.map((player, index) => (
          <Player {...player} 
            key = {player.__id__}/>
        ))}
      </div>
    )
  }
})