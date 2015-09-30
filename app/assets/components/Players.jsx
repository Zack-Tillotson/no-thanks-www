import React from 'react';
import Radium from 'radium';
import Player from './Player';

export default Radium(React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <div style={styles.container}>
        {this.props.list.map((player, index) => (
          <Player {...player} 
            key = {player.__id__}
            state={this.props.state} />
        ))}
      </div>
    )
  }
}));

const styles = {
  container: {
    borderBottom: 'solid 2px black'
  }
}