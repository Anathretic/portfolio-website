const ExtraCard = ({ color, title, icon, subtitle }) => {
	return (
		<div className='flex flex-row justify-start items-center p-4 m-2 cursor-pointer hover:bg-[#192445] white-glassmorphism text-white transition duration-300'>
			<div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
			<div className='ml-5 flex flex-col flex-1'>
				<h2 className='mt-2 text-white text-lg'>{title}</h2>
				<p className='my-2 text-white text-sm md:w-9/12'>{subtitle}</p>
			</div>
		</div>
	)
}

export default ExtraCard