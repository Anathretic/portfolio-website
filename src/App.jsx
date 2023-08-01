import { Route, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Extras, Contact } from './sections'

const App = () => {
	return (
		<div className='min-h-screen'>
			<div className='gradient-bg-welcome'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
			<Extras />
			<Footer />
		</div>
	)
}

export default App
