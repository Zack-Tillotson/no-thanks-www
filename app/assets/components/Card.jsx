import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  propTypes: {
    value: React.PropTypes.number,
    runs: React.PropTypes.bool,
    isFullCard: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      value: '',
      isFullCard: true,
      runs: false
    }
  },
  getClass() {
    return "card " + (this.props.runs ? "runs" : "");
  },
  partialCard() {
    const runs = this.props.runs ? 'runs' : 'norun';
    return (
      <span style={[styles.card, styles.partial]}>
        <span style={[styles.partialText, styles[runs]]}>{this.props.value}</span>
        ]
      </span>
    )
  },
  fullCard() {
    const runs = this.props.runs ? 'runs' : 'norun';
    return (
      <span style={[styles.card, styles.full]}>
        [
        <span style={[styles.fullText, styles[runs]]}>{this.props.value}</span>
        ]
      </span>
    )
  },
  render() {
    return this.props.isFullCard ? this.fullCard() : this.partialCard();
  }
}));

const styles = {
  card: {
    textAlign: "center",
    display: "inline-block",
    color: "#888"
  },
  full: {
    color: "#333"
  },
  fullText: {
    color: '#000',
    display: 'inline-block',
    width: '1.15em'
  },
  partial: {
    color: '#888'
  },
  partialText: {
    color: "#666"
  },
  runs: {
    background: 'rgba(130, 190, 255, 0.53)',
    textDecoration: 'underline'
  },
  noruns: {

  }
}