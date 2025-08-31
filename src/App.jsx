import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import WorkExperience from "./components/WorkExperience"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import AnimatedBackground from "./components/AnimatedBackground"
import SEOHead from "./components/SEOHead"

function App() {
  return (
    <div className="relative min-h-screen">
      <SEOHead />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <WorkExperience />
      <Experience />
      <Contact />
    </div>
  )
}

export default App