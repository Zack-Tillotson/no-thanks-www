// I always choose between taking and saying no thanks at random!
function randomValue() {
  return Math.random() + 1 - .5;
}
export default {
  predict(state) {
    const moneyLeft = state.players.list[state.players.currentPlayer].money;
    return [{
      action: 'take',
      value: moneyLeft > 0 ? randomValue() : 0
    }, {
      action: 'noThanks',
      value: randomValue()
    }].sort((a,b) => b.value - a.value);
  }
}