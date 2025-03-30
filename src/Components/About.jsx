import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        "Our website is your go-to solution for vehicle maintenance, connecting
        mechanics, drivers, and auto experts. With seamless booking, we
        ensure hassle-free service. From quick repairs to deep cleaning, trusted
        professionals are at your fingertips. Experience fast, reliable, and
        high-quality vehicle care. Drive worry-free with our expert solutions! "
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1674375348357-a25140a68bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVjaGFuaWN8ZW58MHx8MHx8fDA%3D"
            alt="Description"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
