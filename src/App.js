import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Aos from 'aos'
import 'aos/dist/aos.css'
import CursorCircle from './CircleCursor';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import ParallaxCommponent from "./components/parallax/ParallaxComponent.jsx"
import Testimonial from './components/tesimonial/index.jsx';
import { IotMonitoring4 } from './assets/index.js';

function App() {
  Aos.init({
    duration:1800,
    offset:0
  })

  return (
    <>
    <div className="w-full h-auto bg-bodyColor text-lightText px-2 lg:px-8">
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <Banner />
        <About />
        <CursorCircle />
      </div>
      <ParallaxCommponent />
      <Testimonial />
      <Parallax />
      <Services />
      <div className="lg:px-12">
      <Contact />
      <Footer />
      <FooterBottom />
      </div>
    </div>

    </>
  );
}
export default App;
