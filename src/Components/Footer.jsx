import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="relative flex w-full h-screen bg-zinc-900 p-20"
    >
      <div className='w-1/2 h-full flex flex-col justify-between font-["Founders_Grotesk_X-Condensed"]'>
        <div className="heading">
          <h1 className="text-[6vw] font-semibold uppercase leading-none mb-5">
            FAST FIXES,
          </h1>
          <h1 className="text-[6vw] font-semibold uppercase leading-none">
            RELIABLE RIDES
          </h1>
        </div>
        {/* SVG positioned absolutely at the bottom left corner */}
        <svg
          className="absolute bottom-0 left-0 mb-5 ml-5"
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths */}
        </svg>
      </div>
      <div className="w-1/2">
        <div className="dets font-['Neue_Montreal']">
          <a href="#" className="flex items-center text-xl font-light mb-2 space-x-3">
            <FaFacebookF className="text-xl" /> <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center text-xl font-light mb-2 space-x-3">
            <FaInstagram className="text-xl" /> <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center text-xl font-light mb-2 space-x-3">
            <FaTwitter className="text-xl" /> <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center text-xl font-light space-x-3">
            <FaLinkedinIn className="text-xl" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
