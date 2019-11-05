import { toast } from 'react-toastify';
import { LOADING, NOT_LOADING, GET_USER_ACCOUNTS } from './actionTypes';
import axiosInstance from '../utils/axios';

export const getAccounts = (userEmail) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axiosInstance.get(`users/${userEmail}/accounts`);
    if (response.status === 200) {
      const { data } = response.data;
      return dispatch({
        type: GET_USER_ACCOUNTS,
        payload: data,
      });
    }
    return dispatch({
      type: NOT_LOADING,
    });
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.info(error, 'An error occured', { autoClose: 10000});
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const createAccount = (accountDetails) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {;
    const response = await axiosInstance.post('accounts', accountDetails);
    if (response.status === 201) {
      toast.dismiss();
      toast.success('Account created successfully');
      dispatch(getAccounts());
      dispatch({
        type: NOT_LOADING,
      });
    }
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
}
