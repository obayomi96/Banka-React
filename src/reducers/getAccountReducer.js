import { GET_ACCOUNT_LOADING, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE  } from '../actions/actionTypes';

const initialState = {
  account: null,
  isLoading: false,
  error: null,
};

const getAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getAccountReducer;
