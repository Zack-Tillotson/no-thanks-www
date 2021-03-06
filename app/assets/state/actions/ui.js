const namespace = 'ui/';
const Names = {
  changePlayers: namespace + 'Request Change Players',
  newGame: namespace + 'Request New Game',
  startGame: namespace + 'Request Start Game',
  playerDecision: namespace + 'Request Player Decision',
  resetGame: namespace + 'Request Reset'
}

const aiTypes = ["Random", "No Thanks!", "Net Value Threshold", "Reinforcement"];
function getRandomAiType() {
  return aiTypes[parseInt(Math.random() * aiTypes.length)];
}

const Actions = {
  changePlayers: (addOrRemove, who) => {
    return {type: Names.changePlayers, addOrRemove, who};
  },
  addPlayer: (playerType = 'ai', aiType = getRandomAiType()) => {
    return {type: Names.changePlayers, addOrRemove: 'add', playerType, aiType};
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
      requestAddPlayer: (playerType, aiType = 'human') => dispatch(Actions.addPlayer(playerType, aiType)),
      requestRemovePlayer: (player) => dispatch(Actions.changePlayers('remove', player)),
      requestNewGame: () => dispatch(Actions.newGame()),
      requestPlayAgain: () => dispatch(Actions.resetGame()),
      requestTake: () => dispatch(Actions.playerDecision('take')),
      requestNoThanks: () => dispatch(Actions.playerDecision('noThanks'))
    }
  };
}

export default {Dispatcher, Names, Actions};