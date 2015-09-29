import React from 'react';

export default React.createClass({
  playAgainClickHandler(event) {
    event.preventDefault();
    this.props.requestPlayAgain();
  },
  render() {
    return (
      <div>
        <div>
          <button onClick={this.playAgainClickHandler}>Play Again</button>
        </div>
      </div>
    )
  }
})