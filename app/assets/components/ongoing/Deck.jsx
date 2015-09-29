import React from 'react';
import CardStack from '../CardStack';

export default React.createClass({
  getFauxValues() {
    return [{value: this.props.topCard}];
  },
  render() {
    return (
      <div className="deck">
        {this.props.currentSize > 0 && (
          <CardStack values={this.getFauxValues()} stackSize={this.props.currentSize} />
        )}
      </div>
    )
  }
})