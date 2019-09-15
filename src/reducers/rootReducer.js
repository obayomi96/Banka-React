import { combineReducers } from 'redux';
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default rootReducer;
