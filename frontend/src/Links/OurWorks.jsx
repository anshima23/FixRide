import React, { useEffect, useState } from "react";
import Ready from "../Components/Ready";
import Footer from "../Components/Footer";

const Box = ({ color, text, imageUrl, description }) => (
  <div className={`w-1/2 h-[80vh] ${color} p-12 flex items-center justify-center rounded-lg`}>
    <div className="flex flex-col items-center justify-center w-full h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={text}
          className="w-full h-2/3 object-cover rounded-lg mb-4"
        />
      )}
      <div className="text-center text-xl font-bold text-black">{text}</div>
      <p className="text-center text-md mt-2 text-black">{description}</p>
    </div>
  </div>
);

function OurWorks() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const Eye = () => (
    <div
      className="flex items-center justify-center w-[22vw] h-[22vw] rounded-full bg-zinc-100"
      style={{ zIndex: 0 }}
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
          <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full h-screen flex flex-col items-start bg-[#CDEA68] px-10 pt-10 text-black relative">
        <h1 className="text-8xl text-black mb-4 mt-[150px]">WORK</h1>

        {/* Eye and Box Section */}
        <div className="relative flex flex-col items-center gap-2 mb-0 bottom-0 left-1/2 transform -translate-x-1/2">
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-2"
            style={{ zIndex: 1 }}
          >
            <div
              className="w-[60vw] h-[17vh] ml-10 bg-[#9cb34b] text-white flex items-center justify-center rounded-lg"
              style={{ marginTop: "-5rem" }}
            ></div>
            <div
              className="w-[70vw] h-[10vh] bg-[#8da637] text-white flex items-center justify-center rounded-lg"
              style={{ marginTop: "-5rem" }}
            ></div>
          </div>

          <div className="flex gap-10 mt-10" style={{ zIndex: 0 }}>
            <Eye />
            <Eye />
          </div>
        </div>
      </div>

      <div
  data-scroll
  data-scroll-section
  data-scroll-speed="-0.3"
  className="w-full flex flex-col items-center bg-gray-900 py-16 px-4 md:px-8 lg:px-16"
>
  <div className="w-full max-w-screen-xl flex items-center justify-center mb-10">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center">
      We are ready to provide you with seamless and secure services anytime, anywhere.
    </h1>
  </div>

  {/* Box Sections */}
  <div className="w-full max-w-screen-xl flex flex-col gap-6 md:gap-10">
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
      <Box
        color="bg-gray-200"
        imageUrl="https://media.istockphoto.com/id/154368511/photo/woman-and-children-watch-as-man-changes-their-car-tire.webp?a=1&b=1&s=612x612&w=0&k=20&c=7YdW8ZaRcl2rQ_B_o203m8aUgTv7pwri80S7n2iQcMQ="
        text="Emergency Roadside Assistance"
        description="Quick and reliable help for car breakdowns, ensuring you reach your destination safely."
      />
      <Box
        color="bg-gray-100"
        imageUrl="https://plus.unsplash.com/premium_photo-1674375348357-a25140a68bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww"
        text="Skilled Mechanics at Work"
        description="Our expert mechanics provide top-notch repair services, ensuring your vehicle runs smoothly."
      />
    </div>
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
      <Box
        color="bg-gray-200"
        imageUrl="https://media.istockphoto.com/id/487729465/photo/i-think-that-guy-is-following-me.webp?a=1&b=1&s=612x612&w=0&k=20&c=NQbNAjp6GTJEZWL9wnVLmhzxpb80SSLnCLb4tdMg26U="
        text="Safety for Women Drivers"
        description="Providing a secure and trusted service, especially for women in distress on the road."
      />
      <Box
        color="bg-gray-100"
        imageUrl="https://plus.unsplash.com/premium_photo-1663040250073-fcee2d2a3fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbGxlZCUyMG1lY2hhbmljc3xlbnwwfHwwfHx8MA%3D%3D"
        text="Reliable Service Network"
        description="A wide network of trained professionals ensuring quality service anytime, anywhere."
      />
    </div>
  </div>
</div>


      <Ready />
      <Footer />
    </>
  );
}

export default OurWorks;
