import React, { useState } from 'react';
import axios from 'axios';
import ForumData from './ForumData';
import AddForum from '../PopUp/AddForum';

const Forum = ({ setSelectedForumId }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleAddForum = async (forumData) => {
        try {
            const response = await axios.post('https://dev-capstone.practiceproject.tech/v1/doctors/forums', forumData);
            console.log('Adding forum with data:', forumData);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error adding forum:', error);
        }
    };

    return (
        <div>
            {/* Search bar dan Add forum */}
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Temukan forum"
                    className="py-2 px-4 text-sm border border-gray-300 rounded-lg w-full mr-4"
                />
                <button onClick={openPopup} className="bg-primary text-sm flex justify-center items-center gap-3 text-white p-2 rounded-lg w-[50%]">
                    <span className="text-xl">+</span> Tambah Forum
                </button>
            </div>

            {/* Kumpulan Forum */}
            <div>
                <ForumData setSelectedForumId={setSelectedForumId} />
            </div>

            {/* Tampilkan popup jika showPopup true */}
            {showPopup && 
                <AddForum 
                    onClose={closePopup} 
                    onAddForum={handleAddForum} 
                />
            }
        </div>
    );
};

export default Forum;
