import React from 'react';

export default React.createClass({
  takeCardClickHandler(event) {
    event.preventDefault();
    this.props.requestTake();
  },
  noThanksClickHandler(event) {
    event.preventDefault();
    this.props.requestNoThanks();
  },
  render() {
    return (
      <div>
        <button onClick={this.takeCardClickHandler}>Take</button>
        <button onClick={this.noThanksClickHandler}>No Thanks</button>
      </div>
    )
  }
})