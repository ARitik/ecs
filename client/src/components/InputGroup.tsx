import classNames from 'classnames';

interface InputGroupProps {
	className?: string;
	type: string;
	placeholder?: string;
	error: string | undefined;
	value: string;
	setValue: (str: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
	error,
	setValue,
	type,
	value,
	className,
	placeholder,
}) => {
	return (
		<div className={className}>
			<input
				type={type}
				placeholder={placeholder}
				className={classNames(
					'w-full p-2 transition duration-200 bg-gray-100 border hover:bg-white focus:bg-white',
					{ 'border-red-500': error }
				)}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<small className='font-medium text-red-600'>{error}</small>
		</div>
	);
};

//'w-full mb-4
export default InputGroup;
