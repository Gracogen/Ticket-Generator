import React, { useState } from "react";
import axios from "axios";
import "../styles/Form.css";

const Form = ({ setTicketData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  // Upload image to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Tickethng"); 

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/donymetdd/image/upload", 
        formData
      );
      setAvatar(response.data.secure_url);
    } catch (error) {
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && avatar) {
      setTicketData({ name, email, avatar });
    } else {
      alert("Please fill all fields and upload an image.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    <p className="text-white text-2xl">Avatar Upload</p>
    <p className="text-white">You can upload an animate (Any image)</p>
      <div className="flex flex-col items-center">
        {avatar && (
          <img
            src={avatar}
            alt="Avatar Preview"
            className="w-24 h-24 rounded-full mb-2 border-2 border-blue-400"
          />
        )}
        <input
          type="file"
          accept="image/*"
          className="bg-gray-800 text-white p-2 rounded w-full"
          onChange={handleImageUpload}
          disabled={loading}
        />
        {loading && <p className="text-blue-400">Uploading...</p>}
      </div>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter your name"
        className="bg-gray-800 text-white p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-gray-800 text-white p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Get My Free Ticket"}
      </button>
    </form>
  );
};

export default Form;
