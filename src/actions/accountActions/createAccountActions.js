import { axiosPostCall } from '../../utils/axios';
import { createAccountUrl } from '../../constants/url';
import { CREATE_ACCOUNT_LOADING, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE } from '../actionTypes'

export const createAccountLoading = () => {
  return { type: CREATE_ACCOUNT_LOADING };
};

export const createAccountSuccess = payload => {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload,
  };
};

export const createAccountFailure = error => {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    error,
  };
};

export const createAccount = payload => async (dispatch) => {
  dispatch(createAccountLoading());
  try {
    const response = await axiosPostCall(createAccountUrl(), payload);
    return dispatch(createAccountSuccess(response.data.data));
  } catch (error) {
    return dispatch(createAccountFailure(error.response.data));
  }
};
