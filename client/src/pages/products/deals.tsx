import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Deals = ({ products }) => {
	return (
		<div className='flex flex-row flex-wrap justify-center px-16 mx-auto space-x-0 space-y-8 md:space-x-8 md:justify-between'>
			<h1 className='w-full p-2 px-20 mt-12 text-4xl font-bold'>
				Today's Deals
			</h1>
			{products.map(product => {
				return (
					<ProductCard
						id={product.id}
						key={product.id}
						image={product.image}
						name={product.name}
						author={product.author}
						pid={product.pid}
						category={product.category}
						createdAt={product.createdAt}
						updatedAt={product.updatedAt}
						stock={product.stock}
						price={product.price}
					/>
				);
			})}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const response = await axios.get('/products');
	const products = await response.data;
	console.log(products);

	return {
		props: { products }, // will be passed to the page component as props
	};
};

export default Deals;
