import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Certificates from '../components/Certificates';
import ProjectsWithVideo from '../components/ProjectsWithVideo';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Certificates />
      <ProjectsWithVideo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}