import React, { useState } from "react";
import axios from "axios";
import '../styles/Upload.css'

const UploadAvatar = ({ setFormData }) => {
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Tickethng"); // Change to your Cloudinary preset

    setLoading(true);
    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/donymetdd/image/upload", formData);
      setFormData((prev) => ({ ...prev, avatar: response.data.secure_url }));
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="my-4">
      <label className="block mb-2">Upload Profile Photo:</label>
      <input type="file" accept="image/*" onChange={handleAvatarChange} className="bg-gray-700 p-2 rounded w-full" />
      {loading && <p className="text-sm text-gray-400 mt-2">Uploading...</p>}
    </div>
  );
};

export default UploadAvatar;
