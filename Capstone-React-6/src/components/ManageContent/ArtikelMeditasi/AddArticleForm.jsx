import React, { useState, useRef } from 'react';
import { addArticle } from '../../../utils/articles.js'; // Adjust the path according to your application's structure
import Swal from 'sweetalert2';

export default function AddArticleForm({ closeModal, setRefreshData }) {
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
        resetForm();
        setRefreshData((prev) => !prev);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Artikel berhasil diunggah.',
          confirmButtonColor: '#66BFA1',
        });
        setShowConfirmModal(false);
        closeModal();
      } else {
        console.error('Gagal mengunggah artikel:', result.message);
        // Handle error notification or user feedback here
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Handle unexpected errors here
    }
  };

  const resetForm = () => {
    setArticleData({
      title: '',
      content: '',
      creator: '',
    });
    setImagePreview(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between bg-[#FF8080] rounded-b-3xl">
        <div className="flex flex-col w-2/5 items-center justify-center content-center">
          <div className="flex w-full aspect-square">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-3xl cursor-pointer bg-[#FF8080]">
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
            <input type="text" id="judul" name="judul" value={articleData.title} onChange={(e) => setArticleData({ ...articleData, title: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul artikel"/>
          </div>

          <div className="flex flex-col mb-1">
            <textarea id="artikel" name="artikel" value={articleData.content} onChange={(e) => setArticleData({ ...articleData, content: e.target.value })} className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full h-32 overflow-y-auto" placeholder="Masukkan artikel meditasi"/>
          </div>

          <div className="flex flex-col mb-2">
            <input type="text" id="pengarang" name="pengarang" value={articleData.creator} onChange={(e) => setArticleData({ ...articleData, creator: e.target.value })} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan pencipta"/>
          </div>

          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-[#FF8080] text-white rounded shadow hover:bg-[#F66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Unggah
          </button>
        </div>
      </form>

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <dialog open className="modal bg-black bg-opacity-50">
            <div className="modal-box bg-[#FF8080] ">
              <div className='bg-white flex flex-wrap items-center rounded-xl'>
                <div className="w-full md:w-1/3 p-2">
                  {imagePreview && <img src={imagePreview} alt="Preview Cover" className="w-full h-auto mb-4 rounded"/>}
                </div>
                <div className="w-full md:w-2/3 p-2 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Konfirmasi Unggahan</h3>
                  <p className="py-2 font-semibold text-sm">{articleData.title}</p>
                  <p className="h-32 overflow-y-auto text-sm">{articleData.content}</p>
                  <p className="py-2 text-sm"><span className="font-semibold">Pengarang:</span> {articleData.creator}</p>
                  <div className="modal-action mt-4">
                    <button className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleConfirmUpload}>Unggah</button>
                    <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white" onClick={() => setShowConfirmModal(false)}>Batal</button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
    </div>
  );
}
