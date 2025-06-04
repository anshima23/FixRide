import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const inputFields = [
  { key: "name", placeholder: "Your Name", label: "Hi! My name is" },
  { key: "phone", placeholder: "Phone Number", label: "Phone Number is" },
  { key: "location", placeholder: "Location", label: "and I live in" },
  { key: "vehicle", placeholder: "Vehicle Details", label: "I have this vehicle" },
  { key: "serviceDetails", placeholder: "Service Details", label: "I'm looking for service" },
  { key: "issue", placeholder: "Facing Issue", label: "I am facing this issue" },
  { key: "additionalInfo", placeholder: "Additional Information", label: "this is my contact method" },
];

const box1Texts = [
  "How can I book a mechanic for emergency roadside assistance?",
  "What types of vehicle repairs and services are offered?",
  "How do I track the mechanic’s location in real-time?",
  "What payment options are available for the services?",
];

const Eye = ({ rotate }) => (
  <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100">
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
);

function Contact() {
  const [rotate, setRotate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    vehicle: "",
    serviceDetails: "",
    issue: "",
    additionalInfo: "",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - window.innerWidth / 2;
      const deltaY = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          location: "",
          vehicle: "",
          serviceDetails: "",
          issue: "",
          additionalInfo: "",
        });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form");
    }
    setLoading(false);
  };

  const textVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  const textTransition = { duration: 0.5, ease: "easeOut" };

  return (
    <div className="w-full bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen pt-10 flex flex-col">
        <div className="mt-20 px-6 sm:px-12 md:px-20 text-center">
          {["REACH OUT, ", " WE'RE HERE ANYTIME!"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit mx-auto flex items-end overflow-hidden">
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6vw] mt-2 bg-red-500 rounded-md"
                  />
                )}
                <h1 className="text-[10vw] sm:text-[7vw] leading-none font-['Founders_Grotesk'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="pt-10 px-6 md:px-20 flex flex-col items-center">
          <h1 className="text-2xl mb-10 text-center">Fill the form below:</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-4xl">
            {inputFields.map((field, index) => (
              <div key={index} className="flex flex-col">
                <label htmlFor={field.key} className="text-2xl">
                  {field.label}
                </label>
                <input
                  id={field.key}
                  name={field.key}
                  type={field.key === "phone" ? "tel" : "text"}
                  pattern={field.key === "phone" ? "[0-9]{10}" : undefined}
                  required
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.key]: e.target.value })
                  }
                  className="bg-zinc-900 border-b border-white py-2 px-1 placeholder:text-sm focus:outline-none"
                />
              </div>
            ))}

            <div className="flex justify-between items-center mt-8 text-sm">
              <label className="flex items-center">
                <input required type="checkbox" className="mr-2" />
                I agree with privacy policy
              </label>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-white text-black rounded-full"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Eye Animation Section */}
      <section className="min-h-screen py-40 bg-[#CDEA68] rounded-t-3xl text-black flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-['Neue_Montreal'] text-[8vw] leading-[10vw] text-center tracking-tight">
            {[
              "DELIVERYPERSONNEL",
              "EMERGENCY RESPONDERS",
              "ON-DEMAND TECHNICIANS",
              "ROADSIDE ASSISTANCE PROVIDERS",
            ].map((text, index) => (
              <motion.span
                key={index}
                className="block relative"
                initial="initial"
                whileHover="animate"
                exit="exit"
                variants={textVariants}
                transition={textTransition}
              >
                {text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={textVariants}
                    transition={{
                      ...textTransition,
                      delay: i * 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          <div className="absolute flex gap-10 top-[10%]">
            <Eye rotate={rotate} />
            <Eye rotate={rotate} />
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="p-10 md:p-20">
        <h1 className="text-5xl sm:text-7xl mb-10">
          A few things you <br /> may want to ask us:
        </h1>
        <div className="mt-6">
          {box1Texts.map((text, i) => (
            <div key={i} className="mb-10">
              <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
                <div className="w-full sm:w-[53%] p-4 border border-gray-300">{text}</div>
                <div className="w-full sm:w-[23%] p-4 border border-gray-300">Description:</div>
                <div className="w-full sm:w-[23%] p-4 border border-gray-300 relative">
                  <span
                    className="absolute bottom-1 left-0 w-[30%] h-[1px] bg-white"
                  />
                  Read More
                </div>
              </div>
              <div className="w-full border-b border-gray-300 mt-4"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
