import React, { useState } from 'react';
import ForumItem from './ForumItem';
import ForumDetails from './ForumDetails';

const DetailForum = ({ selectedForumId }) => {
    const [showDetails, setShowDetails] = useState(false);

    const forums = [
        {
            id: 1,
            image: 'talklife.png',
            name: 'Talk Life',
            description: 'Komunitas yang membantu pengguna dari seluruh Indonesia berbagi pengalaman, mendukung satu sama lain, dan mengatasi tantangan kesehatan mental bersama',
            members: 109,
            memberList: ['Asari', 'Bintang', 'Wildan Imanika', 'Yuyun', 'Vera'],
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
            description: 'Komunitas yang mendukung penerimaan diri dan cinta terhadap diri sendiri.',
            members: 42,
            memberList: ['Budi Santoso', 'Sinta Dewi', 'Rani Andini'],
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
            description: 'Tempat berbagi suasana hati dan mendukung satu sama lain.',
            members: 42,
            memberList: ['Bagus Pratama', 'Diana Putri', 'Rina Andriani'],
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
            description: 'Forum untuk berbagi dan mendiskusikan kesehatan mental.',
            members: 88,
            memberList: ['Siti Nurhaliza', 'Budi Hartono', 'Joko Widodo'],
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
            description: 'Tempat berbagi inspirasi dan motivasi setiap hari.',
            members: 32,
            memberList: ['Agus Pratama', 'Maria Bella', 'Yusuf Anwar'],
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
            {showDetails ? (
                <ForumDetails forum={forum} setShowDetails={setShowDetails} />
            ) : (
                <ForumItem forum={forum} setShowDetails={setShowDetails} />
            )}
        </div>
    );
};

export default DetailForum;
