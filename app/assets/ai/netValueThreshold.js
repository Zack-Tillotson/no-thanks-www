// I say No Thanks! whenever the net value of a card (card value - money in pot) is 
// above my threshold.

const threshold = 10;

export default {
  predict(state) {

    const moneyLeft = state.players.list[state.players.currentPlayer].money;
    const takeCost = state.table.deck.topCard - state.table.pot;

    return [{
      action: 'take',
      value: moneyLeft > 0 ? threshold : 0
    }, {
      action: 'noThanks',
      value: takeCost
    }].sort((a,b) => b.value - a.value);
  }
}