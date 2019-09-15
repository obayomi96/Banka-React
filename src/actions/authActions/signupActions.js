import { axiosPostCall } from '../../utils/axios';
import { signupUrl } from '../../constants/url';
import { USER_SIGNUP_LOADING, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../actionTypes';

export const signupLoading = () => ({ type: USER_SIGNUP_LOADING });

export const signupSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (error) => ({
  type: USER_SIGNUP_FAILURE,
  error,
});

export const userSignup = (payload) => async (dispatch) => {
  dispatch(signupLoading());
  try {
    const response = await axiosPostCall(signupUrl(), payload);
    return dispatch(signupSuccess(response.data.data));
  } catch (error) {
    return dispatch(signupFailure(error.response.data));
  }
};
