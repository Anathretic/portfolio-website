import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
	const currentUrl = window.location.href;

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>Page not found | Konrad Wojtyło&apos;s Portfolio</title>
				<meta
					name='description'
					content="Oops! It looks like this page doesn't exist. Check the address or return to the home page."
				/>
				<meta property='og:title' content="Page not found | Konrad Wojtyło's Portfolio" />
				<meta property='og:description' content='Page not found. Redirect to my offer.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main>
				<section className='flex w-full justify-center items-center min-h-[600px] h-screen p-5'>
					<div className='flex flex-col items-center justify-between md:p-20 py-16 px-4'>
						<img src='/notfound-img.svg' alt='Error-404 image' className='w-[600px]' />
						<p className='text-white text-xs'>
							Error 404 image by{' '}
							<a
								className='text-white text-xs underline hover:text-red-500 transition duration-300'
								href='https://storyset.com/web'
								target='_blank'
								rel='noreferrer'>
								Storyset
							</a>
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default PageNotFound;
