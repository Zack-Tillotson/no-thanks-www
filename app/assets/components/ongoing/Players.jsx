import React from 'react';
import Player from './Player';

export default React.createClass({
  render() {
    return (
      <div className="player-list">
        {this.props.list.map((player, index) => (
          <Player {...player} 
            key = {player.__id__}
            isCurrentPlayer = {index === this.props.currentPlayer}
            requestTake={this.props.requestTake}
            requestNoThanks={this.props.requestNoThanks} />
        ))}
      </div>
    )
  }
});