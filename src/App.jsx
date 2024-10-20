import './App.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'

function App() {
 

  return (
    <div>
      <section id="Home">
        <Navbar/>
        <Hero/>
        </section>
      <section ><Parallax type="me"/></section>
      <section id="About Me">Me</section>
      <section ><Parallax type="projects"/></section>
      <section id="Projects">Project</section>
      <section>Project</section>
      <section id="Qualifications">Resume</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
