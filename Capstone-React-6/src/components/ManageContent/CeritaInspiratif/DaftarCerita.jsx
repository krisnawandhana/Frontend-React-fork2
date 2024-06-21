import React, { useState, useEffect } from 'react';
import { getStories, getStoryById, updateStoryById, deleteStoryById } from '../../../utils/stories';
import Swal from 'sweetalert2';

const DaftarCerita = ({ refreshData, setRefreshData }) => {
  const [storyData, setStoryData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchStories = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        return;
      }
      const { success, data } = await getStories(1, 3, 'id', 'desc', '', token);
      if (success) {
        setStoryData(data.data);
      } else {
        console.log('Failed to fetch stories');
      }
    };

    fetchStories();
  }, [refreshData]);


  const handleCardClick = async (storyId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }
    const { success, data } = await getStoryById(storyId, token);
    if (success) {
      setSelectedStory(data.data);
      setShowStoryModal(true);
    } else {
      console.log('Failed to fetch story details');
    }
  };

  const handleCloseModal = () => {
    setShowStoryModal(false);
    setSelectedStory(null);
    setIsEditing(false);
    setEditData({ title: '', content: '' });
  };

  const handleEditStory = () => {
    setIsEditing(true);
    setEditData({ title: selectedStory.title, content: selectedStory.content });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }
    const { success } = await updateStoryById(selectedStory.id, editData, token);
    if (success) {
      console.log('Story updated successfully');
      handleCloseModal();
      setIsEditing(false);
      setRefreshData(prev => !prev);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Cerita berhasil diupdate.',
        timer: 3000,
        showConfirmButton: false, 
    });
    } else {
      console.log('Failed to update story');
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Cerita gagal diupdate.',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  const handleDeleteStory = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }
    Swal.fire({
      title: 'Yakin ingin menghapus cerita ini?',
      text: "Cerita yang dihapus tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { success } = await deleteStoryById(selectedStory.id, token);
        if (success) {
          console.log('Story deleted successfully');
          handleCloseModal();
          setRefreshData(prev => !prev);
          Swal.fire(
            'Terhapus!',
            'Cerita telah dihapus.',
            'success'
          );
        } else {
          console.log('Failed to delete story');
          Swal.fire(
            'Gagal!',
            'Cerita gagal dihapus.',
            'error'
          );
        }
      }
    });
};

  return (
    <div className="text-dark-2">
      <div className="flex justify-between items-center text-center mb-4">
        <h3 className="text-lg font-semibold">Daftar Cerita Inspiratif</h3>
        <div className="flex justify-center items-center">
          <div className="relative">
            <img src="/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Temukan Cerita"
              className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-3 gap-5">
        {storyData.map((story) => (
          <div
            key={story.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => handleCardClick(story.id)}
          >
            <img src={story.image_url} alt={story.title} className="w-[90%] mt-3 mx-3 h-40" />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 truncate">{story.title}</h4>
              <br />
              <p className="text-sm text-gray-500">{story.view_count} Pembaca</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showStoryModal && selectedStory && (
        <dialog id="my_modal" className="modal bg-black bg-opacity-50 z-50" open>
          <div className="bg-[#08B6D5] pt-4 rounded-3xl w-full max-w-2xl h-3/7">
            <div className="flex justify-between items-center px-5 pb-4">
              <h3 className="font-semibold text-lg text-white">Detail Cerita</h3>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost text-white" onClick={handleCloseModal}>✕</button>
                </form>
            </div>
            <div className=" flex bg-white rounded-b-3xl p-4">
              <div className="flex justify-center items-center">
                <img src={selectedStory.image_url} alt={selectedStory.title} className="w-60 h-60 rounded-lg" />
              </div>
              <div className="px-4 py-1 w-2/3">
                {isEditing ? (
                  <>
                    <input 
                      type="text" 
                      name="title" 
                      value={editData.title} 
                      onChange={handleInputChange} 
                      className="w-full mb-2 p-2 border rounded"
                    />
                    <textarea 
                      name="content" 
                      value={editData.content} 
                      onChange={handleInputChange}
                      className="w-full mb-2 h-44 p-2 border rounded"
                    />
                  </>
                 ) : (
                  <>
                    <h3 className="font-bold text-lg">{selectedStory.title}</h3>
                    <p className="my-2 h-44 overflow-y-auto">{selectedStory.content}</p>
                    <p className="mb-2 mt-5 text-sm text-gray-500">Uploaded: {new Date(selectedStory.date).toLocaleDateString()}</p>
                  </>
                )}
                <div className="modal-action items-center justify-center">
                  {isEditing ? (
                    <>
                      <button className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleSaveChanges}>Simpan</button>
                      <button className="btn btn-sm" onClick={() => setIsEditing(false)}>Batal</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleEditStory}>Edit</button>
                      <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white" onClick={handleDeleteStory}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DaftarCerita;
