import ui from './actions/ui';
import engine from './actions/engine';
import ai from './actions/ai';

export default {
  Names: {
    ui: ui.Names,
    engine: engine.Names,
    ai: ai.Names
  }, 
  Dispatcher: {
    ui: ui.Dispatcher
  },
  Actions: {
    ui: ui.Actions,
    engine: engine.Actions,
    ai: ai.Actions
  }
};