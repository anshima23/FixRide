import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Ready() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90); // Center of the circle at 0 degrees
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".02" className="w-full min-h-screen py-40 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black flex flex-col items-center justify-center">

      {/* Text and Buttons */}
      <div className="flex flex-col items-center relative z-10 mt-30">
        <h1 className="font-['Neue_Montreal'] text-[10vw] leading-[10vw] tracking-tight text-center">
          <span className="block -ml-8 relative">READY</span>
          <span className="block -ml-12 mt-2 relative">TO USE OUR</span>
          <span className="block -ml-16 mt-2 relative">
     APP <span className="text-green-800">FixMyRide</span> 
  </span>
        </h1>

{/* Eyes positioned above the text */}
<div className='absolute flex gap-10 top-[10%]'>
        <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                position: 'absolute',
                top: '50%',
                left: '50%',
              }}
              className="line w-full h-10"
            >
              <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                position: 'absolute',
                top: '50%',
                left: '50%',
              }}
              className="line w-full h-10"
            >
              <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
      </div>


      
        <div className="flex flex-col items-center mt-10 space-y-4">
          <button className="flex uppercase gap-4 items-center px-10 py-4 bg-zinc-900 rounded-full text-white">
            Explore App
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ready;
