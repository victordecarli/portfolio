import About from '../sections/about';
import Contact from '../sections/contact';
import Footer from '../footer';
import Header from '../sections/hero';
import Project from '../sections/projects/projects';
import Navbar from '../nav';
import Languages from '../sections/techs/techs';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Languages />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
