import React from 'react';
import ForumContent from './ForumContent';

const ForumItem = ({ forum, setShowDetails }) => (
    <div>
        <div onClick={() => setShowDetails(true)} className="mb-5 flex items-center pb-2 border-b-2">
            <img src={`/Forum/${forum.image}`} alt={forum.name} className="h-16 w-16 mr-4" />
            <div>
                <h2 className="text-lg font-semibold">{forum.name}</h2>
                <p className="text-sm text-gray-500">{forum.members} anggota</p>
            </div>
        </div>
        <ForumContent originalPost={forum.originalPost} replies={forum.replies} />
    </div>
);

export default ForumItem;
