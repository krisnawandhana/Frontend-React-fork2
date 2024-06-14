import React from 'react';
import ForumData from './ForumData';

const Forum = ({ setSelectedForumId }) => {

    return (
        <div>
            {/* Search bar dan Add forum */}
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Temukan forum"
                    className="py-2 px-4 text-sm border border-gray-300 rounded-lg w-full mr-4"
                />
                <button className="bg-primary text-sm flex justify-center items-center gap-3 text-white p-2 rounded-lg w-[50%]"><span className="text-xl">+</span> Tambah Forum</button>
            </div>

            {/* Kumpulan Forum */}
            <div>
                <ForumData setSelectedForumId={setSelectedForumId} />
            </div>
        </div>
    );
};

export default Forum;
