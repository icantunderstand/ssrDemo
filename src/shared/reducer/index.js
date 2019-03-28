import { combineReducers } from 'redux';
import grid from './grid';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  grid,
  routing: routerReducer,
});
