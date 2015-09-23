import React from 'react';
import {Component as Card} from '../Card';

export default React.createClass({
  render() {
    return (
      <div>
        Cards Seen: {this.props.cards ? this.props.cards.length : 0}
        <br />
        Current Card: 
        <Card value={this.props.cards ? this.props.cards[0] : 0} />
      </div>
    )
  }
})