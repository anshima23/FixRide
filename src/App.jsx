import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
    </div>
  )
}

export default App



