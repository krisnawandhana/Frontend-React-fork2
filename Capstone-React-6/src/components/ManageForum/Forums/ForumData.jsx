import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForumData = ({ setSelectedForumId }) => {
    const [forums, setForums] = useState([]);
    const token = localStorage.getItem('token'); // Replace with your authentication token

    useEffect(() => {
        const fetchForums = async () => {
            try {
                const response = await axios.get('https://dev-capstone.practiceproject.tech/v1/doctors/forums', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('API Response:', response.data); // Log API response structure
                setForums(response.data.data || []); // Ensure forums is an array
            } catch (error) {
                console.error('Error fetching forum data:', error);
            }
        };

        fetchForums();
    }, [token]);

    const handleForumClick = (forumId) => {
        setSelectedForumId(forumId);
        console.log('Selected Forum ID:', forumId); // Log the selected forum ID
    };

    // Function to get a random time in 12-hour format
    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 12) + 1;
        const minutes = Math.floor(Math.random() * 60);
        const ampm = Math.random() > 0.5 ? 'AM' : 'PM';
        return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    };

    return (
        <div>
            {forums.length === 0 ? (
                <p>Belum ada forum yang dibuat</p>
            ) : (
                <ul>
                    {forums.map((forum) => {
                        return (
                            <li key={forum.id} className="mb-2">
                                <button
                                    onClick={() => handleForumClick(forum.id)} // Call handleForumClick with forum.id
                                    className="flex items-center p-2 shadow rounded-lg hover:bg-blue-100 w-full text-left"
                                >
                                    <img src={forum.image_url} alt={forum.name} className="h-14 w-14 mr-4 rounded-lg" />
                                    <div>
                                        <h3 className="font-semibold text-sm">{forum.name}</h3>
                                        <p className="text-xs text-gray-600">{forum.number_of_members} anggota</p>
                                    </div>
                                    <span className="ml-auto text-xs text-gray-500">{getRandomTime()}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default ForumData;
