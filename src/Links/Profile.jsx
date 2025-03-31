import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile.png"; // Replace with your image

function Profile() {
  const [isEditing, setIsEditing] = useState(true); // Initially in edit mode if no data is present

  // User details (initially empty)
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    location: "",
    vehicle: "",
    age: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Edit Profile Button */}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-20 right-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all shadow-lg"
      >
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>

      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-lg mt-16"
      />

      {/* Profile Details */}
      <div className="mt-6 w-full max-w-md space-y-4">
        {Object.entries(userData).map(([key, value], index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-300 text-sm mb-1 capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              readOnly={!isEditing} // Editable only in edit mode
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)} // Placeholder based on field name
              className={`bg-gray-800 text-white text-lg font-semibold p-2 rounded-md border-2 ${
                isEditing ? "border-blue-500" : "border-gray-600"
              } outline-none transition-all shadow-md cursor-${isEditing ? "text" : "default"}`}
            />
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6">
        {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-3xl text-white transition-transform transform hover:scale-125"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
