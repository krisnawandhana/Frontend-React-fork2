import React, { useState } from 'react';

const ChatModal = ({ onClose }) => {
    const [respond, setRespond] = useState([
        {
            role: 'ChatBot',
            content: 'Halo! Ada yang bisa saya bantu?'
        }
    ]);
    const [prompt, setPrompt] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    // Mendapatkan API_KEY 
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmit(true);
    
        const promptAwal =
            'Anda adalah asisten AI yang sangat terlatih dalam bidang medis, khususnya dalam membantu dokter dengan rekomendasi perawatan untuk pasien. Tolong berikan rekomendasi perawatan yang profesional dan sesuai dengan praktik medis terbaik';
    
        // Mengirim permintaan ke API OpenAI
        try {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + API_KEY,
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        // Menyertakan pesan awal dan input pengguna ke dalam permintaan
                        messages: [{ role: "user", content: `${promptAwal} ${prompt}` }],
                    }),
                }
            );
    
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
    
            const data = await response.json();
            const reply = data.choices[0].message.content;
    
            // Menambahkan respon dari ChatBot dan input pengguna ke dalam state respond
            setRespond([
                ...respond, 
                { role: 'User', content: prompt },
                { role: 'ChatBot', content: reply }
            ]);
    
            // Mengosongkan input pengguna setelah pengiriman berhasil
            setPrompt("");
            setIsSubmit(false);
        } catch (error) {
            console.error("Error:", error);
            // Menambahkan pesan error ke array respond
            setRespond([...respond, { role: 'ChatBot', message: "An error occurred while fetching the response." }]);
            setIsSubmit(false);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center pr-14 pt-8 z-50">
            <div className="bg-light-1 rounded-3xl shadow-lg w-1/4">
                <div className="flex shadow rounded-3xl items-center px-4 py-8 bg-white text-dark-2">
                    <h2 className="text-sm text-primary-darker font-semibold w-[97%] flex justify-center">AI Chat</h2>
                    <button onClick={onClose} className="text-primary-darker hover:text-gray-700">&times;</button>
                </div>
                <div className="overflow-y-auto h-[550px] p-4">
                    <h1 className="flex justify-center text-xs text-dark-2 font-medium mb-4 mt-1">Hari ini, 09:00 WIB</h1>
                    {respond.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'ChatBot' ? 'justify-start' : 'justify-end'} mb-3`}>
                            {message.role === 'ChatBot' ? (
                                <>
                                    <img src="/Dashboard/avachat.png" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                    <div className={`p-2 rounded-lg ${message.role === 'ChatBot' ? 'bg-white text-black text-xs' : 'bg-white text-black text-xs'}`}>
                                        <p>{message.content}</p> 
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div className={`p-2 rounded-lg ${message.role === 'ChatBot' ? 'bg-white text-black text-xs' : 'bg-white text-black text-xs'}`}>
                                        <p>{message.content}</p> 
                                    </div>
                                    <img src="/Dashboard/avadoctorchat.png" alt="Avatar" className="w-8 h-8 rounded-full ml-2" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2 bg-white rounded-3xl p-3">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Tulis Pesan..."
                        className="flex-grow py-3 px-6 border text-xs rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        type="submit"
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 ${isSubmit ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-darker"}`}
                        disabled={isSubmit}
                    >
                        {isSubmit ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            </svg>
                        ) : (
                            <img src="/Dashboard/send.svg" alt="Send" className="h-5 w-5" />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatModal;
