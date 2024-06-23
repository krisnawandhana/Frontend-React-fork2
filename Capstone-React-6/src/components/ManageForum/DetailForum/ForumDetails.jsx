import React, { useState, useEffect } from 'react';
import MemberList from './MemberList';
import EditForum from '../PopUp/EditForum';
import DeleteForum from '../PopUp/DeleteForum';
import { getForumMembers, updateForumById, deleteForumById } from '../../../utils/forum';

const ForumDetails = ({ forum, setShowDetails }) => {
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [currentForum, setCurrentForum] = useState(forum);
    const [members, setMembers] = useState([]);
    const [loadingMembers, setLoadingMembers] = useState(true);
    const [errorMembers, setErrorMembers] = useState(null);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkzMzA0MzEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.YheEq_mxQGQRQKUGsxnzQ7Z0LUc0gMPEvdagQ_rDVgo'; 

    useEffect(() => {
        const fetchMembers = async () => {
            setLoadingMembers(true);
            try {
                const { success, data, message } = await getForumMembers(currentForum.forum_id, 1, 10, token);
                if (success) {
                    setMembers(data.data); // Sesuaikan dengan struktur data dari API
                    setErrorMembers(null);
                } else {
                    setErrorMembers(message || 'Error fetching forum members');
                }
            } catch (err) {
                setErrorMembers('Error fetching forum members');
                console.error('Error fetching forum members:', err);
            } finally {
                setLoadingMembers(false);
            }
        };

        fetchMembers();
    }, [currentForum.forum_id]);

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

    const handleUpdateForum = async (updatedForum, imageFile) => {
        const { success, data } = await updateForumById(currentForum.forum_id, updatedForum, imageFile, token);
        if (success) {
            setCurrentForum(data);
        }
        console.log('Update forum:', updatedForum);
    };

    const handleDeleteForum = async (forumId) => {
        const { success } = await deleteForumById(forumId, token);
        if (success) {
            setShowDetails(false); // Menutup detail forum setelah berhasil dihapus
        }
        console.log('Delete forum with ID:', forumId);
    };

    return (
        <div>
            <div className="mb-5 flex items-center pb-2 border-b-2 pl-2 pr-6">
                <img src={currentForum.image_url} alt={currentForum.name} onClick={() => setShowDetails(false)} className="h-32 w-32 mr-4" />
                <div>
                    <h2 className="text-xl mb-2 font-semibold">{currentForum.name}</h2>
                    <p className="text-sm text-gray-500">{currentForum.description}</p>
                    <div className="flex gap-6 justify-center mb-3">
                        <button onClick={handleEditClick} className="py-2 px-6 rounded-lg border border-primary flex justify-center text-center mt-4 hover:bg-gray-200">
                            <img src="/Forum/edit1.svg" alt="Edit" />
                            <span className="ml-2 text-primary text-sm font-medium">Edit</span>
                        </button>
                        <button onClick={handleDeleteClick} className="py-2 px-6 rounded-lg border border-error flex justify-center text-center mt-4 hover:bg-gray-200">
                            <img src="/Forum/delete.svg" alt="Delete" />
                            <span className="ml-2 text-error text-sm font-medium">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
            {loadingMembers ? (
                <div className="bg-white p-4 flex justify-center items-center h-[80%]">Loading...</div>
            ) : errorMembers ? (
                <div className="bg-white p-4 flex justify-center items-center h-[80%]">{errorMembers}</div>
            ) : (
                <MemberList members={members} />
            )}

            {showEditPopup && (
                <EditForum
                    forum={currentForum}
                    onClose={handleCloseEditPopup}
                    onUpdateForum={handleUpdateForum}
                />
            )}

            {showDeletePopup && (
                <DeleteForum
                    forum={currentForum}
                    onClose={handleCloseDeletePopup}
                    onDeleteForum={handleDeleteForum}
                />
            )}
        </div>
    );
};

export default ForumDetails;
