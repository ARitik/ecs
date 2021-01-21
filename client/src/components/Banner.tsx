import { useAuthState } from '../context/auth';

const Banner: React.FC = params => {
	const { authenticated, user } = useAuthState();
	return (
		<div className='bg-white'>
			<div
				className='flex items-center justify-start object-top w-full px-4 bg-cover md:justify-center h-96'
				style={{
					backgroundImage: "url('/images/banner.jpg')",
				}}
			>
				<div className='flex flex-col items-start justify-center w-full space-y-4 md:space-y-2 md:items-center'>
					{authenticated && (
						<h1 className='text-4xl font-bold tracking-tight text-gray-100 capitalize'>
							Hello {user.name}
						</h1>
					)}
					<p className='text-sm text-gray-300 font-semi-bold hover:underline hover:text-white'>
						"The world always seems brighter when you've just made something
						that wasn't there before." - Neil Gaiman{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
