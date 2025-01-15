const inputStyles =
	'my-1 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-gradient';

export const FormInput = ({ label, htmlFor, onChange, errorMessage, ...inputProps }) => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<input className={`${inputStyles}`} onChange={onChange} autoComplete='off' {...inputProps} />
			<span className='text-center h-8 rsm:h-4 text-[#ef4444]'>{errorMessage}</span>
		</div>
	);
};

export const FormTextarea = ({ label, htmlFor, onChange, errorMessage, ...textareaProps }) => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<textarea
				className={`min-h-[96px] max-h-[256px] ${inputStyles}`}
				onChange={onChange}
				minLength={5}
				maxLength={1000}
				autoComplete='off'
				{...textareaProps}
			/>
			<span className='text-center h-12 mobile:h-6 text-[#ef4444]'>{errorMessage}</span>
		</div>
	);
};
