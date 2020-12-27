import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { login, logout, loginOnReload } from './store/user';

export default function App() {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);
	if (!user) {
		dispatch(loginOnReload());
	}
	if (user) {
		return (
			<div>
				Hi , {user.name}!
				<button
					onClick={() => {
						dispatch(logout());
					}}
				>
					Logout
				</button>
			</div>
		);
	}
	return (
		<div>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => {
					console.log(values);
					dispatch(login(values));
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field type='email' name='email' className='border border-black' />
						<Field
							type='password'
							name='password'
							className='border border-black'
						/>
						<button type='submit' disabled={isSubmitting}>
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
