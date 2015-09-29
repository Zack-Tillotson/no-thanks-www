const namespace = 'ai/';
const Names = {
  requestAction: namespace + 'Request Action', // Now would be a good time for the AI to play
  requestDecision: namespace + 'Request Decision', // Please dispatch a decision when able
  takeAction: namespace + "TakeAction"
}

const Actions = {
  requestAction: () => {
    return {type: Names.requestAction};
  },
  requestDecision: () => {
    return {type: Names.requestDecision};
  },
  takeAction: (action) => {
    return {type: Names.takeAction, action};
  }
}

export default {Names, Actions};