const CardDescription = () => {
	return (
        <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white'>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nam obcaecati dolore illo libero sunt aspernatur,
			odio doloremque exercitationem perspiciatis voluptates voluptate?
		</p>
		<div className='h-[1px] w-full bg-gray-400 my-2'></div>
		<button className='bg-[#b91c1c] py-3 px-10 mt-3 rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
			GitHub
		</button>
	</div>
    )
}

export default CardDescription
