import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

//LOCAL IMPORTS
import { register } from '../store/user';

function Register() {
	const dispatch = useDispatch();

	return (
		<div className='h-screen w-screen flex justify-center items-center bg-white'>
			<Formik
				initialValues={{ email: '', password: '', name: '' }}
				onSubmit={values => dispatch(register(values))}
			>
				{({ isSubmitting }) => (
					<Form className='flex flex-col w-96 p-8 items-start space-y-10'>
						<h1 className='text-4xl font-bold'>Register</h1>
						<div className='w-full space-y-2'>
							<label
								htmlFor='name'
								className='font-semibold text-xs uppercase text-grey-200'
							>
								Name
							</label>
							<Field
								name='name'
								type='text'
								className='bg-white border border-gray-500 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
							/>
						</div>
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
							Register
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
