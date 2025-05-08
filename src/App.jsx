import { Outlet, Route, Routes } from 'react-router-dom';
import {
	Navbar,
	Welcome,
	TechStack,
	OwnProjects,
	Footer,
	Contact,
	PrivacyPolicy,
	PageNotFound,
	CookieBanner,
	HomeWrapper,
} from './components';

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
								<CookieBanner />
							</>
						}>
						<Route
							path='/'
							element={
								<HomeWrapper>
									<Welcome />
									<TechStack />
									<OwnProjects />
									<Contact />
								</HomeWrapper>
							}
						/>
						<Route path='/privacy-policy' element={<PrivacyPolicy />} />
						<Route path='*' element={<PageNotFound />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
