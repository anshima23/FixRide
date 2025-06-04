import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import carImage from "../assets/car.png"; // Car image
import roadImage1 from "../assets/road1.png"; // Road image

function MovingCar() {
  const carRef = useRef(null);
  const roadRef1 = useRef(null);
  const roadRef2 = useRef(null);

  useEffect(() => {
    // Car Animation: Moves from left to right and resets
    const animateCar = () => {
      gsap.fromTo(
        carRef.current,
        { x: "-100px" },
        {
          x: "100vw",
          duration: 5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(carRef.current, { x: "-100px" });
            animateCar();
          },
        }
      );
    };

    // Road Animation: Makes the road move infinitely
    const animateRoad = () => {
      gsap.to([roadRef1.current, roadRef2.current], {
        x: "-100%",
        duration: 5,
        repeat: -1,
        ease: "linear",
        onRepeat: () => {
          gsap.set([roadRef1.current, roadRef2.current], { x: "0%" });
        },
      });
    };

    animateCar();
    animateRoad();
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
      {/* Road Images Moving */}
      <div className="absolute top-0 left-0 flex w-[200%]">
        <img
          ref={roadRef1}
          src={roadImage1}
          alt="Road 1"
          className="w-1/2 h-[550px] object-cover"
        />
        <img
          ref={roadRef2}
          src={roadImage1}
          alt="Road 2"
          className="w-1/2 h-[550px] object-cover"
        />
      </div>

      {/* Moving Car */}
      <div className="absolute bottom-10 left-0 w-full flex justify-start">
        <img
          ref={carRef}
          src={carImage}
          alt="Moving Car"
          className="w-40 md:w-64"
        />
      </div>
    </div>
  );
}

export default MovingCar;
