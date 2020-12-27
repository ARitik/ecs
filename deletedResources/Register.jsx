import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = async e => {
		e.preventDefault();
		console.log('Submit');
		try {
			const response = await axios.post(
				'http://localhost:5000/api/auth/register',
				{ name, email, password }
			);
			if (response) {
				console.log(response);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {}, []);

	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<form
				className='flex flex-col w-96 p-8 items-start space-y-8'
				onSubmit={registerUser}
			>
				<h1 className='text-4xl font-bold'>Register</h1>

				<div className='w-full space-y-2'>
					<label
						htmlFor='name'
						className='font-semibold text-xs uppercase text-grey-200'
					>
						Username
					</label>
					<input
						name='name'
						type='text'
						className='bg-blue-50 text-grey-200 font-semibold rounded w-full py-3 px-4 mb-3'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>

				<div className='w-full space-y-2'>
					<label
						htmlFor='email'
						className='font-semibold text-xs uppercase text-grey-200'
					>
						Email
					</label>
					<input
						name='email'
						type='email'
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
					Register
				</button>
			</form>
		</div>
	);
}
