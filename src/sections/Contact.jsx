import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

import { InputData } from '../data/InputData';
import { TextareaData } from '../data/TextareaData';
import { FormInput, FormTextarea } from '../components/Inputs';
import { Loader } from '../components/Loader';
import { BsCheck2All } from 'react-icons/bs';

import { useContactFormButton } from '../hooks/useContactFormButton';
import { useContactFormInputs } from '../hooks/useContactFormInputs';

const Contact = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [recaptchaErrorValue, setRecaptchaErrorValue] = useState('');

	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	const refCaptcha = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setRecaptchaErrorValue('');
		const token = await refCaptcha.current.getValue();
		refCaptcha.current.reset();

		const params = {
			...values,
			'g-recaptcha-response': token,
		};

		if (token) {
			const sendMsg = emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(
					function () {
						setValues({ username: '', email: '', subject: '', message: '' });
						setButtonText(<BsCheck2All color='#50eb02' fontSize={24} />);
					},
					function () {
						setRecaptchaErrorValue('Something went wrong..');
					}
				)
				.finally(() => {
					setFocused(false);
					setIsLoading(false);
				});
			return sendMsg;
		} else {
			setIsLoading(false);
			setRecaptchaErrorValue("Don't be a 🤖!");
		}
	};

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 w-full'>
				<div className='flex flex-col flex-1 items-center justify-start w-full mobile:w-96 mf:mt-0 mt-10'>
					<form
						onSubmit={handleSubmit}
						className='px-5 py-2 sm:w-96 mf:w-[500px] w-full flex flex-col justify-start items-center blue-gradient mt-10'>
						<h3 className='p-5 text-2xl text-white text-gradient text-center'>Contact me!</h3>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{InputData.map(input => (
							<FormInput
								key={input.id}
								htmlFor={input.name}
								{...input}
								value={values[input.name]}
								onChange={handleInputValue}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}
						{TextareaData.map(text => (
							<FormTextarea
								key={text.id}
								htmlFor={text.name}
								{...text}
								value={values[text.name]}
								onChange={handleInputValue}
								onInvalid={handleFocus}
								focused={focused.toString()}
							/>
						))}
						<div className={`${isMobile ? 'h-48 mt-3' : 'h-32 mt-6'} md:ml-0.5 ml-1.5`}>
							<ReCAPTCHA
								key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
								size={isMobile ? 'compact' : 'normal'}
								sitekey={import.meta.env.VITE_SITE_KEY}
								ref={refCaptcha}
							/>
							<div className={`${isMobile ? 'h-12' : 'h-10 mt-1'} flex items-center justify-center`}>
								<p className='text-[#ef4444] text-lg font-bold text-center'>{recaptchaErrorValue}</p>
							</div>
						</div>
						<div className='h-[1px] w-full bg-gray-400' />
						<div className='flex justify-center items-center h-28 mt-2'>
							{isLoading ? (
								<Loader />
							) : (
								<button
									type='submit'
									className='flex justify-center bg-[#b91c1c] p-3 w-32 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 text-white uppercase'>
									{buttonText}
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
