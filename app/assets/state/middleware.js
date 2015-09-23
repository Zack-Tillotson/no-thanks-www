import {Names, Actions} from './actions.js';
import Engine from '../engine';

export default (store) => (next) => (action) => {

  if(action.type === Names.ui.changePlayers && action.addOrRemove === 'add') {
    const who = Engine.addPlayer(store.getState());
    action = Actions.engine.changePlayers('add', who); // XXX replace or add another?...
  }

  return next(action);
}