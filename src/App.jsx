import { Route, Routes } from 'react-router-dom';
import { Navbar, Welcome, Footer, Extras, Contact, PageNotFound, PrivacyPolicy, TechStack } from './sections';
import { CookieBaner } from './components/CookieBaner';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<main>
								<Welcome />
								<TechStack />
								<Extras />
							</main>
						}
					/>
					<Route
						path='/contact'
						element={
							<>
								<Contact />
							</>
						}
					/>
					<Route
						path='/privacy-policy'
						element={
							<>
								<PrivacyPolicy />
							</>
						}
					/>
					<Route
						path='*'
						element={
							<>
								<PageNotFound />
							</>
						}
					/>
				</Routes>
				<Footer />
			</div>
			<CookieBaner />
		</div>
	);
};

export default App;
