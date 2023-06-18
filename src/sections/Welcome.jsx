import CardItem from '../components/CardItem'
import CardDescription from '../components/CardDescription'

const commonStyles =
	'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
	const contactButton = () => {}

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-start items-start flex-col mf:mr-20'>
					<h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
						Main Title <br /> with fancy gradient
					</h1>
					<p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<button
						type='button'
						onClick={contactButton}
						className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-full rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
						<p className='text-white text-base'>Contact</p>
					</button>
					<div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
						<div className={`rounded-tl-2xl ${commonStyles}`}>Ability</div>
						<div className={`${commonStyles} max-[640px]:rounded-tr-2xl`}>Ability</div>
						<div className={`sm:rounded-tr-2xl ${commonStyles}`}>Ability</div>
						<div className={`sm:rounded-bl-2xl ${commonStyles}`}>Ability</div>
						<div className={`${commonStyles} max-[640px]:rounded-bl-2xl`}>Ability</div>
						<div className={`rounded-br-2xl ${commonStyles}`}>Ability</div>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start max-[640px]:w-96 w-full mf:mt-0 mf:ml-20 mt-10'>
					<CardItem title='title' />
					<CardDescription />
					<CardItem title='title' />
					<CardDescription />
					<CardItem title='title' />
					<CardDescription />
				</div>
			</div>
		</div>
	)
}

export default Welcome
