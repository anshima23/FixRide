import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile.png";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null); // null until fetched
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the latest profile data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://fix-ride-polm.vercel.app/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
          setError(null);
        } else {
          setError("Failed to fetch profile");
        }
      } catch (error) {
        setError("Error fetching profile");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("https://fix-ride-polm.vercel.app/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const data = await res.json();
        setUserData(data);
        alert("Profile saved successfully!");
      } else {
        alert("Failed to save profile");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("An error occurred while saving");
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    }
    setIsEditing(!isEditing);
  };

  if (loading) return <div className="text-white text-center mt-20">Loading profile...</div>;

  if (error)
    return (
      <div className="text-red-500 text-center mt-20">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative">
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
                value={value || ""}
                onChange={handleChange}
                readOnly={!isEditing}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className={`bg-gray-800 text-white text-lg font-semibold p-2 rounded-md border-2 ${
                  isEditing ? "border-blue-500 cursor-text" : "border-gray-600 cursor-default"
                } outline-none transition-all shadow-md`}
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
