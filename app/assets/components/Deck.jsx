import React from 'react';
import CardStack from './CardStack';

export default React.createClass({
  render() {
    return (
      <div className="deck">
        {this.props.currentSize > 0 && (
          <CardStack values={[this.props.topCard]} stackSize={this.props.currentSize} />
        )}
      </div>
    )
  }
})