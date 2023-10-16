import { Route, Routes } from 'react-router-dom';
import { Navbar, Welcome, Footer, Extras, Contact, PageNotFound, PrivacyPolicy } from './sections';
import { CookieBaner } from './components/CookieBaner';
import { ScrollToTop } from './utils/ScrollToTop';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<Extras />
							</>
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
