import { Outlet, Route, Routes } from 'react-router-dom';
import { Navbar, Welcome, Footer, Extras, Contact, PageNotFound, PrivacyPolicy, TechStack } from './sections';
import { CookieBaner } from './components/CookieBaner';

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='bg-gradient'>
				<Routes>
					<Route
						element={
							<>
								<Navbar />
								<Outlet />
								<Footer />
								<CookieBaner />
							</>
						}>
						<Route
							path='/'
							element={
								<>
									<Welcome />
									<TechStack />
									<Extras />
								</>
							}
						/>
						<Route path='/contact' element={<Contact />} />
						<Route path='/privacy-policy' element={<PrivacyPolicy />} />
						<Route path='*' element={<PageNotFound />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
