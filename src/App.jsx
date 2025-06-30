import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Experience from "./components/Experience"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
    </div>
  )
}

export default App