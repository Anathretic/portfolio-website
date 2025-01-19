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
								<>
									<Welcome />
									<TechStack />
									<OwnProjects />
									<Contact />
								</>
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
