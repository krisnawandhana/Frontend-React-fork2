import React, { useState, useEffect } from 'react';
import { getStories, getStoryById } from '../../../utils/stories';

const DaftarCerita = () => {
  const [storyData, setStoryData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found');
      return;
    }
    const { success, data } = await getStories(1, 3, 'id', 'desc', '',token);
    if (success) {
      setStoryData(data.data);
    } else {
      alert('Failed to fetch stories');
    }
  };

  const handleCardClick = async (storyId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found');
      return;
    }
    const { success, data } = await getStoryById(storyId, token);
    if (success) {
      setSelectedStory(data.data);
      setShowStoryModal(true);
    } else {
      alert('Failed to fetch story details');
    }
  };

  const handleCloseModal = () => {
    setShowStoryModal(false);
    setSelectedStory(null);
    setIsEditing(false);
    setEditData({ title: '', content: '' });
  };

  const handleEditArticle = () => {
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

  const handleSaveChanges = () => {
    // Implement save changes logic
    setIsEditing(false);
    handleCloseModal();
  };

  const handleDeleteArticle = () => {
    // Implement delete article logic
    handleCloseModal();
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
              <p className="text-sm text-gray-500 mb-1">{story.creator}</p>
              <p className="text-sm text-gray-500">{story.view_count} Pembaca</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showStoryModal && selectedStory && (
        <dialog id="my_modal" className="modal" open>
          <div className="modal-box bg-white max-w-2xl w-5/6 h-full">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
            </form>
            <img src={selectedStory.image_url} alt={selectedStory.title} className="w-full h-auto mb-4 rounded" />
            <div className="p-4">
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
                    className="w-full mb-2 p-2 border rounded"
                  />
                </>
              ) : (
                <>
                  <h3 className="font-bold text-lg">{selectedStory.title}</h3>
                  <p className="py-2">{selectedStory.content}</p>
                  <p className="py-2 text-sm text-gray-500">Uploaded: {new Date(selectedStory.date).toLocaleDateString()}</p>
                </>
              )}
              <div className="modal-action items-center justify-center">
                {isEditing ? (
                  <button className="btn btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleSaveChanges}>Save</button>
                ) : (
                  <>
                    <button className="btn btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleEditArticle}>Edit</button>
                    <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={handleDeleteArticle}>Delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DaftarCerita;
