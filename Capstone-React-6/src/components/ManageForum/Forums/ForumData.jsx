import React from 'react'

const ForumData = ({ setSelectedForumId }) => {
    const forums = [
        { id: 1, name: 'Talk Life', members: 109, time: '11:12 PM', image: 'talklife.png' },
        { id: 2, name: 'Love Yourself', members: 42, time: '11:12 PM', image: 'loveyourself.png' },
        { id: 3, name: 'Mood Space', members: 42, time: '11:12 PM', image: 'moodspace.png' },
        { id: 4, name: 'Mental Health Forum', members: 88, time: '11:12 PM', image: 'mentalhealth.png' },
        { id: 5, name: 'Inspire', members: 32, time: '11:12 PM', image: 'inspire.png' },
      ];

    return (
        <div>
            <ul>
                {forums.map((forum) => (
                    <li key={forum.id} className="mb-2">
                        <button
                            onClick={() => setSelectedForumId(forum.id)}
                            className="flex items-center p-2 shadow rounded-lg hover:bg-blue-100 w-full text-left"
                        >
                            <img src={`/Forum/${forum.image}`} alt={forum.name} className="h-14 w-14 mr-4" />
                            <div>
                                <h3 className="font-semibold text-sm">{forum.name}</h3>
                                <p className="text-xs text-gray-600">{forum.members} anggota</p>
                            </div>
                            <span className="ml-auto text-xs text-gray-500">{forum.time}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ForumData;