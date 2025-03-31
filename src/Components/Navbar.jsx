import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

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
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Overlay for navigation transitions */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        style={{ transform: "translateY(100%)" }}
      >
        <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{overlayText}</p>
      </div>

      {/* Navbar */}
      <div className="fixed z-[999] w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-50">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold border-b-2 border-white pb-1">FixMyRide</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              to={item.path}
              className="relative text-white text-lg capitalize cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index, item.path, item.name)}
            >
              {item.name}
              <span className="underline absolute bottom-0 left-0 h-0.5 bg-white transition-transform scale-x-0 opacity-0"></span>
            </Link>
          ))}
          <Link to="/profile" className="text-white text-2xl">
            <FaUserCircle />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center gap-6 text-white text-2xl transition-transform duration-500 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="hover:text-gray-400"
            onClick={() => handleClick(index, item.path, item.name)}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/profile" className="text-3xl">
          <FaUserCircle />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;