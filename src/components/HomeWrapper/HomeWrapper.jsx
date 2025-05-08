import { Helmet } from 'react-helmet-async';

const HomeWrapper = ({ children }) => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>Konrad Wojtyło&apos;s Portfolio</title>
				<meta
					name='description'
					content='Frontend developer with a bit of backend. Want to see my projects? Feel free to check!'
				/>
				<meta
					name='keywords'
					content='frontend developer, backend, fullstack, portfolio, web developer, Konrad Wojtyło, React, JavaScript, TypeScript, projects'
				/>
				<meta name='author' content='Konrad Wojtyło' />
				<meta property='og:title' content="Konrad Wojtyło's Portfolio" />
				<meta
					property='og:description'
					content='Frontend developer with a bit of backend. Want to see my projects? Feel free to check!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://konrad-wojtylo.com/' />
				<link rel='canonical' href='https://konrad-wojtylo.com/' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};

export default HomeWrapper;
