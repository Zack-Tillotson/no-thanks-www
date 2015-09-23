import React from 'react';

import {Component as Deck} from '../Deck';
import {Component as Pot} from '../Pot';

export default React.createClass({
  render() {
    return (
      <div>
        <Deck {...this.props.deck} />
        <br />
        <Pot value={this.props.pot} />
      </div>
    )
  }
})