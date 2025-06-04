import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className='w-full bg-[#004D43] h-[35rem] flex items-center overflow-hidden'>
      <div className='flex gap-4 md:gap-10 whitespace-nowrap'>
        {["We are mechanics, drivers, car washers, technicians, and auto experts!", 
          "We are mechanics, drivers, car washers, technicians, and auto experts!"].map((text, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }} // Start immediately visible
            animate={{ x: "-100%" }} // Move slowly left
            transition={{ ease: "linear", repeat: Infinity, duration: 50 }} // Super slow movement
            className='flex items-center border-t-2 border-b-2 border-zinc-300'
          >
            <h1 className='text-[10vw] md:text-[17vw] leading-none font-["Founders_Grotest_X-Condensed"] uppercase px-3 md:px-5 py-2 font-semibold'>
              {text}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
