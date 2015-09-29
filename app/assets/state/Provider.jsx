import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';

import middleware from './middleware';

import reducer from './reducer';
import {Actions} from './actions';

import Page from '../components/Page';

const store = applyMiddleware(
  ...middleware,
  ThunkMiddleware,
  LoggerMiddleware({
    level: 'info',
    predicate: (state, action) => !(/ui\//.test(action.type)) &&  !(/ai\//.test(action.type))
  })
)(createStore)(reducer);

export default React.createClass({
  aiAction() {
    store.dispatch(Actions.ai.requestAction());
  },
  componentDidMount() {
    //this.aiTimer = setInterval(this.aiAction, 3500);
  },
  render() { 
    return (
      <Provider store={store}>
        {() => <Page />}
      </Provider>
    );
  }
})