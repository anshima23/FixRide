import React from "react";
import { motion } from "framer-motion";
import Ready from "../Components/Ready"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure

const boxData = [
  {
    number: 1,
    text: "Roadside Assistance",
    image:
      "https://plus.unsplash.com/premium_photo-1661306409866-18a31687d71b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Um9hZHNpZGUlMjBBc3Npc3RhbmNlfGVufDB8fDB8fHww",
  },
  { number: 2, text: "Emergency Repairs", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww" },
  { number: 3, text: "Towing Services", image: "https://plus.unsplash.com/premium_photo-1661964084829-69f889505c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG93aW5nJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D" },
  { number: 4, text: "Car Washing & Detailing", image: "https://plus.unsplash.com/premium_photo-1661501041641-3e731115e687?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D" },
  { number: 5, text: "Ride Service", image: "https://plus.unsplash.com/premium_photo-1661510316006-45fb0f58f5d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D" },
  { number: 6, text: "Fuel & Battery Delivery", image: "https://plus.unsplash.com/premium_photo-1681822877068-dd40795e8cb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVlbCUyMGFuZCUyMGJhdHRlcnklMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D" },
];

function Services() {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-start px-10 pt-10">
        <h1 className="text-8xl text-white mb-4 mt-[150px]">SERVICES</h1>
        <div className="w-full mt-20 border-b border-gray-300"></div>
        <div>
          <h1 className="text-5xl text-white mb-4 mt-[20px]">
            We operate on{" "}
            <span className="border-b border-white">highways,</span> and{" "}
            <span className="border-b border-white">in remote areas,</span>{" "}
            ensuring seamless service with or{" "}
            <span className="border-b border-white">without internet,</span>{" "}
            while{" "}
            <span className="border-b border-white">prioritizing women’s </span>
            safety.
          </h1>
        </div>
        <div className="w-full mt-10 border-b border-gray-300"></div>
      </div>

      <div className="w-full p-40 bg-[#CDEA68] text-black">
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight mt-5">
          Our services are designed for convenience and reliability. Simply book
          a service, and our system will automatically detect your location,
          whether you're on a highway or in a remote area, even without an
          internet connection. Once a request is placed, our experts are
          instantly notified and dispatched to assist you. With skilled
          mechanics and professionals, we ensure fast, high-quality repairs and
          maintenance. Additionally, we prioritize women’s safety, providing
          trusted and secure services whenever needed. 🚗
        </h1>
        <div className="w-full mt-10 border-b border-gray-900"></div>
      </div>

      <div className="w-full bg-[#004D43] h-[35rem]" p-10>
        <div className="flex gap-10 overflow-hidden whitespace-nowrap h-full items-center">
          {["We are Developers", "We are Developers", "We are Developers"].map(
            (text, index) => (
              <motion.div
                key={index}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
                className="flex items-center border-t-2 border-b-2 border-zinc-300"
              >
                <h1 className="text-[17vw] leading-none font-['Founders_Grotest_X-Condensed'] uppercase pt-5 font-semibold">
                  {text}
                </h1>
              </motion.div>
            )
          )}
        </div>
      </div>

      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
        className="w-full bg-[#004D43] text-black p-40"
      >
        <div className="w-full flex gap-5 border-[#a1b562]">
          <div className="w-1/2 flex items-start">
            <span className="text-2xl border-b border-black">
              What you can expect:
            </span>
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-5">
              {boxData.map(({ number, text, image }) => (
                <div
                  key={number} // Provide a unique key for each element
                  className="relative text-white text-5xl h-[35vh] rounded-3xl flex flex-col justify-end p-5"
                  style={{
                    background: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
                  <div className="relative flex items-start justify-start">
                    <span className="text-white text-5xl z-10">
                      {number < 10 ? `0${number}` : number}
                    </span>
                  </div>
                  <div className="relative flex items-end justify-start w-full">
                    <span className="text-white text-sm border-b border-white z-10">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Ready />
      <Footer />
    </>
  );
}

export default Services;
