import swal from '@sweetalert/with-react';
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
    console.log(error);
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
      const { message } = response.data;
      swal({
				text: message,
				icon: 'success',
				button: true,
				timer: 4000,
      });
      return dispatch(getAccounts());
    }
      return dispatch({
        type: NOT_LOADING,
      });
  } catch (err) {
    const { error } = err.response.data;
		swal({
			text: error,
			icon: 'error',
			button: true,
			timer: 5000,
		});
    return dispatch({
      type: NOT_LOADING,
    });
  }
}
