import React from 'react';
import { Field, Form, Formik, isSubmitting } from 'formik';
import { login } from '../store/user';
import { useDispatch } from 'react-redux';

//LOCAL IMPORTS

import {} from '../store/user';

function Login() {
	const dispatch = useDispatch();

	return (
		<div className='h-screen w-screen flex justify-center items-center bg-white'>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => dispatch(login(values))}
			>
				{({ isSubmitting }) => (
					<Form className='flex flex-col w-96 p-8 items-start space-y-10'>
						<h1 className='text-4xl font-bold'>Login</h1>
						<div className='w-full space-y-2'>
							<label
								htmlFor='email'
								className='font-semibold text-xs uppercase text-grey-200'
							>
								Email
							</label>
							<Field
								name='email'
								type='email'
								className='bg-white border border-gray-500 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
							/>
						</div>
						<div className='w-full space-y-2'>
							<label
								htmlFor='password'
								className='font-semibold text-xs uppercase text-grey-200'
							>
								Password
							</label>
							<Field
								name='password'
								type='password'
								className='bg-white border border-gray-500 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
							/>
						</div>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full px-2 py-3 bg-black text-white font-bold text-xs rounded-md uppercase tracking-wider'
						>
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Login;

// const { user } = useSelector(state => state.user);
