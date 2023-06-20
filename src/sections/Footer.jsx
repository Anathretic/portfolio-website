import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {

    const currentYear = new Date().getFullYear()

	return (
		<div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer text-white'>
			<div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-20' />
			<div className='sm:w-[90%] w-full flex justify-between items-center my-5'>
				<p className='text-sm text-center mf:text-base'>&copy; {currentYear} Test Title</p>
				<div className='flex flex-end '>
					<a className='cursor-pointer mr-8' href='https://github.com/' target='_blank' rel='noreferrer'>
						<BsGithub fontSize={22} className='hover:text-red-800 transition duration-300' />
					</a>
					<a className='cursor-pointer' href='https://pl.linkedin.com/' target='_blank' rel='noreferrer'>
						<BsLinkedin fontSize={22} className='hover:text-red-800 transition duration-300' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
