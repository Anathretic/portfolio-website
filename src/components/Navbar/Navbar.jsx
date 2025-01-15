import { useState } from 'react';
import { NavbarItem } from './components/NavbarItem';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

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
];

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleLogo = () => {
		window.location.href = '/';
	};

	return (
		<header>
			<div className='w-full h-[80px] flex md:justify-center justify-between items-center p-4 tracking-[2px]'>
				<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
					<div className='flex'>
						<img src='/logo.svg' alt='Logo that refreshes the page' className='mr-1' />
						<p className='cursor-pointer text-white uppercase' onClick={handleLogo}>
							konrad wojtyło
						</p>
					</div>
				</div>
				<nav>
					<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem key={title} title={title} section={section} />
						))}
						<li className='ml-4'>
							<a
								className='bg-[#b91c1c] py-3 px-7 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 z-10'
								href='https://www.linkedin.com/in/konrad-wojtylo'
								target='_blank'
								rel='noreferrer'>
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
				<div className='flex relative'>
					{toggleMenu || (
						<HiMenuAlt4
							fontSize={32}
							className='text-white md:hidden cursor-pointer'
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<nav>
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
								<li className='mt-4'>
									<a
										className='bg-[#b91c1c] py-3 px-9 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300 z-10'
										href='https://www.linkedin.com/in/konrad-wojtylo'
										target='_blank'
										rel='noreferrer'>
										LinkedIn
									</a>
								</li>
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
