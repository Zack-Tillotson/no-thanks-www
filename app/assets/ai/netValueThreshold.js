// I say No Thanks! whenever the net value of a card (card value - money in pot) is 
// above my threshold.

const threshold = 10;

export default {
  predict(options, state) {

    const takeCost = state.table.deck.topCard - state.table.pot;

    return options.map((action) => {
      switch(action) {
        case 'take':
          return {action, value: threshold};
        case 'noThanks':
          return {action, value: takeCost};
      }
    });

  }
}