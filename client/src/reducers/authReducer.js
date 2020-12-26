import * as actions from '../actions/authActions';

export const initialState = {
	user: {},
	LoggedIn: false,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.LOGIN:
			return state;
		case actions.LOGIN_SUCCESS:
			return { ...state, LoggedIn: true, user: action.payload };
		case actions.LOGIN_FAILURE:
			return state;
		default:
			return state;
	}
}
