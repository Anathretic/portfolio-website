import { Navbar, Welcome, Footer, Extras } from "./sections"

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Extras />
        <Footer />
    </div>
  )
}

export default App
