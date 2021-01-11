import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import { useAuthState, useAuthDispatch } from '../context/auth';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import axios from 'axios';

const Navbar: React.FC = () => {
	const router = useRouter();

	const [toggle, setToggle] = useState(true);
	const dispatch = useAuthDispatch();
	const { authenticated, user } = useAuthState();

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
		<nav className='flex flex-col pt-2 border rounded'>
			{/* Navbar Main */}
			<div className='flex flex-row items-center justify-between h-16 px-4 md:px-20'>
				<div className='flex flex-row items-center space-x-4'>
					<h1 className='text-sm font-bold tracking-widest text-gray-600 uppercase'>
						Biblio
					</h1>
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
						<Link href='/login'>
							<a className='mt-2 text-sm font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
								<i className='fas fa-layer-group'></i>
							</a>
						</Link>
					)}
					<Link href='/cart'>
						<a className='mt-2 text-sm font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
							<i className='fas fa-shopping-cart'></i>
						</a>
					</Link>
					<i
						className='mt-2 text-gray-400 cursor-pointer md:pl-6 fas fa-user'
						onClick={e => toggler(e)}
					></i>
				</div>
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
							<Link href='/orders'>
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
