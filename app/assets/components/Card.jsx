import React from 'react';

export default React.createClass({
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
    return (
      <span className={"partial " + this.getClass()}>
        {this.props.value}]
      </span>
    )
  },
  fullCard() {
    return (
      <span className={"full " + this.getClass()}>
        [{this.props.value}]
      </span>
    )
  },
  render() {
    return this.props.isFullCard ? this.fullCard() : this.partialCard();
  }
})