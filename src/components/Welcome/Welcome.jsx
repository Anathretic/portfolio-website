import { WelcomeCardItem } from './components/WelcomeCardItem';
import { Loader } from '../OtherComponents/Loader';
import { useCardsQuery } from '../../hooks/useCardsQuery';
import { FaOtter, FaFish, FaFishFins } from 'react-icons/fa6';

const Welcome = () => {
	const { data, isLoading, isError } = useCardsQuery();

	return (
		<section className='flex w-full justify-center items-center pt-[80px]'>
			<div className='flex mf:flex-row flex-col items-center mf:items-start justify-between md:p-20 py-12 px-4'>
				<div className='relative flex flex-1 justify-center items-center flex-col mf:mr-20 mf:py-16'>
					<h1 className='w-full text-4xl sm:text-5xl text-white text-gradient py-1 text-center mf:text-left'>
						Frontend <br className='hidden mf:block' /> developer <br /> with a
						<br className='hidden mf:block' /> bit of <br /> backend..
					</h1>
					<div className='text-left mt-5 text-white font-light text-base text-center mf:text-left'>
						<p className='mt-2'>Currently working on a few advanced projects..</p>
						<br />
						<p>But I am still looking for a full time job!</p>
						<br />
						<p>Feel free to check out my work!</p>
						<br />
						<p>Click the button below and..</p>
						<br />
						<p className='mb-2'>Welcome to my GitHub!</p>
					</div>
					<div className='w-full max-mf:flex max-mf:justify-center'>
						<a
							href='https://github.com/Anathretic/'
							target='_blank'
							rel='noreferrer'
							className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-9/12 max-mf:w-9/12 rounded-full hover:bg-[#7f1d1d] transition duration-300 cursor-pointer'>
							<p className='text-white text-base'>Mystery Button</p>
						</a>
					</div>
					<FaFishFins className='hidden lg:block absolute bottom-[-8rem] right-0' fontSize={96} color='#83838382' />
					<FaFish className='hidden lg:block absolute bottom-[-19rem] left-0' fontSize={96} color='#83838382' />
				</div>
				<div className='relative flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
					{isLoading ? (
						<Loader className='flex items-center min-h-[600px]' />
					) : data ? (
						<>
							<div className='relative flex flex-col flex-1 items-center justify-start w-full z-20'>
								{data.map(card => (
									<WelcomeCardItem
										key={card.id}
										countdown={card.countdown}
										webHandle={card.webHandle}
										gitHandle={card.gitHandle}
										text={card.text}
										imageID={card.imageID}
									/>
								))}
							</div>
							<FaOtter className='absolute top-[-2rem] left-0' fontSize={96} color='#83838382' />
							<FaFishFins className='absolute bottom-36 right-0' fontSize={96} color='#83838382' />
						</>
					) : isError ? (
						<p className='flex items-center min-h-[600px] text-white xl:ml-12'>An error occured! Refresh the page..</p>
					) : (
						''
					)}
				</div>
			</div>
		</section>
	);
};

export default Welcome;
