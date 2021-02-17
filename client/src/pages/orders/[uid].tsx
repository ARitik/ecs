import { GetServerSideProps } from 'next';
import dayjs from 'dayjs';

import axios from 'axios';
import Link from 'next/link';

export default function Orders({ orders, uid }) {
	return (
		<div className='container px-2 mx-auto mt-8 '>
			<h1 className='mb-12 text-4xl font-bold text-gray-800'>Orders</h1>
			{orders.map(order => {
				return (
					<div className='flex flex-row items-start justify-between px-4 py-8 mt-6 border rounded-xl h-52'>
						<div>
							<h2 className='mb-6 text-xs font-light text-gray-600'>
								Order ID: {order.oid}
							</h2>
							{order.products.map(product => {
								return (
									<p className='py-1 text-xs font-medium text-gray-600'>
										{product.name} by {product.author}{' '}
										<span className='font-light text-gray-400'>
											[{product.pid}]
										</span>
									</p>
								);
							})}
							<h4 className='mt-4 text-xs font-light text-blue-500'>
								Order placed on:{' '}
								{dayjs(order.createdAt).format('DD-MM-YYYY hh:mm A')}
							</h4>
						</div>
						<Link href={`/orders/bill/${order.oid}`}>
							<a className='p-2 text-sm font-semibold text-white bg-gray-800 rounded'>
								Generate Bill
							</a>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async context => {
	const { uid } = context.params;

	const response = await axios.get(`/orders/${uid}`);
	const orders = await response.data;

	return {
		props: { orders, uid }, // will be passed to the page component as props
	};
};
