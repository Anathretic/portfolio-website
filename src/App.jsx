import { Route, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Extras, Contact, PageNotFound } from './sections'

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='gradient-bg-first'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Navbar />
								<Welcome />
								<Extras />
								<Footer bgGradient='gradient-bg-second' />
							</>
						}
					/>
					<Route
						path='/contact'
						element={
							<>
								<Navbar />
								<Contact />
								<Extras />
								<Footer bgGradient='gradient-bg-second' />
							</>
						}
					/>
					<Route
						path='*'
						element={
							<>
								<Navbar />
								<PageNotFound />
								<Footer bgGradient='' />
							</>
						}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
