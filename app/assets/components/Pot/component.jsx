import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        Pot: ${this.props.value}
      </div>
    )
  }
})