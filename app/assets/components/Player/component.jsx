import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.name} : ${this.props.money}
        {this.props.cards.map((cardValue) => (
          <span>{this.cardValue}</span>
        ))}
      </div>
    )
  }
})