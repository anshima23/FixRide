import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const navItems = [
  { name: "Services", path: "/services" },
  { name: "Our Works", path: "/our-works" },
  { name: "About Us", path: "/about-us" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [overlayText, setOverlayText] = useState("");
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    gsap.to(linkRefs.current[index].querySelector(".underline"), {
      scaleX: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(linkRefs.current[index], {
      y: -10,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.fromTo(
          linkRefs.current[index],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      },
    });
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex) {
      gsap.to(linkRefs.current[index].querySelector(".underline"), {
        scaleX: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(linkRefs.current[index], {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      setActiveIndex(null);
    }
  };

  const handleClick = (index, path, name) => {
    setActiveIndex(index);
    setOverlayText(name);
    gsap.set(overlayRef.current, { y: "100%" });
    gsap.to(overlayRef.current, {
      y: "0%",
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => {
        navigate(path);
        gsap.to(overlayRef.current, {
          y: "-100%",
          duration: 0.7,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <div>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        style={{ transform: "translateY(100%)" }}
      >
        <p className="text-white text-6xl font-bold">{overlayText}</p>
      </div>
      <div className="fixed z-[999] w-full px-4 md:px-10 py-4 md:py-6 font-['Neue Montreal'] flex justify-between items-center bg-black bg-opacity-50">
        <h1 className="text-xl md:text-2xl font-bold border-b-4 border-white pb-2">Developers</h1>
        <div className="flex gap-4 md:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              to={item.path}
              className="relative text-sm md:text-base capitalize font-light text-white overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index, item.path, item.name)}
            >
              {item.name}
              <span
                className={`underline absolute bottom-0 left-0 h-0.5 bg-white origin-left transition-transform ${
                  index === activeIndex ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
