import {combineReducers} from 'redux';
import {Names} from '../actions.js';

function findPlayer(players, who) {
  const index = players.find((player) => player.id === who.id);
  if(index >= 0)
    return index;
  else
    return players.length;
}

const playerReducer = (state = {}, action) => {
  switch(action.type) {
    case Names.engine.cardAccepted:
      state.cards.push(card);
      state.money += action.pot;
    case Names.cardRejected:
      state.money--;
  }
}

const playersReducer = (state = [], action) => {
  switch(action.type) {
    case Names.engine.newGame:
      return action.players;
    case Names.engine.changePlayers:
      if(action.addOrRemove === 'add') {
        state.push(action.who);
      } else {
        const playerIndex = getPlayerIndex(state, action.who);
        state = state.slice(0, playerIndex).concat(state.slice(playerIndex, state.length)); 
      }
      return state;
    case Names.engine.cardAccepted: 
    case Names.cardRejected:
      const playerIndex = getPlayerIndex(state, action.who);
      if(playerIndex) {
        state[playerIndex] = playerReducer(player);
      }
      return state;      
    default:
      return state;
  }
}

export default playersReducer;