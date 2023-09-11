const inputStyles =
	'my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-gradient'

export const FormInput = props => {
	const { label, onChange, errorMessage, ...inputProps } = props

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label className='text-white mt-5'>{label}:</label>
			<input className={`${inputStyles}`} onChange={onChange} {...inputProps} />
			<span className='text-center'>{errorMessage}</span>
		</div>
	)
}

export const TextInput = props => {
	const { label, onChange, errorMessage, ...textProps } = props

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<label className='text-white mt-5'>{label}:</label>
			<textarea
				className={`min-h-[96px] max-h-[256px] ${inputStyles}`}
				onChange={onChange}
				minLength={50}
				maxLength={1000}
				{...textProps}
			/>
			<span className='text-center'>{errorMessage}</span>
		</div>
	)
}
