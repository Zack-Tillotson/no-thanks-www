import {combineReducers} from 'redux';
import {Names} from '../actions.js';

const STATES = {
  pregame: 'pregame', 
  ongoing: 'ongoing', 
  gameover: 'gameover'
};

function stateReducer(state = STATES.pregame, action) {
  switch(action.type) {
    case Names.engine.cardAccepted:
      if(action.newCard === undefined)
        return STATES.gameover;
    case Names.engine.newGame:
      return STATES.ongoing;
    case Names.engine.resetGame:
      return STATES.pregame;
    default:
      return state;
  }
}

export default combineReducers({
  state: stateReducer
})