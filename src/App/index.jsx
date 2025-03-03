import { AboutList } from '../components/sections/about/aboutList';
import Contact from '../components/sections/contact/contact';
import Footer from '../components/ui/footer';
import Header from '../components/sections/hero/hero';
import Project from '../components/sections/projects/projects';
import Navbar from '../components/ui/nav';
import Languages from '../components/sections/techs/techs';

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
  );
}

export default App;
