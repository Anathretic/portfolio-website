import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../../utils/scrollToTop';

const CookieBanner = ({ ...otherProps }) => {
	return (
		<CookieConsent
			location='bottom'
			buttonText='OK!'
			style={{
				color: '#fff',
				backgroundColor: '#7f1d1d',
				fontSize: '12px',
				padding: '10px',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			buttonStyle={{
				backgroundColor: '#ffdf00',
				fontSize: '14px',
				padding: '10px',
				width: '100px',
				borderRadius: '8px',
			}}
			expires={1}
			{...otherProps}>
			<p className='max-[300px]:p-3 p-1'>
				This site uses cookies only for technical purposes (e.g. google reCaptcha). Learn more from the{' '}
				<Link to='/privacy-policy' onClick={scrollToTop} className='text-amber-300 underline'>
					privacy policy
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
