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
			className={`m-2 p-4 transition duration-300 ${!hover && 'white-gradient'} ${
				hover ? `${color} blue-gradient` : counter % 2 === 0 ? 'icon-default-color' : `${color}`
			}`}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}>
			{icon}
		</a>
	);
};
