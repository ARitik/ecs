import { Product } from '../types';
import Link from 'next/link';

const ProductCard: React.FC<Product> = ({
	name,
	category,
	author,
	image,
	stock,
	pid,
	price,
}) => {
	return (
		<div className='flex flex-col items-center justify-start p-4 pt-6 duration-200 transform bg-white shadow-xl w-80 hover:-translate-y-2 rounded-xl'>
			<Link href={`/products/${pid}`}>
				<img
					src={image}
					className='w-40 h-64 mt-4 shadow-xl cursor-pointer rounded-xl '
				/>
			</Link>
			<small className='pt-2 cursor-pointer hover:underline'>{category}</small>
			<h1 className='pt-1 font-semibold tracking-tight text-gray-600 capitalize text-md'>
				{name}
			</h1>
			<p className='text-xs font-light tracking-tight text-gray-400 capitalize'>
				{author}
			</p>
			<p className='pt-2 font-bold text-gray-800 text-md'>₹{price}</p>
			{stock ? (
				<p className='flex flex-row items-center justify-center p-2 mt-2 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full '>
					<div className='w-1 h-1 mr-1 bg-green-500 rounded-full'></div>
					In stock
				</p>
			) : (
				<p className='flex flex-row items-center justify-center p-2 mt-2 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full '>
					<div className='w-1 h-1 mr-1 bg-red-500 rounded-full'></div>
					Not in stock
				</p>
			)}
		</div>
	);
};

export default ProductCard;
