import { combineReducers } from 'redux';
import cocktailsReducers from './cocktailsReducers';

export default combineReducers({
  cocktails: cocktailsReducers
});