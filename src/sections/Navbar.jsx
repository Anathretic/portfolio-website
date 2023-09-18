import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { NavbarItem } from '../components/NavbarItem'
import CurriculumFile from '../../download/curriculum.pdf'

const navbarItems = [
	{
		title: 'home',
		section: '/',
	},
	{
		title: 'contact',
		section: '/contact',
	},
	{
		title: 'policy',
		section: '/privacy-policy',
	},
]

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleDownload = () => {
		const link = document.createElement('a')
		link.download = 'Konrad-Wojtylo-CV'
		link.href = CurriculumFile
		link.click()
	}

	const handleLogo = () => {
		window.location.href = '/'
	}

	return (
		<nav className='w-full h-[80px] flex md:justify-center justify-between items-center p-4'>
			<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
				<div className='flex'>
					<img src='/logo.svg' alt='Logo that refreshes the page' className='mr-1' />
					<p className='cursor-pointer text-white uppercase' onClick={handleLogo}>
						konrad wojtyło
					</p>
				</div>
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				{navbarItems.map(({ title, section }) => (
					<NavbarItem key={title} title={title} section={section} />
				))}
				<li
					className='bg-[#b91c1c] py-2 px-7 ml-4 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 uppercase z-10'
					onClick={handleDownload}>
					resume
				</li>
			</ul>
			<div className='flex relative'>
				{toggleMenu || (
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
						{navbarItems.map(({ title, section }) => (
							<NavbarItem
								key={title}
								title={title}
								section={section}
								classProps={'mb-5'}
								onClick={() => setToggleMenu(false)}
							/>
						))}
						<li
							className='bg-[#b91c1c] p-3 px-7 mx-4 my-3 rounded-full cursor-pointer uppercase self-center'
							onClick={handleDownload}>
							resume
						</li>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
