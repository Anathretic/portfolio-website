import { useState, useEffect } from 'react';

export const IconItem = ({ icon, color, link, timeout }) => {
	const [counter, setCounter] = useState(0);
	const [hover, setHover] = useState(false);

	useEffect(() => {
		const counterInterval = setInterval(() => {
			setCounter(counter + 1);
		}, timeout);

		return () => clearInterval(counterInterval);
	}, [counter]);

	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className={`m-2 p-4 white-gradient transition duration-300 ${
				hover ? `${color}` : counter % 2 === 0 ? 'text-white/25' : `${color}`
			}`}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}>
			{icon}
		</a>
	);
};
