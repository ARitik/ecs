import React from 'react';
import Logo from '../components/Logo';

const Navbar: React.FC = () => {
	return (
		<nav className='flex flex-col h-40 bg-gray-800'>
			<div className='flex flex-row items-center justify-between h-20 px-4'>
				<div className='flex items-center space-x-4'>
					<h1 className='text-lg font-semibold tracking-widest uppercase text-gray-50'>
						Biblio
					</h1>
					{/* Logo + Search  */}
					<div className='w-64 h-8 px-2 border border-gray-500 rounded'>
						<input
							type='text'
							placeholder='Search for books...'
							className='w-full h-full bg-transparent outline-none text-gray-50'
						/>
					</div>
				</div>
				{/* Cart + Login */}
				<div className='flex items-center'>
					{/* <div className='flex'>
						<i className='fas fa-shopping-cart text-gray-50'></i>
						<h2 className='hidden text-xs text-gray-50 md:inline'>
							Shopping Cart
						</h2>
					</div> */}
					{/* <button className='px-4 py-2 text-xs border border-gray-500 rounded text-gray-50'>
						Login
					</button> */}
				</div>
			</div>
			<div className='flex flex-col justify-around h-full px-4 border bg-gray-50'>
				{/* Greetings */}
				<h1 className='text-2xl text-gray-800 text-semibold'>
					Hello , John Doe
				</h1>

				{/* Navigation Links */}
				<ul className='flex flex-row space-x-4 text-xs font-medium text-gray-500'>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>My Cart</li>
					<li>Logout</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
