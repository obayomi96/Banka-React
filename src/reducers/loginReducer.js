import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
