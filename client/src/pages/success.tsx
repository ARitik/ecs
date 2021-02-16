import { useEffect } from 'react';

import axios from 'axios';
export default function Success() {
	return (
		<div>
			<div className='flex flex-col justify-center p-20 space-y-2'>
				<h1 className='text-4xl font-semibold text-gray-800'>
					Purchase Succesful
				</h1>
				<p className='text-xs text-blue-500 cursor-pointer hover:underline'>
					Download your invoice here.
				</p>
			</div>
		</div>
	);
}
