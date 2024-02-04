export const Loader = ({ className }) => {
	return (
		<div className={`py-3 ${className}`}>
			<div className='animate-spin rounded-full h-24 w-24 border-b-2 border-red-600' />
		</div>
	);
};
