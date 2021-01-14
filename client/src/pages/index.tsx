import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='bg-white'>
				<div
					className='flex items-center justify-start object-top w-full px-4 bg-cover md:justify-center h-96'
					style={{
						backgroundImage: "url('/images/banner.jpg')",
					}}
				>
					<div className='flex flex-col items-start justify-center w-full space-y-4 md:space-y-2 md:items-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-100'>
							Hello , Stewie
						</h1>
						<p className='text-sm text-gray-300 font-semi-bold hover:underline hover:text-white'>
							"The world always seems brighter when you've just made something
							that wasn't there before." - Neil Gaiman{' '}
						</p>
					</div>
				</div>
			</div>
			<div className='container flex flex-col px-2 mx-auto mt-2 space-y-2 bg-white'>
				<h2 className='p-2 mt-4 text-xs font-semibold text-center text-gray-600 bg-gray-100 rounded'>
					Shop stress-free from home. We’re ready to help, online or by phone.
				</h2>
				<div className='flex flex-row items-center justify-start w-full h-48 p-2 border-b-2'>
					<div className='flex flex-col items-start justify-center w-1/2 h-full px-4 space-y-2 text-xs text-gray-600 md:w-80'>
						<h2 className='text-xs font-normal tracking-wider text-blue-400 uppercase'>
							Subscriptions
						</h2>
						<p className='font-semibold'>
							Learn more about our monthly subscriptions.
						</p>
						<p className='text-xs font-light '>
							We offer our editor's must have reads in an attractive package.
						</p>
						<p className='pt-2 text-blue-400 cursor-pointer hover:underline'>
							Learn about it here
						</p>
					</div>
					<div className='flex flex-col items-start justify-center w-56 h-full px-4 space-y-2'>
						<h2 className='text-xs font-normal tracking-wider text-blue-400 uppercase'>
							Newsletter
						</h2>
						<p className='text-xs font-semibold text-gray-600'>
							Sign up for our Newsletter.
						</p>
						<p className='text-xs font-light text-gray-600'>
							Don't miss out on the latest news and resources.
						</p>
						<p className='pt-2 text-xs text-blue-400 cursor-pointer hover:underline'>
							Subscribe here
						</p>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between w-full p-12 bg-blue-50 h-72'>
					<div className='flex flex-col h-full space-y-2 w-72'>
						<h1 className='text-4xl font-bold'>Restock your Library.</h1>
						<p className='font-semibold text-blue-400 text-md'>
							Shop for books , both old and new.
						</p>
					</div>
				</div>
				<div className='flex flex-row flex-wrap items-center justify-center w-full pt-4 space-y-4 md:justify-between h-104'>
					<div className='h-full bg-gray-100 w-96'></div>
					<div className='h-full bg-gray-100 w-96'></div>
					<div className='h-full bg-gray-100 w-96'></div>
				</div>
			</div>
		</div>
	);
}
