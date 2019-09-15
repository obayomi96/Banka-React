import { axiosPostCall } from '../../utils/axios';
import { loginUrl } from '../../constants/url';
import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actionTypes';

export const loginLoading = () => ({ type: USER_LOGIN_LOADING });

export const loginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  error,
});

export const userLogin = (payload) => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const response = await axiosPostCall(loginUrl(), payload);
    return dispatch(loginSuccess(response.data.data));
  } catch (error) {
    return dispatch(loginFailure(error.response.data));
  }
};
