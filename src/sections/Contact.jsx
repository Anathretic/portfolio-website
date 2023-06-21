import { Link } from 'react-router-dom'

const Contact = () => {
	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-start items-start flex-col mf:mr-20'>
					<h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
						Main Title <br /> with fancy gradient
					</h1>
					<p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<Link
						to='/'
						className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-full rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
						<p className='text-white text-base'>Home</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
