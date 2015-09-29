import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  render() {
    return (
      <div style={styles.container}>
        ${this.props.value}
      </div>
    )
  }
}));

const styles = {
  container: {
    display: 'inline-block',
    width: '25%',
    textAlign: 'center'
  }
}