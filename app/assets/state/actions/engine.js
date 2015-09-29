const namespace = 'engine/';
const Names = {
  newGame: namespace + 'New Game',
  gameOver: namespace + 'Game Over',
  cardAccepted: namespace + 'Card Accepted',
  cardRejected: namespace + 'Card Rejected',
  changePlayers: namespace + 'Change Players',
  resetGame: namespace + 'Reset Game'
}

const Actions = {
  newGame: (players, currentPlayer, deck) => {
    return {type: Names.newGame, players, currentPlayer, deck};
  },
  gameOver: (scores) => {
    return {type: Names.gameOver, scores};
  },  
  changePlayers: (addOrRemove, who) => {
    return {type: Names.changePlayers, addOrRemove, who};
  },
  cardAccepted: (who, card, pot, newCard) => {
    return {type: Names.cardAccepted, who, card, pot, newCard};
  },
  cardRejected: (who) => {
    return {type: Names.cardRejected, who};
  },
  resetGame: () => {
    return {type: Names.resetGame};
  }

}

export default {Names, Actions};