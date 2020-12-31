import Head from 'next/head';

export default function Home() {
	return (
		<div className='w-screen h-screen bg-gray-100'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='w-40 h-40 bg-red-500'></div>
		</div>
	);
}
