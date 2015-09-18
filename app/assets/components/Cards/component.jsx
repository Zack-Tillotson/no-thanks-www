import React from 'react';
import Card from 'Card';

export default React.createClass({
  render() {
    return (
      <div>
        Cards Left: {this.props.cards.count}
        <br />
        Current Card: 
        <Card.Component value={this.props.cards.currentlyVisible} />
      </div>
    )
  }
})