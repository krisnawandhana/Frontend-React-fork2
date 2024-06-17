import React from 'react';
import BalasForum from './BalasForum';

const ForumContent = ({ originalPost, replies }) => (
    <div>
        <div className="flex items-start mb-4">
            <img src={`/Forum/${originalPost.avatar}`} alt={originalPost.name} className="h-10 w-10 rounded-full mr-4" />
            <div>
                <span className="font-semibold text-primary">{originalPost.name}</span>
                <p className="text-sm mt-2">{originalPost.content}</p>
            </div>
        </div>
        <BalasForum replies={replies} />
    </div>
);

export default ForumContent;
