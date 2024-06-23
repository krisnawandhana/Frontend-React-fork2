import React, { useState } from 'react';
import FloatingChatButton from '../Dashboard/FloatingChatButton';

const Roomchat = ({ selectedPatient }) => {
    const initialMessages = {
        1: [
            { sender: 'doctor', text: 'Selamat pagi, Andi. Apa yang bisa saya bantu hari ini?', time: '12:24' },
            { sender: 'patient', text: 'Selamat pagi, Dok. Saya merasa sangat cemas belakangan ini, dan sepertinya semakin parah.', time: '12:24' },
            { sender: 'doctor', text: 'Bisa Anda jelaskan lebih lanjut? Kapan biasanya kecemasan ini muncul dan bagaimana perasaannya?', time: '12:24' },
            { sender: 'patient', text: 'Saya merasa cemas hampir sepanjang waktu. Saya sering merasa gugup tanpa alasan yang jelas, dan kadang-kadang jantung saya berdebar sangat kencang.', time: '12:24' },
        ],
        2: [
            { sender: 'doctor', text: 'Selamat pagi, Viona. Ada yang bisa saya bantu?', time: '11:00' },
            { sender: 'patient', text: 'Selamat pagi Dokter, saya merasa tidak enak badan.', time: '11:02' },
            { sender: 'doctor', text: 'Bisa Anda jelaskan gejala yang Anda rasakan?', time: '11:04' },
            { sender: 'patient', text: 'Saya merasa pusing dan mual.', time: '11:05' },
        ],
        3: [
            { sender: 'doctor', text: 'Selamat malam, Rizky. Apa yang membuat Anda tidak nyaman?', time: '10:12' },
            { sender: 'patient', text: 'Tidak ada yang spesifik, hanya merasa lelah.', time: '10:14' },
            { sender: 'doctor', text: 'Apakah Anda sudah cukup istirahat?', time: '10:15' },
            { sender: 'patient', text: 'Saya merasa kurang tidur akhir-akhir ini.', time: '10:16' },
        ],
        4: [
            { sender: 'doctor', text: 'Selamat siang, Dewi. Bagaimana kabar Anda hari ini?', time: '09:12' },
            { sender: 'patient', text: 'Selamat siang, Dok. Saya merasa nyeri di perut.', time: '09:14' },
            { sender: 'doctor', text: 'Sejak kapan Anda merasakan nyeri ini?', time: '09:15' },
            { sender: 'patient', text: 'Sejak kemarin sore, Dok.', time: '09:16' },
        ],
        5: [
            { sender: 'doctor', text: 'Selamat siang, Nina. Ada yang bisa saya bantu?', time: 'Kemarin' },
            { sender: 'patient', text: 'Terima kasih, Dokter. Saya sangat terbantu.', time: 'Kemarin' },
        ],
        6: [
            { sender: 'doctor', text: 'Selamat sore, Tina. Bagaimana kondisi Anda?', time: 'Kemarin' },
            { sender: 'patient', text: 'Terima kasih banyak dokter, saya merasa lebih baik.', time: 'Kemarin' },
            { sender: 'doctor', text: 'Senang mendengarnya, Tina. Tetap jaga kesehatan.', time: 'Kemarin' },
        ],
        7: [
            { sender: 'doctor', text: 'Selamat sore, Fajar. Ada yang ingin Anda tanyakan?', time: 'Kemarin' },
            { sender: 'patient', text: 'Sangat membantu sekali dok, terima kasih.', time: 'Kemarin' },
        ],
        8: [
            { sender: 'doctor', text: 'Selamat pagi, Siti. Apa yang Anda rasakan?', time: 'Kemarin' },
            { sender: 'patient', text: 'Doakan saya cepat sembuh, Dok.', time: 'Kemarin' },
            { sender: 'doctor', text: 'Tentu, Siti. Semoga Anda segera pulih.', time: 'Kemarin' },
        ],
    };

    const [messages, setMessages] = useState(initialMessages);
    const [inputMessage, setInputMessage] = useState('');
    const doctorAvatar = '/Chat/doctor.png';
    const [showModal, setShowModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showOption2, setShowOption2] = useState(false); // New state to manage Option 2

    const handleSendMessage = () => {
        // Logic to send message will be added here
        setInputMessage('');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmEndConsultation = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessages = [
            ...(messages[selectedPatient.id] || []),
            { sender: 'system', text: `Konsultasi Selesai ${currentTime}`, time: currentTime }
        ];

        setMessages(prevMessages => ({
            ...prevMessages,
            [selectedPatient.id]: newMessages
        }));

        setShowModal(false);
        setShowNoteModal(true); // Show note modal after ending consultation
        console.log(`Konsultasi dengan ${selectedPatient.name} telah diakhiri.`);
    };

    const handleConfirmSendNote = () => {
        // Logic to handle sending note to patient will be added here
        setShowNoteModal(false);
        setShowOption2(true); // Show Option 2 after sending note
    };

    return (
        <>
            {showOption2 ? (
                <div>
                    {/* Catatan */}
                    <div className="ml-4">
                        <div className="h-[590px] overflow-y-auto">
                            <div className="mb-7">
                                <h3 className="text-primary font-semibold mb-4">Rekomendasi layanan</h3>
                                <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="moodtracker" className="mr-2" />
                                        <label htmlFor="moodtracker" className="text-sm">Mood Tracker</label>
                                    </div>
                                    <input type="text" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Lacak Suasana Hati" />
                                </div>
                                <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="musikmeditasi" className="mr-2" />
                                        <label htmlFor="musikmeditasi" className="text-sm">Meditasi Musik Meditasi</label>
                                    </div>
                                    <input type="text" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Rekomendasi musik meditasi" />
                                </div>
                                <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="forum" className="mr-2" />
                                        <label htmlFor="forum" className="text-sm">Forum</label>
                                    </div>
                                    <input type="text" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Rekomendasi forum" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-primary font-semibold mb-4">Rangkuman konsultasi</h3>
                                <div className="flex flex-col mb-3 bg-light-2 px-4 py-6 gap-2 rounded-3xl">
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="poindiskusi" className="text-sm w-1/3 mb-1">Poin Diskusi</label>
                                        <input type="text" id="poindiskusi" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Ketikkan poin diskusi" />
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="langkah" className="text-sm w-1/3 mb-1">Langkah Selanjutnya</label>
                                        <input type="text" id="langkah" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Ketikkan langkah selanjutnya" />
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="tambahan" className="text-sm w-1/3 mb-1">Tambahan</label>
                                        <input type="text" id="tambahan" className="ml-2 py-2 px-5 border border-gray-300 rounded-3xl text-sm" placeholder="Ketikkan langkah tambahan" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 mt-3">
                            <button className="bg-primary text-white px-4 py-2 rounded-3xl text-sm">
                                Kirimkan Catatan
                            </button>
                            <button onClick={() => setShowOption2(false)} className="border-primary border-2 text-primary px-4 py-2 rounded-3xl text-sm">
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Roomchat */}
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
                            {(messages[selectedPatient.id] || []).map((message, index) => (
                                <div key={index} className={`flex mx-4 ${message.sender === 'doctor' ? 'justify-end' : message.sender === 'patient' ? 'justify-start' : 'justify-center'} mb-4`}>
                                    <div className="flex">
                                        {message.sender === 'patient' && (
                                            <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-8 h-8 rounded-full mr-3" />
                                        )}
                                        <div className="flex flex-col">
                                            <div className={`px-5 py-3 text-sm rounded-lg ${message.sender === 'doctor' ? 'bg-primary-subtle text-white text-right ml-52' : message.sender === 'patient' ? 'bg-dark-4 text-white text-left w-2/3' : 'bg-green-200 text-gray-800 text-center w-full'}`}>
                                                <p>{message.text}</p>
                                            </div>
                                            {message.sender !== 'system' && (
                                                <span className={`text-xs text-gray-500 mt-2 ${message.sender === 'doctor' ? 'text-right' : 'text-left'}`}>
                                                    {message.time}
                                                </span>
                                            )}
                                        </div>
                                        {message.sender === 'doctor' && (
                                            <img src={doctorAvatar} alt="Doctor" className="w-8 h-8 rounded-full ml-3" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
