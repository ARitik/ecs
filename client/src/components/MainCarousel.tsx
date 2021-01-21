import axios from 'axios';
import { useState, useEffect } from 'react';

const MainCarousel: React.FC = params => {
	const [products, setProducts] = useState([{}]);
	const fetchProducts = async () => {
		const response = await axios.get('/products?num=2');

		console.log(response.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='flex flex-row items-center justify-between w-full p-12 bg-blue-50 h-72'>
			<div className='flex flex-col h-full space-y-2 w-72'>
				<h1 className='text-4xl font-bold'>Restock your Library.</h1>
				<p className='font-semibold text-blue-400 text-md'>
					Shop for books , both old and new.
				</p>
			</div>
		</div>
	);
};

export default MainCarousel;
