import Contact from '@/components/Contact/Contact';
import Header from '@/components/Hero/Hero';
import Project from '@/components/Projects/Projects';
import { AboutList } from '@/components/sections/About/AboutList';
import Languages from '@/components/Techs/Techs';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/nav';

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
