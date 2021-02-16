// import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useCartDispatch } from '../../context/cart';
import Head from 'next/head';

const Product = ({ product }) => {
	const router = useRouter();
	const dispatch = useCartDispatch();

	return (
		<div className='flex flex-wrap items-start justify-center w-full max-w-full px-8 my-4 xl:px-44 md:mt-10 md:justify-around md:space-x-4'>
			<Head>
				<title>
					Biblio - {product.name} by {product.author}
				</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='relative flex items-center justify-center w-full h-full max-w-2xl py-32 bg-gray-100 shadow md:w-1/2 '>
				<div className='absolute top-0 left-0 flex flex-row items-center justify-center bg-red-500 w-28 h-14'>
					<h1 className='text-sm font-bold tracking-widest uppercase text-gray-50'>
						SALE
					</h1>
				</div>
				{product.image ? (
					<div>
						<img src={product.image} />
					</div>
				) : (
					<h2 className='text-gray-400'>Sample Image</h2>
				)}
			</div>
			<div className='p-4 w-104'>
				<h1 className='pb-1 text-3xl font-bold text-gray-800'>
					{product.name}
				</h1>
				<div className='flex items-center justify-between mb-6'>
					<p className='text-xs'>
						by{' '}
						<span className='font-medium text-blue-500 cursor-pointer hover:underline'>
							{product.author}
						</span>{' '}
						<span className='text-gray-500'>(Author)</span>
					</p>
					<p className='text-xs text-gray-500'>
						Format: <span className='font-medium text-gray-800'>Paperback</span>{' '}
					</p>
				</div>
				<div className='flex flex-col items-center justify-center w-32 h-16 mt-2 transition duration-200 border cursor-pointer hover:border-blue-500'>
					<p className='mb-1 text-xs font-semibold text-gray-600'>Paperback</p>
					<h1 className='font-bold text-red-400'>₹{product.price}</h1>
				</div>
				<div className='flex flex-row items-center justify-between mt-6 mb-8 space-x-2'>
					<button
						className='flex flex-row items-center justify-between w-full h-12 px-6 text-xs font-medium text-white transition duration-200 bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800'
						onClick={() => dispatch({ type: 'ADD', payload: product })}
					>
						Add to Cart
						<i className='fas fa-shopping-cart'></i>
					</button>
					<button className='h-12 text-red-500 transition duration-200 border border-red-500 w-14 hover:bg-red-500 hover:text-white'>
						<i className='fas fa-bookmark'></i>
					</button>
				</div>
				<p className='text-xs font-semibold text-gray-400'>Book Preview</p>
				<p className='mt-4 text-sm text-gray-800'>{product.description}</p>
				<p className='flex items-center justify-center w-16 px-4 py-1 mt-4 text-xs font-medium text-white bg-gray-700 rounded-full'>
					{product.category}
				</p>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const { pid } = context.params;
	const res = await axios.get(`products/${pid}`);
	const product = await res.data;

	return {
		props: { product }, // will be passed to the page component as props
	};
};

export default Product;
