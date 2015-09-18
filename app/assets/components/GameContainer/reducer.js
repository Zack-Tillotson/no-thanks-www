import {combineReducers} from 'redux';
import {Names} from './actions.js';

const PlayerNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Erica'];

const count = (state = (23), action) => {
  return state;
}

const currentlyVisible = (state = parseInt(Math.random() * 32)+3, action) => {
  return state;
}

const players = (state = [], action) => {
  if(action.type === Names.addPlayer) {
    const newList = state.splice(0);
    newList.push({name: PlayerNames[newList.length], money: 11, cards: []});
    return newList;
  } else {
    return state;
  }
}

export default combineReducers({
  cards: combineReducers({count, currentlyVisible}),
  players
})