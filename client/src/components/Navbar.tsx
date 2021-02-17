import Link from 'next/link';
import React, { useState, Fragment, useEffect } from 'react';
import { useAuthState, useAuthDispatch } from '../context/auth';
import { useCartState } from '../context/cart';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import axios from 'axios';

const Navbar: React.FC = () => {
	const router = useRouter();

	const [toggle, setToggle] = useState(true);
	const dispatch = useAuthDispatch();
	const { authenticated, user } = useAuthState();
	const { total } = useCartState();

	var orderLink = '/login';

	if (authenticated) {
		orderLink = `/orders/${user.uid}`;
	}

	useEffect(() => {
		console.log(document.cookie);
		if (!authenticated) {
			tryLogInOnLoad();
		}
	}, []);

	const tryLogInOnLoad = async () => {
		try {
			const res = await axios.get('/auth/me');
			dispatch({ type: 'LOGIN', payload: res.data });
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleAuth = async e => {
		switch (authenticated) {
			case true:
				try {
					await axios.get('/auth/logout');
					dispatch({ type: 'LOGOUT', payload: null });
				} catch (error) {
					console.error(error.message);
				}
			case false:
				router.push('/login');
		}
	};

	const toggler = e => {
		setToggle(!toggle);
		console.log(toggle);
	};

	return (
		<nav className='flex flex-col pt-2 rounded'>
			{/* Navbar Main */}
			<div className='flex flex-row items-center justify-between h-16 px-4 md:px-12'>
				<div className='flex flex-row items-center space-x-4'>
					<Link href='/'>
						<a className='text-sm font-bold tracking-widest text-gray-600 uppercase'>
							Biblio
						</a>
					</Link>
					<div className='flex items-center py-2 pl-2 text-gray-400 border rounded w-52 bg-gray-50'>
						<i className='fas fa-search'></i>
						<input
							type='text'
							placeholder='Search'
							className='ml-2 text-xs font-bold outline-none bg-gray-50'
						/>
					</div>
				</div>
				<div className='flex flex-row items-center space-x-2'>
					{authenticated && (
						<Link href={orderLink}>
							<a className='flex flex-row items-center justify-center mt-2 text-sm font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
								<i className='text-lg fas fa-layer-group'></i>
							</a>
						</Link>
					)}
					<Link href='/cart'>
						<a className='flex flex-row items-center mt-2 space-x-1 text-lg font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
							<i className='fas fa-shopping-cart'></i>
							{total != 0 && (
								<div className='duration-200 scale-105 px-1.5 transform -translate-x-3 -translate-y-2 text-xs text-white bg-gray-800 rounded-full'>
									{total}
								</div>
							)}
						</a>
					</Link>
					<i
						className='mt-2 text-lg text-gray-400 cursor-pointer md:pl-2 fas fa-bars'
						onClick={e => toggler(e)}
					></i>
				</div>
			</div>
			<div className='flex flex-row items-center justify-between h-12 px-4 text-xs font-semibold bg-gray-800 md:px-12 text-gray-50'>
				<div className='flex flex-row space-x-4 text-xs'>
					<Link href='/products/deals'>
						<a className='hover:underline'>Today's Deals</a>
					</Link>
					<Link href={orderLink}>
						<a className='hover:underline'>Orders</a>
					</Link>
					<Link href='/help'>
						<a className='hover:underline'>Help</a>
					</Link>
				</div>
				<h1 className='cursor-pointer hover:underline'>
					Biblio's response to{' '}
					<span className='font-bold text-yellow-500 uppercase'>COVID-19</span>
				</h1>
			</div>

			{/* Menu On Toggle */}
			<div
				className={classNames(
					'self-end transition duration-200 border w-60 transform -translate-x-2 translate-y-14 z-50 bg-white absolute',
					{
						hidden: toggle,
					}
				)}
			>
				{/* Account Section */}
				{authenticated && (
					<div className='flex flex-row items-center px-4 py-2 space-x-4 hover:bg-gray-50'>
						<Link href='/account'>
							<img
								src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
								className='w-8 h-8 rounded-full cursor-pointer'
							/>
						</Link>
						<div>
							<h2 className='text-sm font-semibold text-gray-600 capitalize'>
								{user.name}
							</h2>
							<p className='text-xs text-gray-400'>{user.email}</p>
							<Link href='/account'>
								<a className='text-xs font-semibold text-blue-400 hover:underline'>
									Manage your account
								</a>
							</Link>
						</div>
					</div>
				)}

				{/* Menu List */}
				<div className='py-2 border border-l-0 border-r-0'>
					{authenticated && (
						<Fragment>
							<Link href='/account'>
								<a className='flex flex-row items-center justify-start py-2 pl-4 space-x-4 text-sm text-gray-600 hover:bg-gray-100'>
									<i className='text-gray-400 fas fa-user'></i>
									<p className='text-xs font-medium'>Account</p>
								</a>
							</Link>
							<Link href={orderLink}>
								<a className='flex flex-row items-center justify-start py-2 pl-4 space-x-4 text-sm text-gray-600 hover:bg-gray-100'>
									<i className='text-gray-400 fas fa-shopping-bag'></i>
									<p className='text-xs font-medium'>Purchases and Orders</p>
								</a>
							</Link>
						</Fragment>
					)}
					<Link href='/'>
						<a className='flex flex-row items-center justify-start py-2 pl-4 space-x-4 text-sm text-gray-600 hover:bg-gray-100'>
							<i className='text-gray-400 fas fa-question'></i>
							<p className='text-xs font-medium'>Help</p>
						</a>
					</Link>
					<Link href='/'>
						<a className='flex flex-row items-center justify-start py-2 pl-4 space-x-4 text-sm text-gray-600 hover:bg-gray-100'>
							<i className='text-gray-400 fas fa-comments'></i>
							<p className='text-xs font-medium'>Send Feedback</p>
						</a>
					</Link>
				</div>

				{/* Login / Logout */}
				<button
					onClick={e => handleAuth(e)}
					className='flex flex-row items-center justify-start w-full py-4 pl-4 space-x-4 text-sm text-gray-600 hover:bg-gray-100'
				>
					{authenticated ? (
						<i className='text-gray-400 fas fa-sign-out-alt'></i>
					) : (
						<i className='text-gray-400 fas fa-sign-in-alt'></i>
					)}

					<p className='text-xs font-medium'>
						Sign {authenticated ? 'Out' : 'In'}
					</p>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
