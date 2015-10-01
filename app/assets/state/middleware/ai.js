import {Names, Actions} from '../actions';
import {random, noThanks, netValueThreshold} from '../../ai';

function delayedDispatch(dispatch, action) {
  setTimeout(() => dispatch(action), 1);
}

export default (store) => (next) => (action) => {

  const state = store.getState();

  if(action.type === Names.ai.requestDecision) {
    const options = (action.aiType === '"No Thanks!"') ? noThanks.predict(state)
      : (action.aiType === '"Net Value Threshold"') ? netValueThreshold.predict(state)
      : random.predict(state);
    const decision = options[0].action;
    delayedDispatch(store.dispatch, Actions.ui.playerDecision(decision));
  }

  return next(action);
}