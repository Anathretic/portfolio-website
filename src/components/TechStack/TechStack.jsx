import { backendConfigData, databaseConfigData, frontendConfigData } from '../../configData/techStackConfigData';
import { TechStackItem } from './components/TechStackItem';

import { FaOtter, FaDisease } from 'react-icons/fa6';

const TechStack = () => {
	return (
		<div id='tech-stack' className='flex flex-col w-full justify-center items-center'>
			<div className='flex-1 flex flex-col w-full justify-start items-center'>
				<div className='w-[90%] max-w-[1672px] h-[1px] bg-gray-400' />
				<div className='flex flex-col items-center justify-between md:p-20 md:pb-16 py-12 px-4'>
					<div className='flex-1 flex flex-col justify-start items-start'>
						<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>
							Technologies and tools..*
						</h2>
					</div>
				</div>
				<div className='flex flex-wrap justify-center text-8xl w-11/12 max-w-[1400px]'>
					<div className='relative px-5 py-2 sm:w-96 mf:w-[500px] w-full flex flex-col justify-start items-center blue-gradient text-gray-300 mt-10 mf:m-4 md:mx-2'>
						<h3 className='p-5 text-2xl text-white text-gradient text-center'>Frontend</h3>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{frontendConfigData.map((item, id) => (
							<TechStackItem key={id} title={item.title} level={item.level} />
						))}
						<FaOtter className='absolute left-0 top-[-5.1rem]' color='#83838382' />
					</div>
					<div className='relative px-5 py-2 sm:w-96 mf:w-[500px] w-full flex flex-col justify-start items-center blue-gradient text-gray-300 mt-10 mf:m-4 md:mx-2'>
						<h3 className='p-5 text-2xl text-white text-gradient text-center'>Backend</h3>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{backendConfigData.map((item, id) => (
							<TechStackItem key={id} title={item.title} level={item.level} />
						))}
						<div className='h-[1px] w-full bg-gray-400 mt-[1.4rem] mb-1' />
						<h3 className='p-5 text-2xl text-white text-gradient text-center'>Database</h3>
						<div className='h-[1px] w-full bg-gray-400 my-1' />
						{databaseConfigData.map((item, id) => (
							<TechStackItem key={id} title={item.title} level={item.level} />
						))}
						<FaDisease
							className='absolute right-0 mf:right-[-2.6rem] bottom-[-5.5rem] mf:bottom-[-3.5rem]'
							color='#83838382'
						/>
					</div>
				</div>
				<p className='pt-6 text-white z-10'>* this is just the tip of the iceberg..</p>
				<div className='w-[90%] max-w-[1672px] h-[1px] bg-gray-400 mt-20' />
			</div>
		</div>
	);
};

export default TechStack;
