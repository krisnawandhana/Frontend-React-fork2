import React, { useState, useEffect } from 'react';
import ForumItem from './ForumItem';
import ForumDetails from './ForumDetails';
import ForumContent from './ForumContent'; // Pastikan Anda mengimpor ForumContent
import { getForumById } from '../../../utils/forum.js';

const DetailForum = ({ selectedForumId }) => {
    const [showDetails, setShowDetails] = useState(true); // Default ke true untuk menampilkan anggota
    const [forum, setForum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token'); 

    useEffect(() => {
        if (selectedForumId) {
            const fetchForum = async () => {
                setLoading(true);
                try {
                    const { success, data, message } = await getForumById(selectedForumId, token);
                    if (success) {
                        console.log('Forum data fetched successfully:', data); // Logging fetched data
                        setForum(data); // Set forum data if fetch is successful
                        setError(null);
                    } else {
                        setError(message || 'Error fetching forum details');
                    }
                } catch (err) {
                    setError('Error fetching forum details');
                    console.error('Error fetching forum:', err);
                } finally {
                    setLoading(false);
                }
            };

            fetchForum();
        } else {
            // Reset forum details if no forum is selected
            setForum(null);
        }
    }, [selectedForumId]);

    // Render loading state while fetching data
    if (loading) {
        return <div className="bg-white p-4 flex justify-center items-center h-[80%]">Loading...</div>;
    }

    // Render error message if there's an error fetching data
    if (error) {
        return <div className="bg-white p-4 flex justify-center items-center h-[80%]">{error}</div>;
    }

    // Render message to select a forum if no forum is selected
    if (!selectedForumId) {
        return <div className="bg-white p-4 flex justify-center items-center h-[80%]">Pilih forum untuk melihat detail</div>;
    }

    // Toggle between ForumDetails and ForumContent
    const toggleView = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="bg-white p-2 border rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <button 
                    onClick={toggleView} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {showDetails ? 'Lihat Post' : 'Lihat Anggota'}
                </button>
            </div>
            {showDetails ? (
                <ForumDetails forum={forum} setShowDetails={setShowDetails} />
            ) : (
                <ForumContent forumId={selectedForumId} />
            )}
        </div>
    );
};

export default DetailForum;
