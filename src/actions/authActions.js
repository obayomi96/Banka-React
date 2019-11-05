import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { CURRENT_USER, LOADING, NOT_LOADING } from './actionTypes';
import axiosInstance, { setToken } from '../utils/axios';

export const currentUser = decoded => ({
	type: CURRENT_USER,
	payload: decoded,
});

export const login = (userData, history) => async (dispatch) => {
	dispatch({
			type: LOADING,
	});
	try {
		const response = await axiosInstance.post('auth/signin', userData);
		if (response.data.status === 200) {
			const { data } = response.data;
			localStorage.setItem('userJwtToken', data.token);
			setToken(data.token);
			dispatch(currentUser(jwtDecode(data.token)));
			history.push('/dashboard');
			toast.dismiss();
			toast.success(`Login success, Welcome ${data.firstname}`);
		}
		return dispatch({
			type: NOT_LOADING,
		});
	} catch (err) {
		const { error } = err.response.data;
		toast.dismiss();
		toast.error(error, { autoClose: 2000 });
		return dispatch({
				type: NOT_LOADING,
		});
	}
};

export const signUp = (userData, history) => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const response = await axiosInstance.post('auth/signup', userData);
		if (response.data.status === 201) {
			const { data } = response.data;
			localStorage.setItem('userJwtToken', data.token);
			setToken(currentUser(jwtDecode(data.token)));
			history.push('/createAccount');
			toastdismiss();
			toast.success(`welcome to banka, please create a bank account ${data.firstname}`)
		}
		return dispatch({
			type: NOT_LOADING,
		});
	} catch (err) {
		const { error } = err.response;
		toast.dismiss();
		toast.error(error, { autoClose: 2000 });
		return dispatch({
			type: NOT_LOADING,
		});
	}
}