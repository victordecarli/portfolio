import Contact from '../components/Contact/contact'
import Header from '../components/Hero/hero'
import Project from '../components/Projects/projects'
import { AboutList } from '../components/sections/about/aboutList'
import Languages from '../components/Techs/techs'
import Footer from '../components/ui/footer'
import Navbar from '../components/ui/nav'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Languages />
      <AboutList />
      <Contact />
      <Footer />
    </>
  )
}

export default App
