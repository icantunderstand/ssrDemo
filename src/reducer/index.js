import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appName from './appName';

export default combineReducers({
  routing: routerReducer,
  appName,
});
