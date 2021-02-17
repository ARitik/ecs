import Link from 'next/link';

export default function Success() {
	return (
		<div>
			<div className='flex flex-col justify-center p-20 space-y-2'>
				<h1 className='text-4xl font-semibold text-gray-800'>
					Purchase Succesful
				</h1>
				<Link href='/'>
					<a className='text-xs text-blue-500 cursor-pointer hover:underline'>
						Go to Home
					</a>
				</Link>
			</div>
		</div>
	);
}
