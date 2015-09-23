const Names = {
  addPlayer: 'Add Player',            // UI  
  removePlayer: 'Remove Player',      // ...
  newGame: 'New Game',
  playerDecision: 'Player Decision',
  cardAccepted: 'Card Accepted',      // Engine
  cardRejected: 'Card Rejected',      // ...
  startGame: 'Start Game',
  gameOver: 'Game Over'
}

const Actions = {
  addPlayer: () => {
    return {type: Names.addPlayer};
  },
  removePlayer: (player) => {
    return {type: Names.removePlayer, who: player};
  },
  newGame: () => {
    return {type: Names.newGame};
  },
  startGame: () => {
    return {type: Names.startGame};
  }
}

const EngineActions = {
  newGame: (players, deck) => {
    return {type: Names.startGame, players, deck};
  },
  playerDecision: (who, decision) => {
    return {type: Names.playerDecision, who, decision};
  },
  cardAccepted: (who, card, pot, newCard) => {
    return {type: Names.cardAccepted, who, card, pot, newCard};
  },
  cardRejected: (who, newCurrentPlayer, playerPot, pot) => {
    return {type: Names.playerDecision, who, newCurrentPlayer, playerPot, pot};
  },
  gameOver: (scores) => {
    return {type: Names.gameOver, scores};
  }
}

const Dispatcher = (dispatch) => { 
  return {
    dispatchedActions: {
      addPlayer: () => dispatch(Actions.addPlayer()),
      removePlayer: (who) => dispatch(Actions.removePlayer(who)),
      newGame: () => dispatch(Actions.newGame()),
      startGame: () => dispatch(Actions.startGame()),
      playerDecision: (who, decision) => dispatch(Actions.playerDecision(who, decision))
    }
  };
}

export default {Dispatcher, Names};