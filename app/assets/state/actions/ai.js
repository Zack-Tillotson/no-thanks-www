const namespace = 'ai/';
const Names = {
  requestAction: namespace + 'Request Action', // Now would be a good time for the AI to play
  requestDecision: namespace + 'Request Decision', // Please dispatch a decision when able
  takeAction: namespace + "TakeAction" // Here is the action the AI wants to take
}

const Actions = {
  requestAction: () => {
    return {type: Names.requestAction};
  },
  requestDecision: (aiType) => {
    return {type: Names.requestDecision, aiType};
  },
  takeAction: (action) => {
    return {type: Names.takeAction, action};
  }
}

export default {Names, Actions};