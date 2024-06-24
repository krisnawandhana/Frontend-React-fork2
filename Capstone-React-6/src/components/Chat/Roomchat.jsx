import React, { useState, useEffect } from 'react';
import FloatingChatButton from '../Dashboard/FloatingChatButton';
import axios from 'axios'; // Import axios for HTTP requests
import { getChatMessages, sendConsultationNote } from '../../utils/chatAPI';

const Roomchat = ({ selectedPatient }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showOption2, setShowOption2] = useState(false);
    const [consultationData, setConsultationData] = useState({
        consultation_id: 0,
        music_id: 0,
        forum_id: 0,
        main_point: '',
        next_step: '',
        additional_note: '',
        mood_tracker_note: ''
    });
    const doctorAvatar = '/Chat/doctor.png';

    useEffect(() => {
        if (selectedPatient) {
            console.log('Selected Patient ID:', selectedPatient.id);
            fetchMessages(selectedPatient.id);
        }
    }, [selectedPatient]);

    const fetchMessages = async (chatId) => {
        const token = localStorage.getItem('token'); 
        try {
            const response = await getChatMessages(chatId, 0, 1, 10, token);
            console.log('Response:', response); // Log the entire response for debugging
            if (response && response.success) {
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setMessages(response.data);
                } else {
                    console.warn('No messages found for chatId:', chatId);
                    setMessages([]);
                }
            } else {
                console.error('Failed to fetch chat messages:', response?.message || 'Unknown error');
            }
        } catch (error) {
            console.error('Error fetching chat messages:', error);
        }
    };

    const handleSendMessage = () => {
        // Logic to send message will be added here
        setInputMessage('');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmEndConsultation = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage = { sender: 'system', text: `Konsultasi Selesai ${currentTime}`, time: currentTime };

        setMessages(prevMessages => [...prevMessages, newMessage]);

        setShowModal(false);
        setShowNoteModal(true);
        console.log(`Konsultasi dengan ${selectedPatient.name} telah diakhiri.`);
    };

    const handleConfirmSendNote = () => {
        setShowNoteModal(false);
        setShowOption2(true); // Show the form for sending the consultation note
      };

      const handleSendNote = async () => {
        const token = localStorage.getItem('token');
        const dataToSend = {
          ...consultationData,
          consultation_id: selectedPatient.id // Atau nilai yang sesuai dengan consultation_id yang diharapkan
        };
      
        try {
          console.log(JSON.stringify(dataToSend, null, 2)); // Log the data you're actually sending
          await sendConsultationNote(token, dataToSend); // Send the consultation note
          setShowOption2(false); // Hide the form
        } catch (error) {
          console.error('Failed to send consultation note:', error);
          // Handle error state or display an error message to the user
        }
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setConsultationData(prevData => ({
            ...prevData,
            [name]: value.trim() // Menggunakan trim() untuk menghapus spasi kosong di awal dan akhir nilai
        }));
    };

    return (
        <>
            {showOption2 ? (
                <div className="ml-4">
                    <div className="h-[590px] overflow-y-auto">
                        <div className="mb-7">
                            <h3 className="text-primary font-semibold mb-4">Rekomendasi layanan</h3>
                            <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                <div className="flex items-center">
                                    <input type="checkbox" id="moodtracker" className="mr-2" />
                                    <label htmlFor="moodtracker" className="text-sm">Mood Tracker</label>
                                </div>
                                <input
                                    type="text"
                                    className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                    onChange={handleInputChange}
                                    name="mood_tracker_note"
                                    placeholder="Lacak Suasana Hati"
                                />
                            </div>
                            <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                <div className="flex items-center">
                                    <input type="checkbox" id="musikmeditasi" className="mr-2" />
                                    <label htmlFor="musikmeditasi" className="text-sm">Meditasi Musik Meditasi</label>
                                </div>
                                <input
                                    type="text"
                                    className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                    onChange={handleInputChange}
                                    name="music_id"
                                    placeholder="Rekomendasi musik meditasi"
                                />
                            </div>
                            <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                <div className="flex items-center">
                                    <input type="checkbox" id="forum" className="mr-2" />
                                    <label htmlFor="forum" className="text-sm">Forum</label>
                                </div>
                                <input
                                    type="text"
                                    className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                    onChange={handleInputChange}
                                    name="forum_id"
                                    placeholder="Rekomendasi forum"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-primary font-semibold mb-4">Rangkuman konsultasi</h3>
                            <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="poindiskusi" className="text-sm w-1/3 mb-1">Poin Diskusi</label>
                                    <input
                                        type="text"
                                        id="poindiskusi"
                                        className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                        onChange={handleInputChange}
                                        name="main_point"
                                        placeholder="Ketikkan poin diskusi"
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="langkah" className="text-sm w-1/3 mb-1">Langkah Selanjutnya</label>
                                    <input
                                        type="text"
                                        id="langkah"
                                        className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                        onChange={handleInputChange}
                                        name="next_step"
                                        placeholder="Ketikkan langkah selanjutnya"
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="tambahan" className="text-sm w-1/3 mb-1">Tambahan</label>
                                    <input
                                        type="text"
                                        id="tambahan"
                                        className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm"
                                        onChange={handleInputChange}
                                        name="additional_note"
                                        placeholder="Ketikkan langkah tambahan"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-3">
                        <button onClick={handleSendNote} className="bg-primary text-white px-4 py-2 rounded-3xl text-sm">
                            Kirimkan Catatan
                        </button>
                        <button onClick={() => setShowOption2(false)} className="border-primary border-2 text-primary px-4 py-2 rounded-3xl text-sm">
                            Batal
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Roomchat UI */}
                    <div className="bg-white rounded-lg border border-gray-300 flex flex-col overflow-y-auto h-[590px] mb-2">
                        <div className="mb-4 flex items-center justify-between shadow py-5 px-3">
                            <div className="flex">
                                <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-8 h-9 rounded-full mr-3" />
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm">{selectedPatient.name}</span>
                                    <span className="text-gray-400 text-xs font-normal">pasien</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setShowModal(true)}>
                                    <img src="/Chat/check.svg" alt="" className="w-5 h-5" />
                                </button>
                                <img src="/Chat/video.svg" alt="" className="w-5 h-5" />
                                <img src="/Chat/phone.svg" alt="" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex-grow overflow-y-auto mb-4">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex mx-4 ${message.role === 'doctor' ? 'justify-end' : 'justify-start'} mb-4`}>
                                    <div className="flex">
                                        {message.role === 'user' && (
                                            <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-8 h-8 rounded-full mr-3" />
                                        )}
                                        <div className={`px-5 py-3 text-sm rounded-lg ${message.role === 'doctor' ? 'bg-primary-subtle text-white text-right ml-52' : 'bg-dark-4 text-white text-left w-2/3'}`}>
                                            <p>{message.message}</p>
                                        </div>
                                        {message.role === 'doctor' && (
                                            <img src={doctorAvatar} alt="Doctor" className="w-8 h-8 rounded-full ml-3" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Input Message Box */}
                    <div className="flex gap-3">
                        <img src="/Chat/File.svg" alt="" className="w-7" />
                        <div className="flex items-center w-full border border-gray-400 rounded-lg px-3">
                            <img src="/Chat/Smile.svg" alt="" className="w-4 mr-1" />
                            <input
                                type="text"
                                className="flex-grow p-2 text-sm w-full"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Tulis pesan"
                            />
                        </div>
                        <button onClick={handleSendMessage}>
                            <img src="/Chat/Send.svg" alt="" className="w-9" />
                        </button>
                    </div>

                    {/* Modals */}
                    {showModal && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-1/4">
                                <h3 className="text-lg font-semibold mb-6 text-center">Selesaikan Konsultasi</h3>
                                <p className="mb-7 text-center text-gray-500 px-5 text-sm">Apakah Anda Yakin Ingin Menyelesaikan Konsultasi "{selectedPatient.name}"?</p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={handleConfirmEndConsultation}
                                        className="bg-primary text-white px-4 py-2 rounded-3xl text-sm"
                                    >
                                        Akhiri
                                    </button>
                                    <button
                                        onClick={handleCloseModal}
                                        className="border-primary border-2 text-primary px-4 py-2 rounded-3xl text-sm"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {showNoteModal && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex items-center justify-end pr-52 z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-1/4">
                                <h3 className="text-lg font-semibold mb-6 text-center">Kirimkan Catatan</h3>
                                <p className="mb-7 text-center text-gray-500 px-5 text-sm">Tambahkan Catatan dan Rangkuman Konsultasi untuk dikirim kepada "{selectedPatient.name}".</p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={handleConfirmSendNote}
                                        className="bg-primary text-white px-4 py-2 rounded-3xl text-sm"
                                    >
                                        Kirim Catatan
                                    </button>
                                    <button
                                        onClick={() => setShowNoteModal(false)}
                                        className="border-primary border-2 text-primary px-4 py-2 rounded-3xl text-sm"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <FloatingChatButton />
                </div>
            )}
        </>
    );
};

export default Roomchat;
