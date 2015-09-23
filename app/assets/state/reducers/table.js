import {combineReducers} from 'redux';
import {Names} from '../actions.js';

const currentSize = (state = 0, action) => {
  switch(action.type) {
    case Names.newGame:
      return action.deck.size;
    case Names.cardAccepted:
      return state - 1;
  }
  return state;
}

const originalSize = (state = 0, action) => {
  switch(action.type) {
    case Names.newGame:
      return action.deck.size;
  }
  return state;
}

const cards = (state = [{value: -1}], action) => {
 switch(action.type) {
    case Names.newGame:
      return action.deck.cards;
    case Names.cardAccepted:
      const cards = state.slice(0);
      cards.push(action.newCard);
      return cards;
  }
  return state; 
}

const pot = (state = 0, action) => {
 switch(action.type) {
    case Names.newGame:
    case Names.cardAccepted:
      return 0;
    case Names.cardRejected:
      return state + 1;
  }
  return state; 
}

export default combineReducers({
  deck: combineReducers({
    currentSize,
    originalSize,
    cards
  }),
  pot
});