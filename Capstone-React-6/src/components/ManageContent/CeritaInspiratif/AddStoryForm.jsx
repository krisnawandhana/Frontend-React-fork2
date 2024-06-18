import React, { useState } from 'react';
import { addStory } from '../../../utils/stories'; // Adjust the path according to your project structure

const AddStoryForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    creator: '',
    image: null
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found');
      return;
    }
    setShowConfirmationModal(true); // Show confirmation modal before uploading
  };

  const handleUploadConfirmed = async () => {
    const storyData = new FormData();
    storyData.append('title', formData.title);
    storyData.append('content', formData.content);
    storyData.append('creator', formData.creator);
    storyData.append('image', formData.image);

    const token = localStorage.getItem('token');
    const { success, data, message } = await addStory(storyData, token);
    if (success) {
      alert('Cerita berhasil diunggah');
      // Reset form or perform other actions after successfully uploading the story
      setFormData({ title: '', content: '', creator: '', image: null });
    } else {
      alert(`Gagal mengunggah cerita: ${message}`);
    }
    setShowConfirmationModal(false); // Close confirmation modal after upload
  };

  const handleModalClose = () => {
    setShowConfirmationModal(false); // Close confirmation modal if cancelled
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-wrap justify-between bg-[#08B6D5] rounded-3xl p-4">
        <div className="flex flex-col w-1/3 items-center justify-center content-center">
          <div className="flex w-full aspect-square">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-[#08B6D5]">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#FAFAFA" fillOpacity="0.32" />
                  <g opacity="0.8">
                    <path d="M22.5 35L35 35M35 35L47.5 35M35 35V22.5M35 35L35 47.5" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <p className="text-heading2 text-white text-center">Tambahkan Cover</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" name="gambar" accept="image/*" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        <div className="flex flex-col w-2/3 space-y-4 bg-white p-2 rounded-xl">
          <div className="flex flex-col">
            <input type="text" id="title" name="title" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul cerita" value={formData.title} onChange={handleInputChange} />
          </div>

          <div className="flex flex-col">
            <textarea id="content" name="content" className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full h-40" placeholder="Masukkan cerita inspiratif" value={formData.content} onChange={handleInputChange}></textarea>
          </div>

          <div className="flex flex-col">
            <input type="text" id="creator" name="creator" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan pencipta" value={formData.creator} onChange={handleInputChange} />
          </div>

          <button type="submit" className="inline-flex items-center px-4 py-2 bg-[#08B6D5] text-white rounded shadow hover:bg-[#07A4C0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Unggah
          </button>
        </div>
      </form>

      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Konfirmasi Unggah Cerita</h2>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleModalClose}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Judul:</p>
                <p>{formData.title}</p>
              </div>
              <div>
                <p className="font-semibold">Cerita:</p>
                <p>{formData.content}</p>
              </div>
              <div>
                <p className="font-semibold">Pencipta:</p>
                <p>{formData.creator}</p>
              </div>
              <div>
                <p className="font-semibold">Gambar:</p>
                {formData.image ? (
                  <img src={URL.createObjectURL(formData.image)} alt="Preview" className="w-full h-auto rounded-lg" />
                ) : (
                  <p>Belum dipilih</p>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-[#08B6D5] text-white px-4 py-2 rounded-md hover:bg-[#07A4C0]" onClick={handleUploadConfirmed}>Unggah</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2" onClick={handleModalClose}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddStoryForm;
