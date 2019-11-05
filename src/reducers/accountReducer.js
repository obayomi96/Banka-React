import { GET_USER_ACCOUNTS, LOADING } from '../actions/actionTypes';

export const intitialState = {
  accounts: [],
  loading: false,
};

export const accountReducer = (state = intitialState, action) => {
  switch (accountReducer.type) {
    case GET_USER_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
        return state;
  }
};
