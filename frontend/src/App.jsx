import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Car from './Components/Car';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Ready from './Components/Ready';
import Footer from './Components/Footer';
import Services from "./Links/Services";
import OurWorks from "./Links/OurWorks";
import AboutUs from "./Links/AboutUs";
import Insights from "./Links/Insights";
import Contact from "./Links/Contact";
import Profile from "./Links/Profile";

function App() {
  React.useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Marquee />
            <Car />
            <About />
            <Featured />
            <Cards />
            <Ready />
            <Footer />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
