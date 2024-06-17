// import React from 'react'

// const ForumData = ({ setSelectedForumId }) => {
//     const forums = [
//         { id: 1, name: 'Talk Life', members: 109, time: '11:12 PM', image: 'talklife.png' },
//         { id: 2, name: 'Love Yourself', members: 42, time: '11:12 PM', image: 'loveyourself.png' },
//         { id: 3, name: 'Mood Space', members: 42, time: '11:12 PM', image: 'moodspace.png' },
//         { id: 4, name: 'Mental Health Forum', members: 88, time: '11:12 PM', image: 'mentalhealth.png' },
//         { id: 5, name: 'Inspire', members: 32, time: '11:12 PM', image: 'inspire.png' },
//       ];

//     return (
//         <div>
//             <ul>
//                 {forums.map((forum) => (
//                     <li key={forum.id} className="mb-2">
//                         <button
//                             onClick={() => setSelectedForumId(forum.id)}
//                             className="flex items-center p-2 shadow rounded-lg hover:bg-blue-100 w-full text-left"
//                         >
//                             <img src={`/Forum/${forum.image}`} alt={forum.name} className="h-14 w-14 mr-4" />
//                             <div>
//                                 <h3 className="font-semibold text-sm">{forum.name}</h3>
//                                 <p className="text-xs text-gray-600">{forum.members} anggota</p>
//                             </div>
//                             <span className="ml-auto text-xs text-gray-500">{forum.time}</span>
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default ForumData;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForumData = ({ setSelectedForumId }) => {
    const [forums, setForums] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkwNTU1OTEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.x0Wp6nzrnOvOTEXsvlr_RLhE2t-vJnVqeKhlzDcxGbM'; // Ganti dengan token otentikasi Anda

    useEffect(() => {
        const fetchForums = async () => {
            try {
                const response = await axios.get('https://dev-capstone.practiceproject.tech/v1/doctors/forums?page=1&limit=10', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setForums(response.data.data); // Sesuaikan dengan struktur data dari API
            } catch (error) {
                console.error('Error fetching forum data:', error);
            }
        };

        fetchForums();
    }, [token]);

    // Fungsi untuk mendapatkan waktu secara acak dalam format 12 jam
    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 12) + 1;
        const minutes = Math.floor(Math.random() * 60);
        const ampm = Math.random() > 0.5 ? 'AM' : 'PM';
        return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    };

    return (
        <div>
            <ul>
                {forums.map((forum) => {
                    console.log('Forum ID:', forum.id); // Tambahkan log untuk memastikan ID tersedia dan unik
                    return (
                        <li key={forum.id} className="mb-2">
                            <button
                                onClick={() => setSelectedForumId(forum.id)}
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
        </div>
    );
};

export default ForumData;
