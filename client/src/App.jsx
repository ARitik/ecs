// import Login from './pages/Login';
// import Register from './pages/Register';
// import HomePage from './pages/Home';
// import User from './pages/User';

import React, { useEffect } from 'react';
import RHandler from './pages/RHandler';
import { attemptLoginOnLoad } from './actions/authActions';
import { connect } from 'react-redux';

export function App({ dispatch }) {
	useEffect(() => {
		dispatch(attemptLoginOnLoad());
	}, [dispatch]);

	return (
		<div className='App'>
			<RHandler />
		</div>
	);
}

const mapStateToProps = state => ({
	user: state.auth.user,
	LoggedIn: state.auth.LoggedIn,
});

export default connect(mapStateToProps)(App);
