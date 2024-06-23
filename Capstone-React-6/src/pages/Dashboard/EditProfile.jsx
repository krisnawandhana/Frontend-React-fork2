import React, { useState, useEffect } from 'react';
import { getDoctorProfile, updateDoctorProfile } from '../../utils/profile.js'; // Import fungsi API

const EditProfile = () => {
  const token = localStorage.getItem('token');
  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    image: null,
    bachelor_almamater: '',
    master_almamater: '',
    practice_location: '',
    specialist: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch profile data when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      const { success, data } = await getDoctorProfile(token);
      if (success) {
        setProfile(data);
        setImagePreview(data.image);
      }
    };
    fetchProfile();
  }, [token]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: file });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(profile).forEach((key) => {
      if (profile[key]) {
        formData.append(key, profile[key]);
      }
    });

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const { success, data } = await updateDoctorProfile(formData, token);
    if (success) {
      setProfile(data);
      alert('Profile updated successfully');
    } else {
      alert('Failed to update profile');
    }
  };

  return (
    <div className="px-6 overflow-hidden">
      <div className="mt-8">
        <div className="p-4 rounded-lg shadow flex justify-between items-center">
          <div className="flex items-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" className="rounded-full mr-10 h-32 w-32 object-cover" />
            ) : (
              <img src={profile.profile_picture} alt="Default Avatar" className="rounded-full mr-10 h-32 w-32 object-cover" />
            )}
            <div>
              <h2 className="text-lg text-dark-1 font-semibold mb-2">{profile.name}</h2>
              <p className="text-sm text-dark-2">{profile.specialist}</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg shadow mt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-dark-1 text-sm font-medium">Nama</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="gender" className="mb-2 text-dark-1 text-sm font-medium">Jenis Kelamin</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl text-dark-3"
              >
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="specialist" className="mb-2 text-dark-1 text-sm font-medium">Bidang</label>
              <input
                type="text"
                name="specialist"
                value={profile.specialist}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="bachelor_almamater" className="mb-2 text-dark-1 text-sm font-medium">Almamater Sarjana</label>
              <input
                type="text"
                name="bachelor_almamater"
                value={profile.bachelor_almamater}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="master_almamater" className="mb-2 text-dark-1 text-sm font-medium">Almamater Magister</label>
              <input
                type="text"
                name="master_almamater"
                value={profile.master_almamater}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="practice_location" className="mb-2 text-dark-1 text-sm font-medium">Alamat Praktik</label>
              <input
                type="text"
                name="practice_location"
                value={profile.practice_location}
                onChange={handleInputChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="image" className="mb-2 text-dark-1 text-sm font-medium">Foto Profil</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-dark-4 text-sm py-2 px-4 rounded-3xl"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-primary py-2 px-7 rounded-3xl text-white text-sm hover:bg-primary-darker">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
