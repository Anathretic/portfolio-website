import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'

const NavbarItem = ({ title, classProps }) => {
	return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<nav className='w-full flex md:justify-center justify-between items-center p-4'>
			<div className='md:flex-[0.5] flex-initial justify-center items-center'>
				<p className='w-32 cursor-pointer text-white'>Logo section</p>
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				{['Item', 'Item', 'Item'].map((item, index) => (
					<NavbarItem key={item + index} title={item} classProps={'hover:text-red-700 transition duration-300'}/>
				))}
				<li className='bg-[#b91c1c] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>Download</li>
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
					<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md text-white bg-black'>
						<li className='text-xl self-start p-3 my-2 cursor-pointer'>
							<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
						</li>
						{['Item', 'Item', 'Item'].map((item, index) => (
							<NavbarItem key={item + index} title={item} classProps={'my-2 text-lg self-center'} />
						))}
                        <li className='bg-[#b91c1c] p-3 px-7 mx-4 my-3 rounded-full cursor-pointer self-center'>Download</li>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
