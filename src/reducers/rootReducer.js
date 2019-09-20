import { combineReducers } from 'redux';
import signupReducer from './signupReducer'
import loginReducer from './loginReducer';
import createAccountReducer from './createAccountReducer';
import getAccountReducer from './getAccountReducer'

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  createAccount: createAccountReducer,
  getAccounts: getAccountReducer,
});

export default rootReducer;
