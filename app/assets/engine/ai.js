
export default {
  getCurrentOptions(state) {
    const moneyLeft = state.players.list[state.players.currentPlayer].money;

    const ret = ['take'];

    if(moneyLeft > 0) {
      ret.push('noThanks');
    }

    return ret;

  }
}