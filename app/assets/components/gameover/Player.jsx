import React from 'react';
import CardStack from '../CardStack';

export default React.createClass({
  getCardStack(values) {
    return <CardStack values={values} stackSize={values.length} showBottomCardValues={true} />
  },
  render() {
    const className = "player";
    return (
      <div className={className}>
        <span className="name">{this.props.name}</span>
        <span className="money">${this.props.money}</span>
        <span className="points">, {this.props.netPoints} in Cards</span>
        {this.props.stacks.map((stack) => {
          return this.getCardStack(stack);
        })}
      </div>
    )
  }
})