
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Project from "./components/Project"
function App() {
  return (
    <div className="grid-cols-5 pt-30">
    <Navbar/>
    <Hero/>
    <Project/>
    </div>
  )
}

export default App