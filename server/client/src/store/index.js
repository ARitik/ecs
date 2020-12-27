import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import user from './user';

const reducer = combineReducers({
	user,
});

export default configureStore({
	reducer,
});
