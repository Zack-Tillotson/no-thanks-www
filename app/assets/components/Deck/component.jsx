import React from 'react';
import {Component as Cards} from '../Cards';

export default React.createClass({
  render() {
    return (
      <div>
        <Cards cards={this.props.cards} />
        <br />
        {this.props.currentSize} / {this.props.originalSize} Cards Left
      </div>
    )
  }
})