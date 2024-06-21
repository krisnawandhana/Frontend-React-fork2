import React, { useState, useEffect, useRef } from 'react';

const ChatModal = ({ onClose }) => {
    const [respond, setRespond] = useState([
        {
            role: 'ChatBot',
            content: 'Halo! Ada yang bisa saya bantu?'
        }
    ]);
    const [prompt, setPrompt] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const socket = useRef(null);
    const token = localStorage.getItem('token');
    const reconnectTimeout = useRef(null);

    const connectWebSocket = () => {
        socket.current = new WebSocket(`wss://dev-capstone.practiceproject.tech/v1/doctors/chatbots/treatment?token=${token}`);

        socket.current.onopen = () => {
            console.log("WebSocket connection established");
            setIsConnected(true);
            setErrorMessage(null);
        };

        socket.current.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                const reply = data.message;

                setRespond(prevRespond => [
                    ...prevRespond,
                    { role: 'ChatBot', content: reply }
                ]);
            } catch (error) {
                console.error("Received non-JSON message:", event.data);
                setRespond(prevRespond => [
                    ...prevRespond,
                    { role: 'ChatBot', content: event.data }
                ]);
            }
        };

        socket.current.onerror = (error) => {
            console.error("WebSocket Error:", error);
            setErrorMessage("An error occurred while fetching the response. Please try again later.");
        };

        socket.current.onclose = (event) => {
            if (event.wasClean) {
                console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.error(`WebSocket connection closed unexpectedly, code=${event.code}, reason=${event.reason}`);
                setIsConnected(false);
                setErrorMessage("Connection lost. Attempting to reconnect...");
                reconnectWebSocket();
            }
        };
    };

    const reconnectWebSocket = () => {
        if (reconnectTimeout.current) {
            clearTimeout(reconnectTimeout.current);
        }
        reconnectTimeout.current = setTimeout(() => {
            console.log("Attempting to reconnect...");
            connectWebSocket();
        }, 5000); // Attempt to reconnect every 5 seconds
    };

    useEffect(() => {
        connectWebSocket();

        return () => {
            if (socket.current) {
                socket.current.close();
            }
            if (reconnectTimeout.current) {
                clearTimeout(reconnectTimeout.current);
            }
        };
    }, [token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        setRespond(prevRespond => [
            ...prevRespond,
            { role: 'User', content: prompt }
        ]);

        if (socket.current && socket.current.readyState === WebSocket.OPEN) {
            socket.current.send(JSON.stringify({ message: prompt }));
        } else {
            console.error("WebSocket is not open. Unable to send message.");
            setErrorMessage("WebSocket is not open. Unable to send message.");
        }

        setPrompt("");
        setIsSubmit(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center pr-14 pt-8 z-50">
            <div className="bg-light-1 rounded-3xl shadow-lg w-1/4">
                <div className="flex shadow rounded-3xl items-center px-4 py-8 bg-white text-dark-2">
                    <h2 className="text-sm text-primary-darker font-semibold w-[97%] flex justify-center">AI Chat</h2>
                    <button onClick={onClose} className="text-primary-darker hover:text-gray-700">&times;</button>
                </div>
                <div className="overflow-y-auto h-[550px] p-4">
                    <h1 className="flex justify-center text-xs text-dark-2 font-medium mb-4 mt-1">Hari ini, 09:00 WIB</h1>
                    {errorMessage && (
                        <div className="bg-red-500 text-white text-xs p-2 rounded mb-4">
                            {errorMessage}
                        </div>
                    )}
                    {respond.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'ChatBot' ? 'justify-start' : 'justify-end'} mb-3`}>
                            {message.role === 'ChatBot' ? (
                                <>
                                    <img src="/Dashboard/avachat.png" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                    <div className="p-2 rounded-lg bg-white text-black text-xs">
                                        <p>{message.content}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-2 rounded-lg bg-white text-black text-xs">
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
                        aria-label="Tulis Pesan"
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
