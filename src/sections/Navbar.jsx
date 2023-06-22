import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ title, section, classProps, onClick }) => {
	return (
		<li className={`mx-4 cursor-pointer hover:text-red-500 transition duration-300 ${classProps}`}>
			<NavLink className='p-2' to={section} onClick={onClick}>{title}</NavLink>
		</li>
	)
}

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<nav className='w-full flex md:justify-center justify-between items-center p-4'>
			<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
				<p className='w-32 cursor-pointer text-white'>Logo section</p>
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				<NavbarItem title='Home' section='/' />
				<NavbarItem title='Contact' section='/contact' />
				<li className='bg-[#b91c1c] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
					Download
				</li>
			</ul>
			<div className='flex relative'>
				{toggleMenu ? (
					<AiOutlineClose
						fontSize={32}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<HiMenuAlt4
						fontSize={32}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-black animate-slide-in'>
						<li className='text-xl self-start my-2 cursor-pointer'>
							<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
						</li>
						<NavbarItem title='Home' section='/' classProps={'mb-5'} onClick={() => {
							setToggleMenu(false)
						}}/>
						<NavbarItem title='Contact' section='/contact' classProps={'mb-5'} onClick={() => {
							setToggleMenu(false)
						}}/>
						<li className='bg-[#b91c1c] p-3 px-7 mx-4 my-3 rounded-full cursor-pointer self-center' >Download</li>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
