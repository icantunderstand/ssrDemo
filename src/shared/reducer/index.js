import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import grid from './grid';
import appName from './appName';

export default combineReducers({
  grid,
  routing: routerReducer,
  appName,
});
