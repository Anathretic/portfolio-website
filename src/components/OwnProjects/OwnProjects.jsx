import { OwnProjectsItem } from './components/OwnProjectsItem';
import { ownProjectsConfigData } from '../../configData/ownProjectsConfigData';

import { FaFish, FaFishFins } from 'react-icons/fa6';

const OwnProjects = () => {
	return (
		<div id='other' className='flex flex-col w-full justify-center items-center'>
			<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex-1 flex flex-col justify-start items-start'>
					<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>
						You can also see <br /> some of my own <br />
						projects..
					</h2>
				</div>
			</div>
			<div className='relative flex-1 flex flex-col justify-start items-center'>
				<div className='relative flex-1 flex flex-col justify-start items-center z-20'>
					{ownProjectsConfigData.map(data => (
						<OwnProjectsItem
							key={data.id + data.title}
							icon={data.icon}
							title={data.title}
							subtitle={data.subtitle}
							href={data.href}
						/>
					))}
				</div>
				<FaFish className='absolute left-4 top-8 z-10' color='#83838398' fontSize={48} />
				<FaFishFins className='absolute left-12 bottom-16 z-10' color='#83838398' fontSize={40} />
				<FaFishFins className='absolute right-0 bottom-10 z-10' color='#83838398' fontSize={32} />
				<FaFish className='absolute right-10 top-20 z-10' color='#83838398' fontSize={42} />
			</div>
			<div className='w-[90%] max-w-[1672px] h-[1px] bg-gray-400 mt-24' />
		</div>
	);
};

export default OwnProjects;
