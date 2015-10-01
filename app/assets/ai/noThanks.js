// I always say No Thanks! whenever I can.

export default {
  predict(state) {

    // 0 value when out of money
    const noThanksValue = state.players.list[state.players.currentPlayer].money;

    return [{
      action: 'take',
      value: 0.5
    }, {
      action: 'noThanks',
      value: noThanksValue
    }].sort((a,b) => b.value - a.value);
  }
}