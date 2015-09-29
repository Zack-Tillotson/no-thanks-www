import React from 'react';
import CardStack from '../CardStack';
import PlayerControls from './PlayerControls';

export default React.createClass({
  propTypes: {
    requestTake: React.PropTypes.func.isRequired,
    requestNoThanks: React.PropTypes.func.isRequired
  },
  getCardStack(values) {
    return <CardStack values={values} stackSize={values.length} showBottomCardValues={true} />
  },
  render() {
    const className = "player " + this.props.isCurrentPlayer ? "is-current-player" : "";
    return (
      <div className={className}>
        <span className="current-player">
          {this.props.isCurrentPlayer && (
            "*"
          )}
        </span>
        <span className="name">{this.props.name}</span>
        <span className="money">${this.props.money}</span>
        <span className="points">, {this.props.netPoints} in Cards</span>
        {this.props.stacks.map((stack) => {
          return this.getCardStack(stack);
        })}
        {this.props.isCurrentPlayer && (
          <PlayerControls requestTake={this.props.requestTake} requestNoThanks={this.props.requestNoThanks} />
        )}
      </div>
    )
  }
})