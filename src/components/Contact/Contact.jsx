import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ContactForm } from './components/ContactForm';

const Contact = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [recaptchaErrorValue, setRecaptchaErrorValue] = useState('');

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<div id='contact' className='flex w-full justify-center items-center'>
			<div className='flex flex-col items-center justify-between px-4 w-full'>
				<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
					<div className='flex-1 flex flex-col justify-start items-start'>
						<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>
							Write to me.. <br /> If you want!
						</h2>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full'>
					<ContactForm
						focused={focused}
						setFocused={setFocused}
						isLoading={isLoading}
						setIsLoading={setIsLoading}
						recaptchaErrorValue={recaptchaErrorValue}
						setRecaptchaErrorValue={setRecaptchaErrorValue}
						isMobile={isMobile}
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
