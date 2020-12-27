import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { attemptLogin } from '../actions/authActions';

export function Login({ dispatch, LoggedIn, user }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginUser = async e => {
		e.preventDefault();
		dispatch(attemptLogin(email, password));
	};

	if (LoggedIn) return <Redirect to='/user' />;
	else {
		return (
			<div className='h-screen w-screen flex justify-center items-center'>
				<form
					className='flex flex-col w-96 p-8 items-start space-y-8'
					onSubmit={loginUser}
				>
					<h1 className='text-4xl font-bold'>Login</h1>
					<div className='w-full space-y-2'>
						<label
							htmlFor='email'
							className='font-semibold text-xs uppercase text-grey-200'
						>
							Email
						</label>
						<input
							name='email'
							type='text'
							className='bg-blue-50 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='w-full space-y-2'>
						<label
							htmlFor='password'
							className='font-semibold text-xs uppercase text-grey-200'
						>
							Password
						</label>
						<input
							name='password'
							type='password'
							className='bg-blue-50 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button className='w-full px-2 py-3 bg-purple-500 text-white font-bold text-xs rounded-md uppercase tracking-wider'>
						Login
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	LoggedIn: state.auth.LoggedIn,
});

export default connect(mapStateToProps)(Login);
