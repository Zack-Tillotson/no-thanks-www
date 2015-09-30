const namespace = 'ui/';
const Names = {
  changePlayers: namespace + 'Request Change Players',
  newGame: namespace + 'Request New Game',
  startGame: namespace + 'Request Start Game',
  playerDecision: namespace + 'Request Player Decision',
  resetGame: namespace + 'Request Reset'
}

const Actions = {
  changePlayers: (addOrRemove, who) => {
    return {type: Names.changePlayers, addOrRemove, who};
  },
  addPlayer: (playerType = 'ai') => {
    return {type: Names.changePlayers, addOrRemove: 'add', playerType};
  },
  newGame: () => {
    return {type: Names.newGame};
  },
  resetGame: () => {
    return {type: Names.resetGame};
  },
  playerDecision: (decision) => {
    return {type: Names.playerDecision, decision};
  }
}

const Dispatcher = (dispatch) => { 
  return {
    dispatchedActions: {
      requestAddPlayer: (playerType) => dispatch(Actions.addPlayer(playerType)),
      requestRemovePlayer: (player) => dispatch(Actions.changePlayers('remove', player)),
      requestNewGame: () => dispatch(Actions.newGame()),
      requestPlayAgain: () => dispatch(Actions.resetGame()),
      requestTake: () => dispatch(Actions.playerDecision('take')),
      requestNoThanks: () => dispatch(Actions.playerDecision('noThanks'))
    }
  };
}

export default {Dispatcher, Names, Actions};