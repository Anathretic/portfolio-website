import { PrivacyPolicyMailToBtn } from './components/PrivacyPolicyMailToBtn';

const PrivacyPolicy = () => {
	const policyBoxStyle = 'p-3 mt-5 max-[360px]:w-full w-9/12 md:w-2/3 lg:w-1/2';

	return (
		<main>
			<section className='flex justify-center items-center flex-col w-full p-5 text-white text-sm md:text-base'>
				<div className='w-full max-w-[1600px] pt-[80px] min-h-[90vh] md:min-h-[85vh] md:pt-[100px] lg:pt-[120px] flex justify-center items-center flex-col'>
					<div className={policyBoxStyle}>
						<p className='mb-3'>Data administrator</p>
						<p className='font-light'>
							The data controller is <span className='font-normal'>Konrad Wojtyło</span>, owner of the website.
						</p>
					</div>
					<div className={policyBoxStyle}>
						<p className='mb-3'>When do I collect your data?</p>
						<p className='font-light'>
							User data (such as your e-mail address) is collected when you use the contact form only.
						</p>
					</div>
					<div className={policyBoxStyle}>
						<p className='mb-3'>How I process data?</p>
						<p className='font-light'>
							Your data collected via the contact form is processed for contact purposes only. I do not share or sell
							them to anyone.
						</p>
						<p className='font-light'>Use of the contact form is optional.</p>
					</div>
					<div className={policyBoxStyle}>
						<p className='mb-3'>Other information</p>
						<p className='font-light'>
							If you have any further questions, please contact me at:{' '}
							<PrivacyPolicyMailToBtn label='konrad.wojtylo.9@gmail.com' mailto='mailto:konrad.wojtylo.9@gmail.com' />
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PrivacyPolicy;
