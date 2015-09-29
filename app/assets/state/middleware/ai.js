import {Names, Actions} from '../actions';
import predictor from '../../ai/predictor';

function delayedDispatch(dispatch, action) {
  setTimeout(() => dispatch(action), 1);
}

export default (store) => (next) => (action) => {

  const state = store.getState();

  if(action.type === Names.ai.requestDecision) {
    const options = predictor.predict(state);
    delayedDispatch(store.dispatch, Actions.ui.playerDecision(options[0].action));
  }

  return next(action);
}