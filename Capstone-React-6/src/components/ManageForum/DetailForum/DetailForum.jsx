import React from 'react';
import BalasForum from './BalasForum';

const DetailForum = ({ selectedForumId }) => {
    const forums = [
        {
            id: 1,
            image: 'talklife.png',
            name: 'Talk Life',
            members: 109,
            originalPost: {
                avatar: 'man1.svg',
                name: 'Kevin Putra Bima',
                content: 'Akhir-akhir ini aku merasa hidupku tidak punya tujuan...',
            },
            replies: [
                {
                    id: 1,
                    avatar: 'woman1.svg',
                    name: 'Anna',
                    content: 'Saya mengerti perasaanmu, Kevin...',
                },
                {
                    id: 2,
                    avatar: 'woman2.svg',
                    name: 'Tiara Dista',
                    content: 'Mungkin kamu perlu mencoba hobi baru...',
                },
            ],
        },
        {
            id: 2,
            image: 'loveyourself.png',
            name: 'Love Yourself',
            members: 42,
            originalPost: {
                avatar: 'woman3.svg',
                name: 'Dewi Anggraeni',
                content: 'Bagaimana cara mencintai diri sendiri?',
            },
            replies: [
                {
                    id: 1,
                    avatar: 'man2.svg',
                    name: 'Budi Santoso',
                    content: 'Mulailah dengan menerima diri sendiri...',
                },
                {
                    id: 2,
                    avatar: 'woman1.svg',
                    name: 'Sinta Dewi',
                    content: 'Cintai dirimu sendiri sebelum mencintai orang lain.',
                },
            ],
        },
        {
            id: 3,
            image: 'moodspace.png',
            name: 'Mood Space',
            members: 42,
            originalPost: {
                avatar: 'woman2.svg',
                name: 'Citra Lestari',
                content: 'Tempat berbagi suasana hati...',
            },
            replies: [
                {
                    id: 1,
                    avatar: 'man1.svg',
                    name: 'Bagus Pratama',
                    content: 'Apapun suasana hatimu, kita di sini untukmu.',
                },
                {
                    id: 2,
                    avatar: 'woman3.svg',
                    name: 'Diana Putri',
                    content: 'Hari ini aku merasa bahagia tanpa alasan.',
                },
            ],
        },
        {
            id: 4,
            image: 'mentalhealth.png',
            name: 'Mental Health Forum',
            members: 88,
            originalPost: {
                avatar: 'man2.svg',
                name: 'Andi Putra',
                content: 'Bagaimana cara menjaga kesehatan mental?',
            },
            replies: [
                {
                    id: 1,
                    avatar: 'woman1.svg',
                    name: 'Siti Nurhaliza',
                    content: 'Pentingnya memiliki rutinitas harian.',
                },
                {
                    id: 2,
                    avatar: 'man1.svg',
                    name: 'Budi Hartono',
                    content: 'Berbagi pengalaman tentang terapi.',
                },
            ],
        },
        {
            id: 5,
            image: 'inspire.png',
            name: 'Inspire',
            members: 32,
            originalPost: {
                avatar: 'woman2.svg',
                name: 'Nina Sari',
                content: 'Berbagi inspirasi setiap hari...',
            },
            replies: [
                {
                    id: 1,
                    avatar: 'man2.svg',
                    name: 'Agus Pratama',
                    content: 'Kisah-kisah inspiratif dari para tokoh dunia.',
                },
                {
                    id: 2,
                    avatar: 'woman3.svg',
                    name: 'Maria Bella',
                    content: 'Motivasi diri untuk mencapai impian.',
                },
            ],
        },
    ];
    
    const forum = forums.find(f => f.id === selectedForumId);

    if (!forum) {
        return <div className="bg-white p-4 flex justify-center items-center h-[80%]">Pilih forum untuk melihat detail</div>;
    }

    return (
        <div className="bg-white p-2 border rounded-lg">
            {/* Judul Forum */}
            <div className="mb-5 flex items-center pb-2 border-b-2">
                <img src={`/Forum/${forum.image}`} alt={forum.name} className="h-16 w-16 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">{forum.name}</h2>
                    <p className="text-sm text-gray-500">{forum.members} anggota</p>
                </div>
            </div>

            {/* Konten Asli */}
            <div className="flex items-start mb-4">
                <img src={`/Forum/${forum.originalPost.avatar}`} alt={forum.originalPost.name} className="h-10 w-10 rounded-full mr-4" />
                <div>
                    <span className="font-semibold text-primary">{forum.originalPost.name}</span>
                    <p className="text-sm mt-2">{forum.originalPost.content}</p>
                </div>
            </div>

            {/* Balasan Forum */}
            <BalasForum replies={forum.replies} />
        </div>
    );
}

export default DetailForum;
