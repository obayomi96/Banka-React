import { GET_ACCOUNT_LOADING, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE } from '../actionTypes';
import { getAccountUrl } from '../../constants/url';
import { axiosGetCall } from '../../utils/axios';

export const getAccountLoading = () => ({
  type: GET_ACCOUNT_LOADING,
});

export const getAccountSuccess = (payload) => ({
  type: GET_ACCOUNT_SUCCESS,
  payload,
});

export const getAccountFailure = (error) => ({
  type: GET_ACCOUNT_FAILURE,
  error,
});

export const getAccounts = () => async (dispatch) => {
  dispatch(getAccountLoading());
  try {
    const response = await axiosGetCall(getAccountUrl());
    return dispatch(getAccountSuccess(response.data.data));
  } catch (error) {
    return dispatch(getAccountFailure(error.response.data));
  }
};
