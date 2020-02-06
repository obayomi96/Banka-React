import jwtDecode from 'jwt-decode';
import swal from '@sweetalert/with-react';

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
		if (response.status === 200) {
			const { data } = response.data;
			localStorage.setItem('userJwtToken', data.token);
			setToken(data.token);
			dispatch(currentUser(jwtDecode(data.token)));
			history.push('/dashboard');
			swal({
				text: 'Success! welcome back.',
				icon: 'success',
				button: true,
				timer: 3000,
			});
		}
		return dispatch({
			type: NOT_LOADING,
		});
	} catch (err) {
		if (err) {
			const { error } = err.response.data;
			console.log(error);
			swal({
				text: 'Invalid!, check your credentials and try again',
				icon: 'error',
				button: true,
				timer: 5000,
			});
			return dispatch({
					type: NOT_LOADING,
			});
		}
	}
};

export const signUp = (userData, history) => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const response = await axiosInstance.post('auth/signup', userData);
		if (response.status === 201) {
			const { data } = response.data;
			localStorage.setItem('userJwtToken', data.token);
			setToken(currentUser(jwtDecode(data.token)));
			history.push('/dashboard');
			swal({
				text: `Registration successful, welcome' ${data.firstname}`,
				icon: 'success',
				button: true,
				timer: 3000,
			});
		}
		return dispatch({
			type: NOT_LOADING,
		});
	} catch (err) {
		if (err) {
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
}
