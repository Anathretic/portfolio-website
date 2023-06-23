import { useState } from 'react'
import InputData from '../data/InputData'
import TextInputData from '../data/TextInputData'
import { FormInput, TextInput } from '../components/Inputs'

const Contact = () => {
	const [focused, setFocused] = useState(false)
	const [values, setValues] = useState({
		username: '',
		email: '',
		subject: '',
	})

	const [textValue, setTextValue] = useState({
		message: '',
	})

	const handleSubmit = e => {
		e.preventDefault()

		setValues({ username: '', email: '', subject: '' }), setTextValue({ message: '' })
		setFocused(false)
	}

	const onChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value })
		setTextValue({ ...textValue, [e.target.name]: e.target.value })
	}

	const handleFocus = () => {
		setFocused(true)
	}

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-start items-start flex-col mf:mr-20'>
					<h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
						Contact us <br /> with fancy gradient
					</h1>
					<p className='text-left mt-5 text-white md:w-9/12 w-11/12 text-base font-bold'>Phone number: XXX-XXX-XXX</p>
					<p className='text-left mt-5 text-white md:w-9/12 w-11/12 text-base font-bold'>E-mail: developer@react.js</p>
					<p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-20 mt-10'>
					<form
						onSubmit={handleSubmit}
						className='px-5 py-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mt-10'>
						<h2 className='p-5 text-2xl text-white text-gradient'>Write to us!</h2>

						<div className='h-[1px] w-full bg-gray-400 my-1' />

						{InputData.map(input => (
							<FormInput
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}

						{TextInputData.map(text => (
							<TextInput
								key={text.id}
								{...text}
								value={textValue[text.name]}
								onChange={onChange}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}

						<div className='h-[1px] w-full bg-gray-400 mt-6' />

						<button
							type='submit'
							className='flex flex-row justify-center items-center mt-5 mb-3 bg-[#b91c1c] p-3 w-32 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 text-white'>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
