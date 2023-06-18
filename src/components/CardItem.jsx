import { FiChevronsRight } from 'react-icons/fi'

const CardItem = ({ title, text, webHandle, gitHandle }) => {
	return (
		<div>
			<div className='p-3 flex justify-end items-start flex-col rounded-xl h-60 w-96 my-3 card'>
				<div className='flex justify-between flex-col w-full h-full'>
					<div className='flex justify-between items-start'>
						<a className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white cursor-pointer' href={webHandle} target='_blank' rel='noreferrer'>
							<FiChevronsRight fontSize={24} />
						</a>
					</div>
					<div>
						<p className='text-white font-light text-lg mt-1'>{title}</p>
					</div>
				</div>
			</div>
			<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white'>
				<p>
					{text}
				</p>
				<div className='h-[1px] w-full bg-gray-400 my-2'></div>
				<a className='bg-[#b91c1c] py-3 px-10 mt-3 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300' href={gitHandle} target='_blank' rel='noreferrer'>
					GitHub
				</a>
			</div>
		</div>
	)
}

export default CardItem
