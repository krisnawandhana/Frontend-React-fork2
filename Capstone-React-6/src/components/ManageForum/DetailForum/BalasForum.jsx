import React, { useState } from 'react';

const BalasForum = ({ replies }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="px-14">
            <div className="flex items-center mb-5">
                <img src="/Forum/chat.svg" alt="" className="w-5 h-5 mr-2" />
                <p className="text-sm font-medium text-primary mr-1">{replies.length} Balasan</p>
                <img src="/Forum/reply.png" alt="" className={`w-5 h-5 cursor-pointer ${replies.length === 0 ? 'hidden' : ''}`} onClick={toggleDropdown} />
            </div>
            {showDropdown && (
                <ul>
                    {replies.length > 0 ? (
                        replies.map(reply => (
                            <li key={reply.id} className="mb-4">
                                <div className="flex items-start mb-3">
                                    <img src={reply.user.profile_picture || `/Forum/default-avatar.png`} alt={reply.user.username} className="h-9 w-9 rounded-full mr-4" />
                                    <div className="flex flex-col bg-light-2 py-3 px-4 rounded-lg">
                                        <span className="font-semibold text-sm mb-1">{reply.user.username}</span>
                                        <p className="text-xs">{reply.content}</p>
                                    </div>
                                </div>
                                <hr />
                            </li>
                        ))
                    ) : (
                        <li className="mb-4">
                            Tidak ada balasan untuk post ini.
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}

export default BalasForum;
