import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import User from './User';
import PrivateRoute from '../components/PrivateRoute';

export default function RHandler() {
	return (
		<Router>
			<Switch>
				<Route component={Login} path='/login' />
				<Route component={Register} path='/register' />
				<Route component={User} path='/user' />
				<Route component={Home} path='/' />
			</Switch>
		</Router>
	);
}
