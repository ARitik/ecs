import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

export function User({ user: { name, email, password, createdAt } }) {
	return (
		<div>
			<Navbar />
			<div className='w-screen'>
				<div className='mx-auto w-full md:w-4/5 flex flex-col items-start px-4 pt-4 md:pt-12'>
					<h1 className='text-sm md:text-lg font-semibold uppercase tracking-widest text-gray-700'>
						User Details
					</h1>
					<div className='flex flex-col items-start space-y-6 mt-6'>
						<h2 className='text-sm font-medium text-gray-600'>Name: {name}</h2>
						<h2 className='text-sm font-medium text-gray-600'>
							Email: {email}
						</h2>
						<h2 className='text-sm font-medium text-gray-600'>
							Password: {password}
						</h2>
						<h2 className='text-sm font-medium text-gray-600'>
							Account Created: {createdAt}
						</h2>
						<h2 className='text-sm font-medium text-gray-600'>Address: </h2>
						<h2 className='text-sm font-medium text-gray-600'>Orders: </h2>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(User);
