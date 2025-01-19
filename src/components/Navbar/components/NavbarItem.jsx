import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const NavbarHashItem = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li className={`mx-2 mf:mx-4 hover:text-red-500 transition duration-300 ${classProps} uppercase z-10`}>
			<HashLink className='p-2' to={section} onClick={onClick} {...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};

export const NavbarAnchorItem = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li className={`mx-2 mf:mx-4 hover:text-red-500 transition duration-300 ${classProps} uppercase z-10`}>
			<NavLink className='p-2' to={section} onClick={onClick} {...linkProps}>
				{title}
			</NavLink>
		</li>
	);
};
