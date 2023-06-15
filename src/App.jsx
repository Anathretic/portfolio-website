import { Navbar, Welcome, Footer, Extras } from "./components"

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Footer />
        <Extras />
    </div>
  )
}

export default App
