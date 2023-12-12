import { TechStackIconData } from '../data/TechStackIconData';
import { IconItem } from '../components/IconItem';

const TechStack = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='flex-1 flex flex-col w-full justify-start items-center'>
				<div className='w-[90%] h-[1px] bg-gray-400 mt-3' />
				<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
					<div className='flex-1 flex flex-col justify-start items-start'>
						<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>Technologies and tools..*</h2>
					</div>
				</div>
				<div className='flex flex-wrap justify-center text-8xl sm:w-9/12 max-w-[900px]'>
					{TechStackIconData.map(data => (
						<IconItem key={data.id} icon={data.icon} color={data.color} link={data.link} timeout={data.timeout} />
					))}
				</div>
				<p className='pt-6 text-white'>* but I use many more!</p>
				<div className='w-[90%] h-[1px] bg-gray-400 mt-20' />
			</div>
		</div>
	);
};

export default TechStack;
