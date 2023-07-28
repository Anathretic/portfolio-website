import { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import InputData from '../data/InputData'
import TextInputData from '../data/TextInputData'
import emailjs from '@emailjs/browser'
import { FormInput, TextInput } from '../components/Inputs'
import Loader from '../components/Loader'

const Contact = () => {
	const [focused, setFocused] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [buttonText, setButtonText] = useState('Send')
	const [errorValue, setErrorValue] = useState('')
	const [values, setValues] = useState({
		username: '',
		email: '',
		subject: '',
	})

	const [textValue, setTextValue] = useState({
		message: '',
	})
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
	const captchaRef = useRef(null)
	const initialState = 'Send'

	useEffect(() => {
		if (buttonText !== initialState) {
			setTimeout(() => setButtonText(initialState), 2500)
		}
	}, [buttonText])

	const changeText = () => {
		setButtonText('SENT!')
	}

	const handleSubmit = async e => {
		e.preventDefault()

		setIsLoading(true)
		const token = captchaRef.current.getValue()
		captchaRef.current.reset()

		await axios
			.post(`http://localhost:${import.meta.env.VITE_PORT}/post`, { token })
			.then(res => {
				console.log(res)
				if (res.data === 'Human 👨 👩') {
					// DEV
					//emailjs requires your IDs and keys !!!!!!!

					emailjs
						.sendForm(
							`${import.meta.env.VITE_SERVICE_ID}`,
							`${import.meta.env.VITE_TEMPLATE_ID}`,
							e.target,
							`${import.meta.env.VITE_PUBLIC_KEY}`
						)
						.then(
							result => {
								console.log(result.text)
							},
							error => {
								console.log(error.text)
							}
						)

					setValues({ username: '', email: '', subject: '' }), setTextValue({ message: '' })
					setFocused(false)
					setIsLoading(false)
					setErrorValue('')
					changeText()
				} else if (res.data === 'Robot 🤖') {
					setIsLoading(false)
					setErrorValue("Don't be a 🤖!")
				}
			})
			.catch(error => {
				console.log(error)
			})
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

						{/* DEV */}
						{/* sitekey requires your Google Captcha API Key */}

						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							className='mt-10 ml-1.5 md:ml-0.5'
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={captchaRef}
						/>
						<p className='mt-5 text-red-600 text-lg font-bold'>{errorValue}</p>

						<div className='h-[1px] w-full bg-gray-400 mt-6' />

						{isLoading ? (
							<Loader />
						) : (
							<button
								type='submit'
								className='flex flex-row justify-center items-center mt-5 mb-3 bg-[#b91c1c] p-3 w-32 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 text-white'>
								{buttonText}
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
