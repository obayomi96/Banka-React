import { CREATE_ACCOUNT_LOADING, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE } from '../actions/actionTypes';

const initialState = {
  account: null,
  isLoading: false,
  error: null,
};

const createAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default createAccountReducer;
