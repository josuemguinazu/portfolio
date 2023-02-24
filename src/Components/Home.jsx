import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Footer } from './Footer/Footer';
import { Tecnos } from './Tecnos/Tecnos';
export const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Tecnos />
        <Footer />
      </div>
    </>
  );
};
