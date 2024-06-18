import React, { useState } from 'react';
import ChatModal from './ChatModal';

const FloatingChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <>
            <button
                onClick={toggleChat}
                className="fixed bottom-11 right-14 bg-primary p-3 rounded-full shadow-lg"
            >
                <img src="/Dashboard/floatingchat.svg" alt="Chat Icon" className="w-6 h-6" />
            </button>
            {isChatOpen && <ChatModal onClose={toggleChat} />}
        </>
    );
};

export default FloatingChatButton;
