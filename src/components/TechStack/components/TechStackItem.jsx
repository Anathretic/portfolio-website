export const TechStackItem = ({ title, level }) => {
	return (
		<div className='w-full py-1 mf:w-10/12 flex justify-between text-base mobile:text-lg'>
			<p>{title}</p>
			<p>{level}</p>
		</div>
	);
};
