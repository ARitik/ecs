import InputGroup from '../components/InputGroup';
import dayjs from 'dayjs';
import { useAuthState, useAuthDispatch } from '../context/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function account() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	// const [password, setPassword] = useState('');
	const [createdAt, setCreatedAt] = useState('');
	const [uuid, setUuid] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();
	const dispatch = useAuthDispatch();
	const { authenticated, user } = useAuthState();
	useEffect(() => {
		if (!authenticated) router.push('/login');
		else {
			setEmail(user.email);
			setName(user.name);
			setCreatedAt(dayjs(user.createdAt).format('DD-MM-YYYY hh:mm A'));
			setUuid(user.uid);
		}
	}, []);

	const handleAuth = e => {
		e.preventDefault();
		dispatch({ type: 'LOGOUT', payload: null });
		window.location.reload();
	};

	return (
		<div className='container px-2 pt-8 mx-auto'>
			<h1 className='text-sm font-semibold'>Account</h1>
			{/* Header */}
			<div className='flex flex-row items-baseline justify-between w-full pb-4 mt-6 border-b'>
				<div>
					<h2 className='text-xl font-medium'>
						Review your prior purchases with us and explore new reads on Biblio.
					</h2>
					<p className='pt-4 text-sm font-medium text-gray-500'>
						Signed in as {user.email}
					</p>
				</div>
				<button
					onClick={e => {
						handleAuth(e);
					}}
					className='w-24 h-8 py-2 mb-3 text-xs font-medium text-white bg-gray-700 rounded hover:bg-gray-600'
				>
					Sign Out
				</button>
			</div>
			{/* User details */}
			<h1 className='pt-8 text-sm font-semibold'>
				User Details{' '}
				<small className='ml-4 text-xs text-gray-400'>uuid: {uuid}</small>
			</h1>
			<div className='w-full pb-4 mt-6 border-b'>
				<div className='w-96'>
					<label
						htmlFor='email'
						className='mb-2 text-xs font-semibold text-gray-600'
					>
						Email
					</label>
					<InputGroup
						error={error}
						type='email'
						placeholder='Email'
						className='w-full mb-4'
						value={email}
						setValue={setEmail}
						name='email'
					/>
					<label
						htmlFor='name'
						className='mb-2 text-xs font-semibold text-gray-600'
					>
						Name
					</label>
					<InputGroup
						error={error}
						type='text'
						placeholder='Name'
						className='w-full mb-4'
						value={name}
						setValue={setName}
						name='name'
					/>
					<small className='text-gray-400'>
						Account Created On {createdAt}
					</small>
				</div>
			</div>
			{/* Orders Link */}
			<h1 className='pt-8 text-sm font-semibold'>Purchases and Orders</h1>
			<div className='flex flex-row items-baseline justify-between w-full pb-4 mt-6 space-x-6 md:w-96'>
				<h2 className='text-sm font-semibold'>Orders</h2>
				<div>
					<Link href={`/orders/${user.uid}`}>
						<a className='text-xs font-medium text-blue-400 hover:underline'>
							View your Orders
						</a>
					</Link>
					<p className='mt-1 text-xs text-gray-500'>
						Thank you for shopping with Biblio. Invoices for Listed Orders can
						be generated anytime.
					</p>
				</div>
			</div>
		</div>
	);
}
