import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const inputFields = [
  { placeholder: "Your Name", label: "Hi! My name is" },
  { placeholder: "Phone Number", label: "Phone Number is " },
  {
    placeholder: "Location:",
    label: "and I live in",
  },
  {
    placeholder: "Vehicle Details",
    label: "I have this vehicle",
  },
  {
    placeholder: "Service Details",
    label: "I'm looking for service",
  },
  { placeholder: "Facing Issue", label: "I am facing this issue" },
  {
    placeholder: "Additional Information",
    label: "this is my contact method",
  },
];


const box1Texts = [
  "How can I book a mechanic for emergency roadside assistance?",
  "What types of vehicle repairs and services are offered?",
  "How do I track the mechanic’s location in real-time?",
  "What payment options are available for the services?",
];

function Contact() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90); // Adjust rotation
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const textVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 }
  };

  const textTransition = {
    duration: 0.5,
    ease: "easeOut"
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-0.3"
          className="w-full min-h-screen bg-zinc-900 pt-10 mb-30 flex flex-col"
        >
          {/* Upper heading */}
          <div className="textstructure mt-20 px-20 flex flex-col items-center">
            {["REACH OUT, ", " WE'RE HERE ANYTIME!"].map((item, index) => (
              <div className="masker" key={index}>
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 0 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="w-[9vw] h-[6vw] mt-2 bg-red-500 rounded-md"
                    />
                  )}
                  <h1 className="flex items-center uppercase text-[7vw] h-full leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-medium text-white">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Form part */}
          <div className="text-white pt-10 m-10 flex flex-col items-center">
            <h1 className="text-xl mb-10">Fill the form below:</h1>
            <form className="text-7xl flex flex-col gap-4 w-full max-w-4xl">
              {inputFields.map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label className="text-5xl">
                    {field.label}
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="bg-zinc-900 text-white border-b border-white placeholder:text-xs placeholder:text-center focus:outline-none w-full"
                    />
                  </label>
                </div>
              ))}
              {/* Container for checkbox and button */}
              <div className="flex justify-end mt-10 items-center gap-4 w-full max-w-4xl">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-lg">I agree with privacy policy</span>
                </label>
                <button className="px-4 py-2 bg-zinc-700 text-black rounded-full text-sm">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Space between hero section and Instagram section */}
        <div className="w-full h-[20vh] bg-transparent"></div> {/* Adjust height as needed */}

        {/* Instagram Facebook Section */}
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".02"
          className="w-full min-h-screen py-40 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black flex flex-col items-center justify-center"
        >
          {/* Text and Buttons */}
          <div className="flex flex-col items-center relative z-10">
            <h1 className="font-['Neue_Montreal'] text-[7vw] leading-[10vw] tracking-tight text-center">
              {["DELIVERYPERSONNEL", "EMERGENCY RESPONDERS", "ON-DEMAND TECHNICIANS", "ROADSIDE ASSISTANCE PROVIDERS"].map((text, index) => (
                <motion.span
                  key={index}
                  className="block relative"
                  initial="initial"
                  whileHover="animate"
                  exit="exit"
                  variants={textVariants}
                  transition={textTransition}
                >
                  {text.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      variants={textVariants}
                      transition={{ ...textTransition, delay: charIndex * 0.05 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </h1>

            {/* Eyes positioned above the text */}
            <div className="absolute flex gap-10 top-[10%]">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100"
                >
                  <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                      }}
                      className="line w-full h-10"
                    >
                      <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ask Something Section */}
        <div className="relative flex flex-col w-full h-screen bg-zinc-900 p-20 border-2">
          <h1 className="text-7xl mb-10">
            A few things you
            <br /> may want to ask us:
          </h1>
          <div className="w-full mt-6">
            {box1Texts.map((text, rowIndex) => (
              <div key={rowIndex} className="w-full mb-10 text-white">
                <div className="flex justify-between mb-4">
                  <div className="w-[53%] p-4 border-gray-300">{text}</div>
                  <div className="w-[23%] p-4 border-gray-300">Description:</div>
                  <div className="w-[23%] p-4 border-gray-300 text-white relative inline-block">
                    <span
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: 0,
                        width: "30%",
                        height: "1px", // Adjust thickness
                        backgroundColor: "white", // Adjust color
                      }}
                    />
                    Read More
                  </div>
                </div>
                {/* Underline after each row */}
                <div className="w-full border-b border-gray-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
