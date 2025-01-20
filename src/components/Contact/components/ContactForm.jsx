import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormInput, FormReCaptchaV2, FormSubmit, FormTextarea } from '../../FormElements/FormElements';
import {
	contactFormInputConfigData,
	contactFormTextareaConfigData,
} from '../../../configData/contactFormElementsConfigData';
import { useContactFormButton } from '../../../hooks/useContactFormButton';
import { useContactFormInputs } from '../../../hooks/useContactFormInputs';
import { BsCheck2All } from 'react-icons/bs';
import { FaDisease } from 'react-icons/fa6';

export const ContactForm = ({
	focused,
	setFocused,
	isLoading,
	setIsLoading,
	recaptchaErrorValue,
	setRecaptchaErrorValue,
	isMobile,
}) => {
	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();

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
		<form
			onSubmit={handleSubmit}
			className='relative px-5 py-2 sm:w-96 mf:w-[500px] w-full flex flex-col justify-start items-center blue-gradient'>
			<h3 className='p-5 text-2xl text-white text-gradient text-center'>Contact</h3>
			<div className='h-[1px] w-full bg-gray-400 my-1' />
			{contactFormInputConfigData.map(input => (
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
			{contactFormTextareaConfigData.map(text => (
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
			<FormReCaptchaV2 isMobile={isMobile} refCaptcha={refCaptcha} recaptchaErrorValue={recaptchaErrorValue} />
			<div className='h-[1px] w-full bg-gray-400' />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
			<FaDisease className='absolute bottom-[-3rem] right-0 md:right-[-3rem]' fontSize={100} color='#83838382' />
		</form>
	);
};
