import React from 'react';
import CardStack from './CardStack';

export default React.createClass({

  // Sort and arrange in runs
  // eg [3,30,15,4,31] => [[3,4],[15],[30,31]]
  getCardStacks() {
    const stackArray = [];

    this.props.cards
      .sort((a,b) => a - b)
      .forEach((value) => {
        if(!stackArray.length) {
          stackArray.push([value]);
        } else {
          const lastStack = stackArray[stackArray.length - 1];
          if(lastStack[lastStack.length - 1] === value - 1) {
            lastStack.push(value);
          } else {
            stackArray.push([value]);
          }
        }
      });

    return stackArray.map((stack) => stack.map((value) => {
      return {value}
    }));
  },
  getCardStack(values) {
    return <CardStack values={values} stackSize={values.length} showBottomCardValues={true} />
  },
  getTotalPoints() {
    return this.getCardStacks().reduce((sum, stack) => sum + stack[0].value, 0);
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
        <span className="points">, {this.getTotalPoints()} in Cards</span>
        {this.getCardStacks().map((stack) => {
          return this.getCardStack(stack);
        })}
      </div>
    )
  }
})