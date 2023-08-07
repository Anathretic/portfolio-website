import { useState, useEffect } from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { getRemainingTimeUntilMsTimestamp } from '../utils/CountdownCardItemUtils'

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
}

const CardItem = ({ title, webHandle, countdownMs }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

	useEffect(() => {
		const interval = setInterval(() => {
			updateRemainingTime(countdownMs)
		}, 1000)
		return () => clearInterval(interval)
	}, [countdownMs])

	const updateRemainingTime = countdown => {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
	}

	return (
		<div className='w-full'>
			<div className='p-3 flex justify-end items-start flex-col rounded-xl h-60 sm:w-96 my-3 card'>
				<div className='flex w-full h-full'>
					<p className='text-white font-light text-lg mt-1 self-end'>{title}</p>
				</div>
			</div>
			<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white'>
				<div>
					<p className='flex justify-center mb-3'>Time to release:</p>
					<div className='flex justify-center mb-3'>
						<span className='date-span'>{remainingTime.days}</span>
						<span>:</span>
						<span className='date-span'>{remainingTime.hours}</span>
						<span>:</span>
						<span className='date-span'>{remainingTime.minutes}</span>
						<span>:</span>
						<span className='date-span'>{remainingTime.seconds}</span>
					</div>
				</div>
				<div className='h-[1px] w-full bg-gray-400 my-2'></div>
				<a
					className={
						webHandle
							? 'bg-[#b91c1c] py-3 px-10 mt-3 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'
							: 'bg-[#b91c1c] py-3 px-10 mt-3 rounded-full'
					}
					href={webHandle ? webHandle : void 0}
					target='_blank'
					rel='noreferrer'>
					Check!
				</a>
			</div>
		</div>
	)
}

export default CardItem
