import React from 'react';
import Radium from 'radium';

import Players from './Players';
import Table from './Table';
import PageControls from './PageControls';

export default Radium(React.createClass({
  getTitle() {
    return text.title[this.props.state];
  },
  getDirections() {
    return text.directions[this.props.state];
  },
  render() {
    return (
      <div>
        {this.getTitle() && (
          <h2 style={styles.title}>{this.getTitle()}</h2>
        )}
        {this.getDirections() && (
          <p>{this.getDirections()}</p>
        )}
        {this.props.state === 'ongoing' && (
          <Table {...this.props.table} />
        )}
        <Players {...this.props.players} state={this.props.state} />
        <PageControls />          
      </div>
    );
  }
}));

const text = {
  title: {
    pregame: 'Game Setup',
    gameover: 'Game Over'
  },
  directions: {
    pregame: 'Add or remove players, you need at least two to have a fun game.'
  }
}

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "normal"
  }
}