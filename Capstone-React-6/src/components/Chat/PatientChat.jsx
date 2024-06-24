import React, { useEffect, useState } from 'react';
import { getChatRooms } from '../../utils/chatAPI';

const PatientChat = ({ onSelectPatient }) => {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkzMzA0MzEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.YheEq_mxQGQRQKUGsxnzQ7Z0LUc0gMPEvdagQ_rDVgo';

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const response = await getChatRooms('', '', '', searchTerm, token); // Hapus filter status untuk mendapatkan semua data
                if (response.success) {
                    // Pastikan data response adalah array
                    if (Array.isArray(response.data)) {
                        setPatients(response.data);
                    } else {
                        console.error('Invalid data format from API:', response.data);
                    }
                } else {
                    console.error('Failed to fetch chat rooms:', response.message);
                }
            } catch (error) {
                console.error('Error fetching chat rooms:', error);
            }
        };

        fetchChatRooms();
    }, [searchTerm, token]);

    return (
        <div>
            <div className="relative">
                <img src="/Content/Search.svg" alt="" className="absolute left-5 top-1/3 transform -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Temukan Message"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="py-3 px-4 pl-12 w-full text-sm rounded-2xl mb-6 border-2 border-gray-300 focus:outline-none focus:ring focus:border-primary"
                />
            </div>
            <div className="overflow-y-auto h-[560px]">
                {patients.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">Tidak ada pasien yang dapat diajak chat.</p>
                ) : (
                    patients.map((patient) => (
                        <div
                            key={patient.id}
                            className={`flex items-center justify-between shadow px-3 py-5 ${patient.unread ? 'bg-blue-100' : ''} rounded-md mb-1 cursor-pointer`}
                            onClick={() => onSelectPatient(patient)}
                        >
                            <div className="flex items-center">
                                <img src={patient.user.image_url} alt={patient.user.name} className="w-9 h-9 rounded-full mr-3" />
                                <div>
                                    <h4 className="font-semibold text-sm">{patient.user.name}</h4>
                                    <p className="text-gray-600 text-xs">{patient.latest_message.message}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-xs">{patient.latest_message.date}</p>
                                {patient.unread && <span className="bg-red-500 text-white text-xs rounded-full px-1 mr-3">2</span>}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PatientChat;
