import { useEffect, useState } from 'react';
import { NavbarAnchorItem, NavbarHashItem } from './components/NavbarItem';
import { navbarItems } from './navbarItems/navbarItems';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { scrollToTop } from '../../utils/scrollToTop';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 80) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`fixed w-full z-50 transition duration-300 ${isScrolled ? 'bg-[#141d3bf6]' : 'bg-transparent'}`}>
			<div className='w-full h-[80px] flex md:justify-center justify-between items-center p-4 tracking-[2px]'>
				<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
					<div className='flex'>
						<img src='/logo.svg' alt='Logo that refreshes the page' className='mr-1' />
						<p className='cursor-default text-white uppercase'>konrad wojtyło</p>
					</div>
				</div>
				<nav>
					<ul className='text-white mf:flex hidden list-none flex-row justify-between items-center flex-initial'>
						{navbarItems.map(({ title, section }) => (
							<NavbarHashItem key={title} title={title} section={section} />
						))}
						<NavbarAnchorItem section='/privacy-policy' title='privacy' onClick={scrollToTop} />
						<li className='ml-4'>
							<a
								className='p-1 hover:text-red-500 transition duration-300'
								href='https://www.linkedin.com/in/konrad-wojtylo'
								target='_blank'
								rel='noreferrer'>
								<BsLinkedin fontSize={22} />
							</a>
						</li>
					</ul>
				</nav>
				<div className='flex relative'>
					{toggleMenu || (
						<HiMenuAlt4
							fontSize={32}
							className='text-white mf:hidden cursor-pointer'
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<nav>
							<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl mf:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-black animate-slide-in'>
								<li className='text-xl self-start my-2 cursor-pointer'>
									<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
								</li>
								{navbarItems.map(({ title, section }) => (
									<NavbarHashItem
										key={title}
										title={title}
										section={section}
										classProps={'mb-5'}
										onClick={() => setToggleMenu(false)}
									/>
								))}
								<NavbarAnchorItem
									section='/privacy-policy'
									title='privacy'
									onClick={() => {
										setToggleMenu(false);
										scrollToTop();
									}}
								/>
								<li className='mt-4'>
									<a
										className='p-1 hover:text-red-500 transition duration-300'
										href='https://www.linkedin.com/in/konrad-wojtylo'
										target='_blank'
										rel='noreferrer'>
										<BsLinkedin fontSize={22} />
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
