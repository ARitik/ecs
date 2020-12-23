import React from 'react';

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3 border border-gray-50 shadow-md'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<a
							className='text-xl font-bold uppercase tracking-widest leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-gray-700'
							href='#home'
						>
							Biblio
						</a>
						<button
							className='text-gray-400 cursor-pointer text-xs px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							Menu
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-sm leading-snug text-gray-400 hover:opacity-75'
									href='#pablo'
								>
									{/* <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i> */}
									<span className='ml-2'>Products</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-sm leading-snug text-gray-400 hover:opacity-75'
									href='#pablo'
								>
									{/* <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i> */}
									<span className='ml-2'>Account</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-sm leading-snug text-gray-400 hover:opacity-75'
									href='#pablo'
								>
									{/* <i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i> */}
									<span className='ml-2'>Cart</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
