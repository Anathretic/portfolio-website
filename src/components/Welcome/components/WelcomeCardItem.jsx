import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from '../../../utils/countdownTimer';

import { FiChevronsRight } from 'react-icons/fi';

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};

export const WelcomeCardItem = ({ webHandle, gitHandle, countdown, text, imageID }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	const updateRemainingTime = countdown => {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			updateRemainingTime(countdown);
		}, 1000);
		return () => clearInterval(interval);
	}, [countdown]);

	return (
		<div className='w-full max-sm:max-w-[350px]'>
			<div
				className={`p-3 flex items-end flex-col rounded-xl h-60 sm:w-96 my-3 shadow-custom ${
					webHandle ? `card-${imageID}` : 'card animate-pulse'
				}`}>
				{webHandle && (
					<a
						className='w-12 h-12 rounded-full border-2 border-white flex justify-center items-center text-white hover:bg-[#b91c1c] transition duration-300'
						href={webHandle}
						target='_blank'
						rel='noreferrer'>
						<FiChevronsRight fontSize={28} />
					</a>
				)}
			</div>
			<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-gradient text-white'>
				<div>
					{webHandle ? (
						<>
							<p className='text-center mb-3'>{text}</p>
						</>
					) : (
						<>
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
						</>
					)}
				</div>
				<div className='h-[1px] w-full bg-gray-400 my-2'></div>
				<a
					className={`py-3 px-16 mt-3 rounded-full 
						${gitHandle ? 'bg-[#b91c1c] hover:bg-[#7f1d1d] transition duration-300' : 'bg-[#666666]'}`}
					href={gitHandle ? gitHandle : void 0}
					target='_blank'
					rel='noreferrer'>
					GitHub
				</a>
			</div>
		</div>
	);
};
