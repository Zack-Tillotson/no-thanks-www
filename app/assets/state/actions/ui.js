const namespace = 'ui/';
const Names = {
  changePlayers: namespace + 'Request Change Players',
  newGame: namespace + 'Request New Game',
  startGame: namespace + 'Request Start Game',
  playerDecision: namespace + 'Request Player Decision',
}

const Actions = {
  changePlayers: (addOrRemove) => {
    return {type: Names.changePlayers, addOrRemove};
  },
  newGame: () => {
    return {type: Names.newGame};
  },
  startGame: () => {
    return {type: Names.startGame};
  },
  playerDecision: (decision) => {
    return {type: Names.playerDecision, decision};
  }
}

const Dispatcher = (dispatch) => { 
  return {
    dispatchedActions: {
      requestAddPlayer: () => dispatch(Actions.changePlayers('add')),
      requestRemovePlayer: () => dispatch(Actions.changePlayers('remove')),
      requestNewGame: () => dispatch(Actions.newGame()),
      requestStartGame: () => dispatch(Actions.startGame()),
      requestTake: () => dispatch(Actions.playerDecision('take')),
      requestNoThanks: () => dispatch(Actions.playerDecision('noThanks'))
    }
  };
}

export default {Dispatcher, Names};