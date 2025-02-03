import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { Loader } from '../OtherComponents/Loader';

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

export const FormReCaptchaV2 = ({ refCaptcha, recaptchaErrorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
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
	);
};

export const FormSubmit = ({ isLoading, buttonText }) => {
	return (
		<div className='flex justify-center items-center h-28 mt-2'>
			{isLoading ? (
				<Loader />
			) : (
				<button
					type='submit'
					className='flex justify-center bg-[#b91c1c] p-3 w-32 rounded-full hover:bg-[#7f1d1d] transition duration-300 text-white'>
					{buttonText}
				</button>
			)}
		</div>
	);
};
