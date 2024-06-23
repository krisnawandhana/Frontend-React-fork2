import React, { useState } from 'react';
import ForumContent from './ForumContent';

const ForumItem = ({ forum, setShowDetails }) => {
    const [showContent, setShowContent] = useState(false);

    const handleForumClick = () => {
        console.log('handleForumClick dipanggil');
        // setShowDetails(true);
        setShowContent(true);
        console.log('Forum yang dipilih:', forum); // Menambahkan console.log untuk data forum yang dipilih
    };

    return (
        <div>
            <div onClick={handleForumClick} className="mb-5 flex items-center pb-2 border-b-2 cursor-pointer">
                <img src={forum.image_url} alt={forum.name} className="h-16 w-16 mr-4 rounded-lg" />
                <div>
                    <h2 className="text-lg font-semibold">{forum.name}</h2>
                    <p className="text-sm text-gray-500">{forum.number_of_members} anggota</p>
                    <p className="text-sm mt-2">{forum.description}</p>
                </div>
            </div>
            {showContent && (
                <ForumContent forumId={forum} />
            )}
        </div>
    );
};

export default ForumItem;
