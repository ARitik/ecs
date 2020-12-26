import axios from 'axios';

//REDUX ACTION TYPES
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = () => ({
	type: LOGIN,
});

export const loginSuccess = user => ({
	type: LOGIN_SUCCESS,
	payload: user,
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

export function attemptLogin(email, password) {
	return async dispatch => {
		dispatch(login());
		try {
			const response = await axios.post(
				'http://localhost:5000/api/auth/login',
				{ email, password },
				{ withCredentials: true }
			);
			if (response) {
				dispatch(loginSuccess(response.data));
			} else {
				dispatch(loginFailure());
			}
		} catch (error) {
			dispatch(loginFailure());
		}
	};
}

export function attemptLoginOnLoad() {
	return async dispatch => {
		dispatch(login());
		try {
			const response = await axios.get('http://localhost:5000/api/auth/me', {
				withCredentials: true,
			});
			if (response) {
				dispatch(loginSuccess(response.data));
			} else {
				dispatch(loginFailure());
			}
		} catch (error) {
			dispatch(loginFailure());
		}
	};
}
