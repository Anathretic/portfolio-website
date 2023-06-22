import { Link } from 'react-router-dom'

const inputStyles =
	'my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'

const Contact = () => {
	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-start items-start flex-col mf:mr-20'>
					<h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
						Contact us <br /> with fancy gradient
					</h1>
					<p className='text-left mt-5 text-white md:w-9/12 w-11/12 text-base font-bold'>Phone number: XXX-XXX-XXX</p>
					<p className='text-left mt-5 text-white md:w-9/12 w-11/12 text-base font-bold'>E-mail: developer@react.js</p>
					<p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-20 mt-10'>
					<form className='px-5 py-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mt-10'>
						<h2 className='p-5 text-2xl text-white text-gradient'>Write to us!</h2>

						<div className='h-[1px] w-full bg-gray-400' />

						<label className='text-white mt-5'>Name:</label>
						<input className={`${inputStyles}`} placeholder='Name..' name='name' type='text' />
						<label className='text-white mt-5'>E-mail:</label>
						<input className={`${inputStyles}`} placeholder='E-mail..' name='e-mail' type='text' />
						<label className='text-white mt-5'>Message:</label>
						<textarea
							className={`min-h-[96px] max-h-[256px] ${inputStyles} mb-5`}
							placeholder='Your message..'
							name='message'></textarea>

						<div className='h-[1px] w-full bg-gray-400 my-2' />

						<Link
							to='/'
							className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-32 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
							<p className='text-white text-base'>Send</p>
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
