// Linear sum of weighted features - the features were
// chosen manually but the weights were learned.
function calculateFeatures(gameState) {
  
  const features = [1];
  const id = gameState.players.list[gameState.players.currentPlayer].id;

  features.push(gameState.table.pot);

  // Players sorted by current player, score asc
  const players = gameState.players.list
    .slice(0)
    .sort((a,b) => {
      if(a.id === id) {
        return -1;
      } else if(b.id === id) {
        return 1;
      } else {
        return b.score - a.score;
      }
    });

  // Money, card net value for each player
  players.forEach((player) => {
    const playerNetValue = cardNetValue(gameState.table.deck.topCard, player.cards, gameState.table.pot);
    features.push(playerNetValue);
    features.push(player.money);
  });

  return features;

}

function cardNetValue(card, cards, pot) {
  const withoutCardValue = sumCardsValue([...cards]);
  const withCardValue = sumCardsValue([card, ...cards]);
  return -1 * pot + (withCardValue - withoutCardValue);
}

function sumCardsValue(cards) {
  return cards
    .sort((a,b) => b-a)
    .reduce((sum, card, index) => sum + cards[index - 1] === card - 1 ? 0 : card, 0);
}

function sumFeatureWeights(features, weights) {
  const sum = features.reduce((sum, feature, index) => {
    return sum + feature * weights[index];
  }, 0);

  return sum;
}

// Sigmoid smoothing
function kernel(value) {
  const ret = 1/(1+Math.pow(Math.E, -1 * value));
  return ret;
}
function randomValue() {
  return Math.random();
}
export default {
  weights: [0.1,-0.7310411102341284,-5.963419741743833,0.22454415665662877,0.806167260470825,-2.9097596436403514,1.4242012444938879,-4.4642022356594016,-0.7231240826617615,-0.5005202373334656],
  predict(options, gameState) {
    return options.map((action) => {
      switch(action) {
        case 'take':
          const features = calculateFeatures(gameState);
          const sumFW = sumFeatureWeights(features, this.weights); 
          const value = kernel(sumFW);
          return {action, value};
          break;
        case 'noThanks':
          return {action, value: .5};
          break;
      }
    });
  }
}