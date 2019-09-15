import { USER_SIGNUP_LOADING, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default signupReducer;
