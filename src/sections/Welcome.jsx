import { Link } from 'react-router-dom'
import CardItem from '../components/CardItem'
import CardData from '../data/CardData'

const commonStyles =
	'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
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
					<Link
						to='/contact'
						className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-full rounded-full cursor-pointer hover:bg-[#7f1d1d] transition duration-300'>
						<p className='text-white text-base'>Contact</p>
					</Link>
					<div className='grid grid-cols-2 w-full mt-10'>
						<div className={`rounded-tl-2xl ${commonStyles}`}>Ability</div>
						<div className={`${commonStyles} rounded-tr-2xl`}>Ability</div>
						<div className={`${commonStyles}`}>Ability</div>
						<div className={`${commonStyles}`}>Ability</div>
						<div className={`${commonStyles} rounded-bl-2xl`}>Ability</div>
						<div className={`rounded-br-2xl ${commonStyles}`}>Ability</div>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-20 mt-10'>
					{CardData.map(
						(id, title) => (
							(
								<CardItem
									key={id + title}
									title={id.title}
									countdownMs={id.countdown}
									gitHandle={id.gitHandle}
									webHandle={id.webHandle}
								/>
							)
						)
					)}
				</div>
			</div>
		</div>
	)
}

export default Welcome
