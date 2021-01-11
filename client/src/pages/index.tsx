import Head from 'next/head';

export default function Home() {
	return (
		<div className='w-screen h-screen'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='container mx-auto '>
				<img
					src='/images/books.jpg'
					className='object-cover w-full bg-center h-96'
				/>
				<div className='flex flex-wrap items-baseline justify-around w-5/6 px-2 pt-12 pb-12 mx-auto space-y-12 transform -translate-y-40 bg-white rounded-lg shadow-md md:pt-4'>
					<div className='w-full p-4 mx-12 border rounded-full'></div>
					<div className='bg-gray-200 w-80 h-72'></div>
					<div className='bg-gray-200 w-80 h-72'></div>
					<div className='bg-gray-200 w-80 h-72'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
					<div className='w-80 h-72 bg-gray-50'></div>
				</div>
			</div>
		</div>
	);
}
