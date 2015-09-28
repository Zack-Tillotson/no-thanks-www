import {combineReducers} from 'redux';
import {Names} from '../actions.js';

function getPlayerIndex(players, who) {
  const index = players.findIndex((player) => player.__id__ === who.__id__);
  if(index >= 0)
    return index;
  else
    return players.length;
}

const playerReducer = (state = {}, action) => {
  switch(action.type) {
    case Names.engine.cardAccepted:
      state.cards.push(action.card);
      state.money += action.pot;
      break;
    case Names.engine.cardRejected:
      state.money--;
      break;
  }
  return state;
}

const listReducer = (state = [], action) => {
  switch(action.type) {
    case Names.engine.newGame:
      return action.players;
    case Names.engine.changePlayers:
      const newState = state.slice(0);
      switch(action.addOrRemove) {
        case 'add':
          newState.push(action.who);
          break;
        case 'remove':
          const playerIndex = getPlayerIndex(state, action.who);
          newState.splice(playerIndex, 1);
          break;
      }
      return newState;
    case Names.engine.cardAccepted: 
    case Names.engine.cardRejected:
      const playerIndex = getPlayerIndex(state, action.who);
      if(playerIndex > -1) {
        state[playerIndex] = playerReducer(state[playerIndex], action);
      }
      return state;      
    default:
      return state;
  }
}

const currentPlayerReducer = (state = 0, action, newPlayerCount) => {
  switch(action.type) {
    case Names.engine.newGame:
      return action.currentPlayer;
    case Names.engine.changePlayers:
      return state % newPlayerCount;
    case Names.engine.cardRejected:
      return (state + 1) % newPlayerCount;
    default:
      return state;
  }
}

// DIY combineReducers
// Form {
//  list: [], 
//  currentPlayer: integer
// }
export default (state = {}, action) => {
  const list = listReducer(state.list, action);
  const currentPlayer = currentPlayerReducer(state.currentPlayer, action, list.length);
  return {list, currentPlayer}
}