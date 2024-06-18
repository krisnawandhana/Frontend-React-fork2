import React, { useState } from 'react';
import { addArticle } from '../../../utils/articles.js'; // Adjust the path according to your application's structure

export default function AddArticleForm() {
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    creator: ''
  });

  const [image, setImage] = useState(null); // State to store the selected image file
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview if needed
  const [showConfirmModal, setShowConfirmModal] = useState(false); // State to control the confirmation modal

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Optionally, preview the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation modal
    setShowConfirmModal(true);
  };

  const handleConfirmUpload = async () => {
    try {
      // Prepare data to send to addArticle function
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', articleData.title);
      formData.append('content', articleData.content);
      formData.append('creator', articleData.creator);
      formData.append('image', image); 
      const result = await addArticle(formData, token); // Use formData defined in handleSubmit

      if (result.success) {
        console.log('Artikel berhasil diunggah:', result.data);
        // Handle redirection or success notification here
      } else {
        console.error('Gagal mengunggah artikel:', result.message);
        // Handle error notification or user feedback here
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Handle unexpected errors here
    } finally {
      // Close the confirmation modal
      setShowConfirmModal(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-wrap justify-between bg-[#FF8080] rounded-3xl p-4">
      <div className="flex flex-col w-1/3 items-center justify-center content-center">
        <div className="flex w-full aspect-square">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-[#FF8080]">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#FAFAFA" fillOpacity="0.32"/>
                <g opacity="0.8">
                  <path d="M22.5 35L35 35M35 35L47.5 35M35 35V22.5M35 35L35 47.5" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              <p className="text-heading2 text-white text-center">Tambahkan Cover</p>
            </div>
            <input type="file" id="dropzone-file" className="hidden" name="gambar" accept="image/jpeg, image/png" onChange={handleFileChange}/>
          </label>
        </div>
      </div>

      <div className="flex flex-col w-2/3 space-y-4 bg-white p-4 rounded-xl ">

        <div className="flex flex-col">
          <input type="text" id="judul" name="judul" value={articleData.title} onChange={(e) => setArticleData({ ...articleData, title: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul artikel"/>
        </div>

        <div className="flex flex-col">
          <textarea id="penyanyi" name="penyanyi" value={articleData.content} onChange={(e) => setArticleData({ ...articleData, content: e.target.value })} className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full h-40" placeholder="Masukkan artikel meditasi"/>
        </div>

        <div className="flex flex-col">
          <input type="text" id="penyanyi" name="penyanyi" value={articleData.creator} onChange={(e) => setArticleData({ ...articleData, creator: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan pencipta"/>
        </div>

        <button type="submit" className="inline-flex items-center px-4 py-2 bg-[#FF8080] text-white rounded shadow hover:bg-[#F66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Unggah
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <dialog open className="modal">
          <div className="modal-box bg-[#66BFA1] ">
            <div className='bg-white flex flex-wrap items-center rounded-xl'>
              <div className="w-full md:w-1/3 p-2">
                {imagePreview && <img src={imagePreview} alt="Preview Cover" className="w-full h-auto mb-4 rounded"/>}
              </div>
              <div className="w-full md:w-2/3 p-2 rounded-xl">
                <h3 className="font-bold text-lg mb-2">Konfirmasi Unggahan</h3>
                <p className="py-2"><strong>Judul:</strong> {articleData.title}</p>
                <p><strong>Artikel:</strong> {articleData.content}</p>
                <p className="py-2"><strong>Penyanyi:</strong> {articleData.creator}</p>
                {/* Optionally show audio preview if needed */}
                <div className="modal-action mt-4">
                  <button className="btn btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleConfirmUpload}>Unggah</button>
                  <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={() => setShowConfirmModal(false)}>Batal</button>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </form>
  );
}
