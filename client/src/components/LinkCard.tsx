interface LinkCardProps {
	title: string;
	subtitle: string;
	description: string;
	link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
	title,
	subtitle,
	description,
	link,
}) => {
	return (
		<div className='flex flex-col items-start justify-center w-1/2 h-full px-4 space-y-2 text-xs text-gray-600 md:w-80'>
			<h2 className='text-xs font-normal tracking-wider text-blue-400 uppercase'>
				{title}
			</h2>
			<p className='font-semibold'>{subtitle}</p>
			<p className='text-xs font-light '>{description}</p>
			<p className='pt-2 text-blue-400 cursor-pointer hover:underline'>
				{link}
			</p>
		</div>
	);
};

export default LinkCard;
