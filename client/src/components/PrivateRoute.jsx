import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [isLogin, setIsLogin] = useState(false);

	const verifyLogin = async () => {
		const response = await axios
			.get('http://localhost:5000/api/auth/me', {
				withCredentials: true,
			})
			.then(() => setIsLogin(true))
			.catch(err => console.log(err.message));
	};

	useEffect(() => {
		verifyLogin();
		return 0;
	}, []);

	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to /login page
		<Route
			{...rest}
			render={props =>
				isLogin ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

export default PrivateRoute;
