import React from 'react';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';

import middleware from '../middleware.js';
import reducer from '../reducer';

import Game from '../../components/Game';

const store = compose(
  applyMiddleware(
    middleware,
    ThunkMiddleware,
    LoggerMiddleware({
      level: 'info'
    })
  ),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducer);

export default React.createClass({
  render() { 
    return (
      <div>
        <Provider store={store}>
          {() => <Game.Widget />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
})