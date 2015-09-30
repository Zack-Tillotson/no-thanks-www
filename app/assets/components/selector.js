import { createSelector } from 'reselect';


// Sort and arrange in runs
// eg [3,30,15,4,31] => [[3,4],[15],[30,31]]
function getCardStacks(cardArray) {
  const stackArray = [];

  cardArray.sort((a,b) => a - b)
    .forEach((value) => {
      if(!stackArray.length) {
        stackArray.push([value]);
      } else {
        const lastStack = stackArray[stackArray.length - 1];
        if(lastStack[lastStack.length - 1] === value - 1) {
          lastStack.push(value);
        } else {
          stackArray.push([value]);
        }
      }
    });

  return stackArray.map((stack) => stack.map((value) => {
    return {value}
  }));
}

function addRunAlert(stacks, currentCard) {
  stacks.forEach((stack) => stack.forEach((card) => card.runs = Math.abs(card.value - currentCard) === 1));
  return stacks;
}

function getNetPoints(stacks) {
  return stacks.reduce((sum, stack) => sum + stack[0].value, 0);
}

function player(currentCard, isCurrentPlayer, state) {
  const stacks = addRunAlert(getCardStacks(state.cards), currentCard);
  const cardPoints = getNetPoints(stacks);
  const netPoints = cardPoints - state.money;
  return {...state, stacks, cardPoints, netPoints, isCurrentPlayer};
}

const game = (state) => state.game;
const players = (state) => state.players;
const table = (state) => state.table;

const currentCard = createSelector([table], (table) => table.deck.topCard);

const playersRollup = createSelector(
  [players, currentCard], 
  (players, currentCard) => {
    const {currentPlayer, list} = players;
    return {
      currentPlayer,
      list: list.map((person, index) => player(currentCard, index === currentPlayer, person))
    };
  }
);

function getWinningPlayer(players) {
  const index = players.reduce((winnerIndex, player, index, players) => {
    if(winnerIndex < 0) {
      return index;
    } else {
      return players[winnerIndex].netPoints > player.netPoints ? index : winnerIndex;
    }
  }, -1);
  return index >= 0 ? players[index].name : "Nobody";
}

const playersPostPlayer = createSelector([playersRollup], (players) => {
  const winner = getWinningPlayer(players.list);
  return {...players, winner};
});

export default createSelector([game, playersPostPlayer, table], (game, players, table) => {
  return {game, players, table};
});