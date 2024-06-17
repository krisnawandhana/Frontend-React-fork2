import React, { useState } from 'react';
import MemberList from './MemberList';
import EditForum from '../PopUp/EditForum';
import DeleteForum from '../PopUp/DeleteForum'; // Import DeleteForum component

const ForumDetails = ({ forum, setShowDetails }) => {
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false); // State untuk menampilkan popup delete

    const handleEditClick = () => {
        setShowEditPopup(true);
    };

    const handleCloseEditPopup = () => {
        setShowEditPopup(false);
    };

    const handleDeleteClick = () => {
        setShowDeletePopup(true);
    };

    const handleCloseDeletePopup = () => {
        setShowDeletePopup(false);
    };

    const handleUpdateForum = (updatedForum) => {
        // Logika untuk update forum
        console.log('Update forum:', updatedForum);
    };

    const handleDeleteForum = (forumId) => {
        // Logika untuk menghapus forum dengan forumId
        console.log('Delete forum with ID:', forumId);
    };

    return (
        <div>
            <div className="mb-5 flex items-center pb-2 border-b-2 pl-2 pr-6">
                <img src={`/Forum/${forum.image}`} alt={forum.name} onClick={() => setShowDetails(false)} className="h-32 w-32 mr-4" />
                <div>
                    <h2 className="text-xl mb-2 font-semibold">{forum.name}</h2>
                    <p className="text-sm text-gray-500">{forum.description}</p>
                    <div className="flex gap-6 justify-center mb-3">
                        <button onClick={handleEditClick} className="py-2 px-6 rounded-lg border border-primary flex justify-center text-center mt-4 hover:bg-gray-200">
                            <img src="/Forum/edit1.svg" alt="" />
                            <span className="ml-2 text-primary text-sm font-medium">Edit</span>
                        </button>
                        <button onClick={handleDeleteClick} className="py-2 px-6 rounded-lg border border-error flex justify-center text-center mt-4 hover:bg-gray-200">
                            <img src="/Forum/delete.svg" alt="" />
                            <span className="ml-2 text-error text-sm font-medium">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
            <MemberList members={forum.memberList} />

            {/* Tampilkan popup EditForum */}
            {showEditPopup && (
                <EditForum
                    forum={forum}
                    onClose={handleCloseEditPopup}
                    onUpdateForum={handleUpdateForum}
                />
            )}

            {/* Tampilkan popup DeleteForum */}
            {showDeletePopup && (
                <DeleteForum
                    forum={forum}
                    onClose={handleCloseDeletePopup}
                    onDeleteForum={handleDeleteForum}
                />
            )}
        </div>
    );
};

export default ForumDetails;
