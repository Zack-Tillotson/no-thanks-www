import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';

import GameContainer from 'GameContainer';

const reducer = GameContainer.Reducer;

const store = applyMiddleware(
    GameContainer.Middleware,
    ThunkMiddleware,
    LoggerMiddleware({
      level: 'info'
    })
  )(createStore)(reducer);

export default React.createClass({
  render() { 
    return (
      <Provider store={store}>
        {() => <GameContainer.Widget />}
      </Provider>
    )
  }
})