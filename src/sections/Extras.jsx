import ExtraCard from '../components/ExtraItem'
import ExtraData from '../data/ExtraData'

const Extras = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex-1 flex flex-col justify-start items-start'>
					<h1 className='text-white text-2xl sm:text-5xl py-2 text-gradient text-center'>
						Some of the many <br /> private projects..
					</h1>
				</div>
			</div>
			<div className='flex-1 flex flex-col justify-start items-center'>
				{ExtraData.map((id, title) => (
					<ExtraCard
						key={id + title}
						icon={id.icon}
						color={id.color}
						title={id.title}
						subtitle={id.subtitle}
						href={id.href}
					/>
				))}
			</div>
		</div>
	)
}

export default Extras
