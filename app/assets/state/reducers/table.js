import {combineReducers} from 'redux';
import {Names} from '../actions.js';

const currentSize = (state = 0, action) => {
  switch(action.type) {
    case Names.engine.newGame:
      return action.deck.size;
    case Names.engine.cardAccepted:
      return state - 1;
  }
  return state;
}

const originalSize = (state = 0, action) => {
  switch(action.type) {
    case Names.engine.newGame:
      return action.deck.size;
  }
  return state;
}

const topCard = (state = '', action) => {
 switch(action.type) {
    case Names.engine.newGame:
      return action.deck.topCard;
    case Names.engine.cardAccepted:
      return action.newCard || '';
  }
  return state; 
}

const pot = (state = 0, action) => {
 switch(action.type) {
    case Names.engine.newGame:
    case Names.engine.cardAccepted:
      return 0;
    case Names.engine.cardRejected:
      return state + 1;
  }
  return state; 
}

export default combineReducers({
  deck: combineReducers({
    currentSize,
    originalSize,
    topCard
  }),
  pot
});