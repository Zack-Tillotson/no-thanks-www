import React from 'react';

export default React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    isFullCard: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      value: '',
      isFullCard: true
    }
  },
  partialCard() {
    return (
      <span>
        {this.props.value}]
      </span>
    )
  },
  fullCard() {
    return (
      <span>
        [{this.props.value}]
      </span>
    )
  },
  render() {
    return this.props.isFullCard ? this.fullCard() : this.partialCard();
  }
})