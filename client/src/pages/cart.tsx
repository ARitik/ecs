import { useCartState, useCartDispatch } from '../context/cart';
import { useRouter } from 'next/router';
import { useAuthState } from '../context/auth';
import Link from 'next/link';

export default function Cart() {
	const { products, totalAmt, total } = useCartState();
	const { authenticated } = useAuthState();
	const dispatch = useCartDispatch();
	const router = useRouter();

	const handlePayment = () => {
		if (!authenticated) {
			router.push('/login');
		}
	};

	if (products.length == 0) {
		return (
			<div className='flex items-end justify-around p-20'>
				<h1 className='text-3xl font-bold text-gray-400 '>Cart is Empty</h1>
				<Link href='/products/deals'>
					<a className='text-sm font-light text-blue-500 hover:underline'>
						Shop for books
					</a>
				</Link>
			</div>
		);
	}

	return (
		<div className='container px-2 pt-8 mx-auto'>
			<div className='flex flex-row items-center justify-between pb-2 mb-2 border-b'>
				<h1 className='text-3xl font-bold'>Cart</h1>
				<h2 className='text-sm font-medium text-gray-400'>
					You have {total} items in your order.
				</h2>
			</div>

			{products.map(product => {
				return (
					<div className='flex flex-row items-center justify-between'>
						<div className='flex flex-row items-center px-2 py-6 space-x-8 '>
							<Link href={`/products/${product.pid}`}>
								<img
									src={product.image}
									className='cursor-pointer rounded-xl h-44'
								/>
							</Link>
							<div>
								<h1 className='text-xl font-semibold text-gray-800'>
									{product.name}
									<span className='text-sm font-light'>
										{' '}
										({product.author})
									</span>
								</h1>
								<p className='mt-1 text-sm font-bold text-gray-600'>
									₹{product.price}
								</p>
								<p className='mt-1 text-sm font-light text-gray-500'>
									Product Code : {product.pid}
								</p>
								<button
									className='text-xs text-red-500 hover:underline'
									onClick={() => dispatch({ type: 'DELETE', payload: product })}
								>
									Remove
								</button>
							</div>
						</div>

						<p className='text-xl font-bold text-gray-400'>₹{product.price}</p>
					</div>
				);
			})}
			<div className='flex flex-row justify-between my-6'>
				<Link href='/products/deals'>
					<a className='text-sm font-semibold text-blue-500 cursor-pointer hover:underline'>
						Continue Shopping
					</a>
				</Link>
				<div className='flex flex-row space-x-2'>
					<button
						className='px-2 py-1 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700'
						onClick={() => handlePayment()}
					>
						Proceed to Pay{'   '}
						<span className='px-2 text-xl font-semibold underline '>
							₹{totalAmt}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
