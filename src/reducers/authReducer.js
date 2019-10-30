import { CURRENT_USER, LOADING, NOT_LOADING } from '../actions/actionTypes';

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case NOT_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CURRENT_USER:
      return {
        ...state,
        laoding: false,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
