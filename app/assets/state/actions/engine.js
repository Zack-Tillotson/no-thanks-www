const namespace = 'engine/';
const Names = {
  newGame: namespace + 'New Game',
  startGame: namespace + 'Start Game',
  gameOver: namespace + 'Game Over',
  cardAccepted: namespace + 'Card Accepted',
  cardRejected: namespace + 'Card Rejected',
  changePlayers: namespace + 'Change Players'
}

const Actions = {
  newGame: (players, currentPlayer, deck) => {
    return {type: Names.newGame, players, currentPlayer, deck};
  },
  startGame: (startingPlayerIndex) => {
    return {type: Names.startGame, startingPlayerIndex};
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

}

export default {Names, Actions};