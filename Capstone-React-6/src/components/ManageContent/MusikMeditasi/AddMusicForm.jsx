import React, { useState, useRef } from 'react';
import { addMusic } from '../../../utils/musics.js';
import Swal from 'sweetalert2';

const AddMusicForm = ({ closeModal, setRefreshData }) => {
  const [formData, setFormData] = useState({
    gambar: null,
    mp3: null,
    judul: '',
    penyanyi: '',
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);
  const [audioFileName, setAudioFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const file = files ? files[0] : null;

    setFormData((prevData) => ({
      ...prevData,
      [name]: file || value,
    }));

    if (name === 'gambar' && file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }

    if (name === 'mp3' && file) {
      setAudioPreview(URL.createObjectURL(file));
      setAudioFileName(file.name);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmUpload = async () => {
    const token = localStorage.getItem('token'); // Replace with your actual token
    const uploadData = new FormData();
    uploadData.append('title', formData.judul);
    uploadData.append('singer', formData.penyanyi);
    uploadData.append('image', formData.gambar);
    uploadData.append('music', formData.mp3);

    const result = await addMusic(uploadData, token);
    if (result.success) {
      // Handle success
      console.log('Upload successful:', result.data);
      resetForm();
      setRefreshData((prev) => !prev);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Musik berhasil diunggah.',
        confirmButtonColor: '#66BFA1',
      });
      setShowConfirmModal(false);
      closeModal();
    } else {
      // Handle error
      console.error('Upload failed:', result.message);
    }
  };

  const resetForm = () => {
    setFormData({
      gambar: null,
      mp3: null,
      judul: '',
      penyanyi: '',
    });
    setImagePreview(null);
    setAudioPreview(null);
    setAudioFileName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between bg-[#66BFA1] rounded-b-3xl">
        <div className="flex flex-col w-2/5 items-center justify-center content-center">
          <div className="flex w-full aspect-square">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-3xl cursor-pointer bg-[#66BFA1]">
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
              <input id="dropzone-file" type="file" className="hidden" name="gambar" accept="image/*" onChange={handleInputChange}/>
            </label>
          </div>
        </div>

        <div className="flex flex-col w-3/5 rounded-br-3xl bg-white p-2">
          <div className="flex flex-col mb-4">
            <div className="relative">
              <input 
                type="file" 
                id="mp3" 
                name="mp3" 
                accept="audio/mpeg" 
                className="file-input file-input-bordered border-[#66BFA1] file-input-accent w-full file:bg-[#66BFA1] file:text-white opacity-0 absolute z-50 cursor-pointer"
                onChange={handleInputChange}
                ref={fileInputRef}
              />
              <div className="flex gap-5 items-center">
                <button
                  type="button"
                  className="p-1 bg-[#66BFA1] text-white rounded-2xl shadow"
                  onClick={handleIconClick}
                >
                  <svg width="58" height="58" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path d="M22.5 35H47.5M35 22.5V47.5" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </button>
                <span className="text-dark-2 w-1/2">
                  {audioFileName ? audioFileName : 'Tambahkan Musik'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <input type="text" id="judul" name="judul" className="py-2 px-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan judul lagu" value={formData.judul} onChange={handleInputChange}/>
          </div>

          <div className="flex flex-col mb-6">
            <input type="text" id="penyanyi" name="penyanyi" className="py-2 px-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Masukkan nama penyanyi" value={formData.penyanyi} onChange={handleInputChange}/>
          </div>

          <button type="submit" className="inline-flex items-center justify-center py-2 bg-[#66BFA1] text-white rounded-lg shadow hover:bg-[#49B08E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Unggah
          </button>
        </div>
      </form>

      {showConfirmModal && (
        <dialog open className="modal bg-black bg-opacity-50">
          <div className="modal-box bg-[#66BFA1] ">
            <div className='bg-white flex flex-wrap items-center rounded-xl'>
              <div className="w-full md:w-1/3 p-2">
                {imagePreview && <img src={imagePreview} alt="Preview Cover" className="w-full h-auto mb-4 rounded"/>}
              </div>
              <div className="w-full md:w-2/3 p-2 rounded-xl">
                <h3 className="font-bold text-lg mb-5">Konfirmasi Unggahan</h3>
                <p className="mt-4 text-sm"><span className="font-semibold">Judul:</span> {formData.judul}</p>
                <p className="py-2 text-sm"><span className="font-semibold">Penyanyi:</span> {formData.penyanyi}</p>
                {audioPreview && (
                  <audio controls className="w-full mt-4">
                    <source src={audioPreview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
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
};

export default AddMusicForm;
