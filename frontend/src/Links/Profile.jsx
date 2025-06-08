import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile.png";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    location: "",
    vehicle: "",
    age: "",
  });

  // GET profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://fixride-backend.onrender.com/profile");
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchProfile();
  }, []);

  // POST updated profile
  const handleSave = async () => {
    try {
      const res = await fetch("https://fixride-backend.onrender.com/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save profile");

      setUserData(data);
      alert("Profile saved successfully!");
    } catch (err) {
      console.error("Save error:", err);
      alert(err.message || "An error occurred while saving");
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    }
    setIsEditing(!isEditing);
  };

  // ✅ FIXED: handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <button
        onClick={toggleEdit}
        className="absolute top-20 right-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all shadow-lg"
      >
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>

      <img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-lg mt-16"
      />

      <div className="mt-6 w-full max-w-md space-y-4">
        {Object.entries(userData)
          .filter(([key]) => key !== "_id" && key !== "__v")
          .map(([key, value], index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-300 text-sm mb-1 capitalize">{key}</label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                readOnly={!isEditing}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className={`bg-gray-800 text-white text-lg font-semibold p-2 rounded-md border-2 ${
                  isEditing ? "border-blue-500" : "border-gray-600"
                } outline-none transition-all shadow-md cursor-${isEditing ? "text" : "default"}`}
              />
            </div>
          ))}
      </div>

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
