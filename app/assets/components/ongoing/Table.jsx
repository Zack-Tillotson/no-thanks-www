import React from 'react';

import Deck from './Deck';
import Pot from './Pot';

export default React.createClass({
  render() {
    return (
      <div>
        <Pot value={this.props.pot} />
        <Deck {...this.props.deck} />        
      </div>
    )
  }
})