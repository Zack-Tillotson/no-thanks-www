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
  newGame: (players, deck) => {
    return {type: Names.newGame, players, deck};
  },
  startGame: (player, card) => {
    return {type: Names.startGame, player, card};
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
  cardRejected: (who, newCurrentPlayer, playerPot, pot) => {
    return {type: Names.playerDecision, who, newCurrentPlayer, playerPot, pot};
  },

}

export default {Names, Actions};