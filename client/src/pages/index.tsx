import Head from 'next/head';
import LinkCard from '../components/LinkCard';
import Banner from '../components/Banner';
import MainCarousel from '../components/MainCarousel';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner />
			<div className='container flex flex-col px-2 mx-auto mt-2 space-y-2 bg-white'>
				<h2 className='p-2 mt-4 text-xs font-semibold text-center text-gray-600 bg-gray-100 rounded'>
					Shop stress-free from home. We’re ready to help, online or by phone.
				</h2>
				<div className='flex flex-row items-center justify-start w-full h-48 p-2 border-b-2'>
					<LinkCard
						title='Subscriptions'
						subtitle='Learn more about our monthly subscriptions.'
						description="We offer our editor's must have reads in an attractive package."
						link='Learn about it here'
					/>
					<LinkCard
						title='Newsletter'
						subtitle='Sign up for our Newsletter.'
						description="Don't miss out on the latest news and resources."
						link='Subscribe here'
					/>
				</div>
				<MainCarousel />
				<div className='flex flex-row flex-wrap items-center justify-center w-full pt-4 space-y-4 md:justify-between h-104'>
					<div className='h-full bg-gray-100 w-96'></div>
					<div className='h-full bg-gray-100 w-96'></div>
					<div className='h-full bg-gray-100 w-96'></div>
				</div>
			</div>
		</div>
	);
}
