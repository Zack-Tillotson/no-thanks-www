import ui from './actions/ui.js';
import engine from './actions/engine.js';

export default {
  Names: {
    ui: ui.Names,
    engine: engine.Names
  }, 
  Dispatcher: {
    ui: ui.Dispatcher
  },
  Actions: {
    engine: engine.Actions
  }
};