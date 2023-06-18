import { FiChevronsRight } from "react-icons/fi";


const CardItem = ({ title }) => {
	return (
		<div className='p-3 flex justify-end items-start flex-col rounded-xl h-60 w-96 my-3 card'>
			<div className='flex justify-between flex-col w-full h-full'>
				<div className='flex justify-between items-start'>
					<button className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white'>
					<FiChevronsRight fontSize={24}/>
					</button>
				</div>
				<div>
					<p className='text-white font-light text-lg mt-1'>{title}</p>
				</div>
			</div>
		</div>
	)
}

export default CardItem