import React from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';

import Selector from './selector.js';
import {Dispatcher} from '../state/actions.js';

import Game from './Game';
const Page = Radium(React.createClass({
  componentWillMount() {
    
  },
  render() {
    return (
      <div style={styles.container}>

        <header style={styles.header}>
          <ul style={styles.headerLinks}>
            <li style={styles.headerLink}>
              <a style={styles.headerLinkAnchor} key="link1" href="http://www.amazon.com/Z-Man-Games-ZMG-4031-Thanks/dp/B000TQ4UU6">The Game</a>
            </li>
            <li style={styles.headerLink}>
              <a style={styles.headerLinkAnchor} key="link2" href="https://github.com/Zack-Tillotson/no-thanks">This Code</a>
            </li>
            <li style={styles.headerLink}>
              <a style={styles.headerLinkAnchor} key="link3" href="http://zacherytillotson.com">The Author</a>
            </li>
          </ul>
          <h1 style={styles.headerTitle}>No Thanks!</h1>          
        </header>

        <hr />

        <div className="body">
          <Game 
            players={this.props.players} 
            state={this.props.game.state}
            table={this.props.table} />
        </div>

        <hr />

        <footer style={styles.footer}>
          Thanks for your help testing! Let me know what you think :]
        </footer>

      </div>
    )
  }
}));

const styles = {
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    fontSize: '16px',
    fontFamily: 'sans-serif'
  },
  header: {
    textAlign: 'center'
  },
  headerTitle: {
    fontSize: '24px',
    margin: 0,
    padding: 0
  },
  headerLinks: {
    margin: '10px 0 10px 0',
    padding: 0,
  },
  headerLink: {
    fontSize: "12px",
    display: "inline-block",
    width: "33%"
  },
  headerLinkAnchor: {
    textDecoration: 'none',
    color: 'black',
    ':hover': {
      color: '#333'
    }
  },
  footer: {
    textAlign: 'center',
    color: '#666'
  }
};

export default connect(Selector, Dispatcher.ui)(Page);