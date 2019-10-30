import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { accountReducer } from './accountReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  accounts: accountReducer,
});

export default rootReducer;
