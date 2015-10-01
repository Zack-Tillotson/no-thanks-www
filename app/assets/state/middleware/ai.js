import {Names, Actions} from '../actions';
import engine from '../../engine';
import {random, noThanks, netValueThreshold} from '../../ai';

function delayedDispatch(dispatch, action) {
  setTimeout(() => dispatch(action), 1);
}

export default (store) => (next) => (action) => {

  const state = store.getState();

  if(action.type === Names.ai.requestDecision) {

    const options = engine.getCurrentOptions(state);
    const predictions = (action.aiType === '"No Thanks!"') ? noThanks.predict(options, state)
      : (action.aiType === '"Net Value Threshold"') ? netValueThreshold.predict(options, state)
      : random.predict(options, state);
    const decision = predictions.sort((a,b) => b.value - a.value)[0].action;

    delayedDispatch(store.dispatch, Actions.ui.playerDecision(decision));
  }

  return next(action);
}