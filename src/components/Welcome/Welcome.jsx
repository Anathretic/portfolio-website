import { Link } from 'react-router-dom';
import { WelcomeCardItem } from './components/WelcomeCardItem';
import { Loader } from '../OtherComponents/Loader';
import { useCardsQuery } from '../../hooks/useCardsQuery';
import { scrollToTop } from '../../utils/scrollToTop';

const Welcome = () => {
	const { data, isLoading, isError } = useCardsQuery();

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex mf:flex-row flex-col items-center mf:items-start justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:mr-20 mf:py-16'>
					<h1 className='text-4xl sm:text-5xl text-white text-gradient py-1 max-rsm:text-left text-center min-[400px]:text-left'>
						Frontend <br /> developer with..
						<br />
						Fancy gradients!
					</h1>
					<div className='text-left mt-5 text-white font-light text-base max-[350px]:text-left text-center mf:text-left'>
						<p className='mt-2'>Currently working on a project with small team..</p>
						<br />
						<p>But I am still looking for a full time job!</p>
						<br />
						<p>Feel free to check out my projects!</p>
						<br />
						<p>Do you have any questions?</p>
						<br />
						<p className='mb-2'>Click the button below and contact me!</p>
					</div>
					<Link
						to='/contact'
						onClick={scrollToTop}
						className='flex flex-row justify-center items-center my-5 bg-[#b91c1c] p-3 w-full max-mf:w-9/12 rounded-full hover:bg-[#7f1d1d] transition duration-300'>
						<p className='text-white text-base uppercase'>Contact</p>
					</Link>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
					{isLoading ? (
						<Loader className='flex items-center min-h-[600px]' />
					) : data ? (
						data.map(card => (
							<WelcomeCardItem
								key={card.id}
								countdown={card.countdown}
								webHandle={card.webHandle}
								gitHandle={card.gitHandle}
								text={card.text}
								imageID={card.imageID}
							/>
						))
					) : isError ? (
						<p className='flex items-center min-h-[600px] text-white xl:ml-12'>An error occured! Refresh the page..</p>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Welcome;
