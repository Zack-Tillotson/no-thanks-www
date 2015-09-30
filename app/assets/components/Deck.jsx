import React from 'react';
import Radium from 'radium';
import CardStack from './CardStack';

export default Radium(React.createClass({
  getCardStack(values) {
    return <CardStack values={values} stackSize={values.length} showBottomCardValues={true} />
  },
  getFauxValues() {
    return [{value: this.props.topCard}];
  },
  render() {
    return (
      <div style={styles.container}>
        {this.props.currentSize > 0 && (
          <CardStack values={this.getFauxValues()} stackSize={this.props.currentSize} />
        )}
      </div>
    )
  }
}));

const styles = {
  container: {
    float: 'right',
    marginRight: '10px'
  }
}