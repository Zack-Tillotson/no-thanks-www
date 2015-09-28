import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';

import middleware from './middleware.js';
import reducer from './reducer';

import Game from '../components/Game';

const store = applyMiddleware(
  middleware,
  ThunkMiddleware,
  LoggerMiddleware({
    level: 'info'
  })
)(createStore)(reducer);

export default React.createClass({
  render() { 
    return (
      <Provider store={store}>
        {() => <Game />}
      </Provider>
    );
  }
})