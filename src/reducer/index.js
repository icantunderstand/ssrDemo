import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appName from './appName';
import github from '../github/reducer/grid';

export default combineReducers({
  routing: routerReducer,
  appName,
  github,
});
