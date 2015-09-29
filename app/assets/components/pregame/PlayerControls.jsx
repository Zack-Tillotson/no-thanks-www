import React from 'react';

export default React.createClass({
  removePlayerClickHandler(event) {
    event.preventDefault();
    this.props.requestRemove();
  },
  render() {
    return (
      <div>
        <button onClick={this.removePlayerClickHandler}>-</button>
      </div>
    )
  }
})