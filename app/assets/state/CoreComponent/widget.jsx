import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';

import reducer from '../reducer';

import Game from '../../components/Game';

const store = applyMiddleware(
    ThunkMiddleware,
    LoggerMiddleware({
      level: 'info'
    })
  )(createStore)(reducer);

export default React.createClass({
  render() { 
    return (
      <Provider store={store}>
        {() => <Game.Widget />}
      </Provider>
    )
  }
})