import React from 'react';
import Radium from 'radium';

import Deck from './Deck';
import Pot from './Pot';

export default Radium(React.createClass({
  render() {
    return (
      <div style={styles.container}>
        <Pot value={this.props.pot} />
        <Deck {...this.props.deck} />        
      </div>
    )
  }
}));

const styles = {
  container: {
    background: '#F9EAD3',
    fontSize: '25px',
    padding: '10px 0'
  }
};