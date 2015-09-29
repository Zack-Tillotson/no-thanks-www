import React from 'react';
import Radium from 'radium';
import Card from './Card';

export default Radium(React.createClass({
  propTypes: {
    showBottomCardValues: React.PropTypes.bool,
    values: React.PropTypes.array.isRequired,
    stackSize: React.PropTypes.number
  },
  getCardList() {
    const {values} = this.props;
    for(let i = values.length ; i < this.props.stackSize ; i++) {
      values.push({value: ''});
    }
    return values;
  },
  getCards() {
    const cards = this.getCardList();
    if(!cards.length) {
      return 'empty';
    } else {
      return cards.map((card, index) => {
        const shownValue = this.props.showBottomCardValues || index === 0 ? card.value : '';
        const isFullCard = index === 0;
        return (
          <Card key={index} value={shownValue} runs={card.runs} isFullCard={isFullCard} />
        );
      });
    }
  },
  render() {
    return <div style={styles.container}>{this.getCards()}</div>;
  }
}));

const styles = {
  container: {
    display: "inline-block",
    marginRight: "7px"
  }
}