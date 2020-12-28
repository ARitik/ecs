import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		loginSuccess: (state, action) => {
			state.user = action.payload;
		},
		logoutSuccess: state => {
			state.user = null;
		},
	},
});

export default slice.reducer;

export const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ email, password }) => async dispatch => {
	try {
		const response = await axios.post('/api/auth/login', { email, password });
		if (response) {
			dispatch(loginSuccess(response.data));
		}
	} catch (error) {
		console.error(error.message);
	}
};

export const loginOnReload = () => async dispatch => {
	try {
		const response = await axios.get('api/auth/me');
		if (response) {
			dispatch(loginSuccess(response.data));
		}
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => async dispatch => {
	try {
		const res = await axios.get('/api/auth/logout');
		dispatch(logoutSuccess());
		console.log(res);
	} catch (error) {
		console.error(error.message);
	}
};

export const register = ({ email, password, name }) => async dispatch => {
	try {
		const response = await axios.post('/api/auth/register', {
			email,
			password,
			name,
		});
		if (response) {
			dispatch(login({ email, password }));
		}
	} catch (error) {
		console.error(error.message);
	}
};

// export const selectUser = state => state.user;
