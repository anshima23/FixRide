import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FaUserCircle } from "react-icons/fa";

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
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex) {
      gsap.to(linkRefs.current[index].querySelector(".underline"), {
        scaleX: 0,
        opacity: 0,
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
        <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          {overlayText}
        </p>
      </div>
      <div className="fixed z-[999] w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 bg-black bg-opacity-50 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold border-b-4 border-white pb-1 lg:pb-2">FixMyRide</h1>
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              to={item.path}
              className="relative text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl capitalize font-light text-white overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index, item.path, item.name)}
            >
              {item.name}
              <span
                className="underline absolute bottom-0 left-0 h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px] bg-white origin-left transition-transform scale-x-0 opacity-0"
              ></span>
            </Link>
          ))}
          <Link to="/profile" className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
