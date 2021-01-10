import { useState } from 'react';
import Link from 'next/link';

import InputGroup from '../components/InputGroup';
import Logo from '../components/Logo';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAuthDispatch } from '../context/auth';

export default function login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<any>({});

	const dispatch = useAuthDispatch();

	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post('/auth/login', { email, password });
			dispatch({ type: 'LOGIN', payload: res.data });
			router.push('/');
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center py-6 bg-white'>
			{/* Logo */}
			<div className='mb-4'>
				<Logo />
			</div>
			{/* Login Form */}
			<form
				className='flex flex-col items-start px-6 py-4 mb-4 border w-80'
				onSubmit={handleSubmit}
			>
				<h1 className='mb-6 text-xl'>Sign-In</h1>
				<InputGroup
					error={error.email}
					type='email'
					placeholder='Email'
					className='w-full mb-4'
					value={email}
					setValue={setEmail}
				/>
				<InputGroup
					error={error.password}
					type='password'
					placeholder='Password'
					className='w-full mb-4'
					value={password}
					setValue={setPassword}
				/>

				<button className='w-full h-8 py-2 mb-3 text-xs font-medium text-white bg-gray-700 rounded hover:bg-gray-600'>
					Continue
				</button>
				<p className='mb-4 text-xs'>
					By continuing , you agree to our{' '}
					<span className='text-blue-500 cursor-pointer'>User Agreement</span>{' '}
					and{' '}
					<span className='text-blue-500 cursor-pointer'>Privacy Policy</span>.
				</p>
			</form>
			<small className='mb-2 text-xs text-gray-500'>New to Biblio?</small>
			<div className='mb-4 w-80'>
				<Link href='/register'>
					<a className='flex items-center justify-center py-2 text-xs font-semibold text-gray-800 bg-gray-200 border border-gray-500 hover:bg-gray-100'>
						Create your Biblio Account
					</a>
				</Link>
			</div>
			<ul className='flex flex-row items-center justify-center px-2 py-1 space-x-6 rounded-full cursor-pointer bg-gray-50'>
				<li className='text-xs text-blue-500 hover:text-blue-600'>
					Conditions of use
				</li>
				<li className='text-xs text-blue-500 hover:text-blue-600'>Privacy</li>
				<li className='text-xs text-blue-500 hover:text-blue-600'>Help</li>
			</ul>
		</div>
	);
}
