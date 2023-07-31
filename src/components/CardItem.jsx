import { useState, useEffect } from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { getRemainingTimeUntilMsTimestamp } from '../utils/CountdownCardItemUtils'

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00'
}

const CardItem = ({ title, webHandle, gitHandle, countdownMs }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

	useEffect(() => {
		const interval = setInterval(() => {
			updateRemainingTime(countdownMs)
		}, 1000)
		return () => clearInterval(interval)
	}, [countdownMs])

	const updateRemainingTime = (countdown) => {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
	}

	return (
		<div>
			<div className='p-3 flex justify-end items-start flex-col rounded-xl h-60 sm:w-96 my-3 card'>
				<div className='flex justify-between flex-col w-full h-full'>
					<div className='flex justify-between items-start'>
						<a className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white cursor-pointer hover:bg-red-500 transition duration-300' href={webHandle} target='_blank' rel='noreferrer'>
							<FiChevronsRight fontSize={24} />
						</a>
					</div>
					<div>
						<p className='text-white font-light text-lg mt-1'>{title}</p>
					</div>
				</div>
			</div>
			<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white'>
				<div>
					<p className='flex justify-center mb-3'>Time to release:</p>
					<div className='flex justify-center mb-3'>
						<span className='date-span'>{remainingTime.days}</span>
						<span className='date-span'>days</span>
						<span className='date-span'>{remainingTime.hours}</span>
						<span className='date-span'>hours</span>
						<span className='date-span'>{remainingTime.minutes}</span>
						<span className='date-span'>minutes</span>
						<span className='date-span'>{remainingTime.seconds}</span>
						<span className='date-span'>seconds</span>
					</div>
				</div>
				<div className='h-[1px] w-full bg-gray-400 my-2'></div>
				<a className='bg-[#b91c1c] py-3 px-10 mt-3 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300' href={gitHandle} target='_blank' rel='noreferrer'>
					GitHub
				</a>
			</div>
		</div>
	)
}

export default CardItem
