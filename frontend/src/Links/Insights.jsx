import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const boxData = [
  {  text: "Effortless Doorstep Service",  imageUrl: "https://media.istockphoto.com/id/2158164396/photo/delivery-man-delivers-prescription-medicine-to-a-happy-woman-at-her-front-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=hbLRZqUzVcMkKNLBcBKASGoQy6DDdhJrBOJaRE1xDHI="},
  {text: " Real-time tracking ",  imageUrl: "https://media.istockphoto.com/id/612616308/photo/smart-city-and-smart-phone-application-using-location-information.webp?a=1&b=1&s=612x612&w=0&k=20&c=50pTWo-agi8koH-ql0bdWOAmnl7D41oQnarppS8haQ4="},
  { text: "Seamless Offline Assistance",  imageUrl: "https://plus.unsplash.com/premium_photo-1670678203548-f6ad7b39ef11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm8lMjBpbnRlcm5ldHxlbnwwfHwwfHx8MA%3D%3D"},
];

function Insights() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
        {/* PART 1: Hero Section */}
        <div className="w-full h-[100vh] flex flex-col items-center justify-center px-10 mt-20">
          <div className="text-center">
            <h1 className="text-8xl text-white mb-10 ">INSIGHTS</h1>
            <div className="border-t-2 border-zinc-800 mt-8 w-full"></div>

            {/* PART 2: Heading and Buttons */}
            <div className="w-[150%] max-w-4xl  flex items-center mt-10">
              <div className="flex-grow">
                <h2 className="text-xl text-white flex flex-left">
                  Our Insight
                </h2>
              </div>
              <div className="flex gap-4">
                {[
                  "24/7 Reliable Assistance",
                  "Safety & Security First ",
                  "Expert Service Network",
                ].map((label, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-white text-white bg-transparent rounded-full"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Grid Structure for Boxes */}
        <div className="w-full h-[55vh] flex flex-col items-center mt-10 mb-20 px-5">
          <div className="w-full max-w-4xl grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <div className="h-[40vh] bg-gray-700 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvdGVjdGVkJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D" // Replace with your image URL
                  alt="Big Box Image"
                  className="w-full h-full object-cover rounded-lg" // Adjust as needed
                />
              </div>
              <div className="text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <h2 className="block font-bold text-lg">
                  Empowered Safety Measures
                </h2>
                <p className="mt-2">
                  Ensuring a secure and reliable experience for all drivers,
                  especially women, by offering trusted assistance anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-[35vh] bg-gray-400 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/2123170383/photo/hands-of-robot-and-human-touch-artificial-intelligence-of-global-networking-advancing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xq7YAminj81zCsqDO1SiM1iAZvYIlvr6w6BNhJC3OHo=" // Replace with your image URL
                  alt="Small Box Image"
                  className="w-full h-full object-cover rounded-lg" // Adjust as needed
                />
              </div>
              <div className="text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <h2 className="block font-bold text-lg">Advanced Technology Integration</h2>
                <p>
                  Utilizing cutting-edge technology to provide real-time
                  tracking, efficient service requests, and seamless
                  communication for a hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PART 4: Horizontal Scrolling Text */}
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

        {/* PART 5: What You Can Expect */}
        <div className="w-full mb-20 bg-[#004D43] text-black p-0">
          <div className="w-full max-w-4xl flex flex-col items-center px-10">
            <div className="w-full flex gap-5 border-[#a1b562] border-b-2 mb-8">
              <span className="text-2xl border-b-2 border-black">
                What you can expect:
              </span>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              {boxData.map(({ text, imageUrl }, index) => (
                <div
                  key={index}
                  className="relative h-[35vh] rounded-3xl overflow-hidden"
                >
                  <img src={imageUrl} alt={text} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <span className="text-white text-center text-lg font-semibold">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Insights;
