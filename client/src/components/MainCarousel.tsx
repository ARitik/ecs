const MainCarousel: React.FC = params => {
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
