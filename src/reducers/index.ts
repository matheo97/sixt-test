import offersReducer from './offers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  offers: offersReducer,
})

export default rootReducer;