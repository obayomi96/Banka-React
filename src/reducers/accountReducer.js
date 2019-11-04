import { GET_USER_ACCOUNTS } from '../actions/actionTypes';

export const intitialState = {
  accounts: []
};

export const accountReducer = (state = intitialState, action) => {
  switch (accountReducer.type) {
    case GET_USER_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
      };
      default:
        return state;
  }
};
