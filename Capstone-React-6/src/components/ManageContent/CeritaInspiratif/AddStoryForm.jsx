import React, { useState } from 'react';
import { addStory } from '../../../utils/stories'; // Adjust the path according to your project structure
import Swal from 'sweetalert2';

const AddStoryForm = ({ closeModal, setRefreshData }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    creator: ''
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    };
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
    storyData.append('image', image);

    const token = localStorage.getItem('token');
    const { success, message } = await addStory(storyData, token);
    if (success) {
      setRefreshData((prev) => !prev);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Cerita berhasil diunggah.',
        confirmButtonColor: '#66BFA1',
      });
      closeModal();
      // Reset form or perform other actions after successfully uploading the story
      setFormData({ title: '', content: '', creator: '' });
      setImagePreview(null);
    } else {
      alert(`Gagal mengunggah cerita: ${message}`);
    }
    setShowConfirmationModal(false); // Close confirmation modal after upload
  };

  const handleModalClose = () => {
    setShowConfirmationModal(false); // Close confirmation modal if cancelled
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between bg-[#08B6D5] rounded-b-3xl">
        <div className="flex flex-col w-2/5 items-center justify-center content-center">
          <div className="flex w-full aspect-square">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-3xl cursor-pointer bg-[#08B6D5]">
              <div className="flex flex-col items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview Cover" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <svg width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="35" cy="35" r="35" fill="#FAFAFA" fillOpacity="0.32"/>
                      <g opacity="0.8">
                        <path d="M22.5 35L35 35M35 35L47.5 35M35 35V22.5M35 35L35 47.5" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                    <p className="text-lg px-10 pt-2 text-white text-center font-medium">Tambahkan Cover</p>
                  </>
                )}
              </div>
              <input id="dropzone-file" type="file" className="hidden" name="gambar" accept="image/*" onChange={handleFileChange}/>
            </label>
          </div>
        </div>

        <div className="flex flex-col w-3/5 rounded-br-3xl bg-white p-2">

          <div className="flex flex-col mb-1">
            <input type="text" id="judul" name="judul" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul Cerita"/>
          </div>

          <div className="flex flex-col mb-1">
            <textarea id="artikel" name="artikel" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full h-32 overflow-y-auto" placeholder="Masukkan Cerita Inspiratif"/>
          </div>

          <div className="flex flex-col mb-2">
            <input type="text" id="pengarang" name="pengarang" value={formData.creator} onChange={(e) => setFormData({ ...formData, creator: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan pencipta"/>
          </div>

          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-[#08B6D5] text-white rounded shadow hover:bg-[#07A4C0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Unggah
          </button>
        </div>
      </form>

      {showConfirmationModal && (
        <dialog open className="modal bg-black bg-opacity-50">
        <div className="modal-box bg-[#08B6D5] ">
          <div className='bg-white flex flex-wrap items-center rounded-xl'>
            <div className="w-full md:w-1/3 p-2">
              {imagePreview && <img src={imagePreview} alt="Preview Cover" className="w-full h-auto mb-4 rounded"/>}
            </div>
            <div className="w-full md:w-2/3 p-2 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Konfirmasi Unggahan</h3>
              <p className="py-2 font-semibold text-sm">{formData.title}</p>
              <p className="h-32 overflow-y-auto text-sm">{formData.content}</p>
              <p className="py-2 text-sm"><span className="font-semibold">Pengarang:</span> {formData.creator}</p>
              <div className="modal-action mt-4">
                <button className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleUploadConfirmed}>Unggah</button>
                <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white" onClick={handleModalClose}>Batal</button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      )}
    </div>
  );
};

export default AddStoryForm;
