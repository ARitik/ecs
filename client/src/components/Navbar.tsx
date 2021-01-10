import Link from 'next/link';
import React from 'react';
import { useAuthState, useAuthDispatch } from '../context/auth';
import Logo from './Logo';

const Navbar: React.FC = () => {
	const dispatch = useAuthDispatch();
	const { authenticated, user } = useAuthState();

	return (
		<nav className='flex flex-col px-4 pt-2 md:px-20'>
			{/* Navbar Main */}
			<div className='flex flex-row items-center justify-between h-16'>
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
				<div className='flex flex-row items-center space-x-4'>
					<Link href='/login'>
						<a className='mt-2 text-sm font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
							<i className='fas fa-user-alt'></i>
						</a>
					</Link>
					<Link href='/cart'>
						<a className='mt-2 text-sm font-semibold text-gray-400 transition duration-200 hover:text-gray-600'>
							<i className='fas fa-shopping-cart'></i>
						</a>
					</Link>
					<i className='mt-2 text-gray-400 md:pl-6 fas fa-bars'></i>
				</div>
			</div>

			{/* Menu Items On Toggle */}
			<div className='flex items-center'></div>
		</nav>
	);
};

export default Navbar;
