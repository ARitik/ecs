import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Deals = ({ products }) => {
	return (
		<div className='container flex flex-row flex-wrap justify-center px-8 py-16 mx-auto md:justify-start'>
			{products.map(product => {
				return (
					<ProductCard
						key={product.id}
						image={product.image}
						name={product.name}
						author={product.author}
						pid={product.pid}
						category={product.category}
						createdAt={product.createdAt}
						updatedAt={product.updatedAt}
						stock={product.stock}
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
