import React from 'react';

const BalasForum = ({ replies }) => {
    return (
        <div className="px-14">
            <div className="flex items-center mb-5">
                <img src="/Forum/chat.svg" alt="" className="w-5 h-5 mr-2" />
                <p className="text-sm font-medium text-primary mr-1">2 Balasan</p>
                <img src="/Forum/reply.png" alt="" className="w-5 h-5" />
            </div>
            <ul>
                {replies.map(reply => (
                    <li key={reply.id} className="mb-4">
                        <div className="flex items-start mb-5">
                            <img src={`/Forum/${reply.avatar}`} alt={reply.name} className="h-9 w-9 rounded-full mr-4" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm mb-1">{reply.name}</span>
                                <p className="text-xs">{reply.content}</p>
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BalasForum;
