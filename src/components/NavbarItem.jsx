import { NavLink } from 'react-router-dom'


const NavbarItem = ({ title, section, classProps, onClick }) => {
	return (
		<li className={`mx-4 cursor-pointer hover:text-red-500 transition duration-300 ${classProps}`}>
			<NavLink className='p-2' to={section} onClick={onClick}>{title}</NavLink>
		</li>
	)
}

export default NavbarItem