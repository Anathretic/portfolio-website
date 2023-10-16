import { Link } from 'react-router-dom';

export const MailToButton = ({ mailto, label, classProps, ...otherProps }) => {
	const handleMailto = e => {
		e.preventDefault();
		window.location.href = mailto;
	};
	return (
		<Link
			to='#'
			onClick={handleMailto}
			{...otherProps}
			className={`font-normal hover:text-red-500 transition duration-300 ${classProps}`}>
			{label}
		</Link>
	);
};
