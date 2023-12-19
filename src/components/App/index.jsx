import About from '../sections/about';
import Contact from '../sections/contact';
import Footer from '../footer';
import Header from '../sections/hero';
import Project from '../sections/projects/projects';
import Navbar from '../nav';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
