import React from 'react'

const ArticleCard = () => {
    // Dummy data
    const storyData = [
        {
            id: 1,
            judul: "Mengatasi Kelemahan Diri Sendiri",
            pengarang: "Siti Nurhaliza",
            pembaca: 320,
        },
        {
            id: 2,
            judul: "Pelangi di Halaman",
            pengarang: "Cahya",
            pembaca: 201,
        },
        {
            id: 3,
            judul: "Bangkit Lagi dari Keterpurukan",
            pengarang: "Dena",
            pembaca: 102,
        },
        {
            id: 4,
            judul: "Ketenangan di Hati",
            pengarang: "Indah",
            pembaca: 292,
        }
    ];

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {storyData.map((story) => (
                <div key={story.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="../../../../public/Content/card-inspiratif.png" alt={story.judul} className="object-cover w-40 h-40 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4">
                        <h4 className="text-base font-semibold mb-1 truncate">{story.judul}</h4>
                        <p className="text-xs mb-8">{story.pengarang}</p>
                        <p className="text-xs w-1/2"><span className="font-semibold">{story.pembaca}</span> Pembaca</p>
                    </div>
                </div>
            ))}


            {/* Tambah Musik */}
            <div className="bg-[#08B6D5] rounded-2xl flex flex-col justify-center w-40 h-40 cursor-pointer">
                <h1 className="text-white font-semibold text-xl px-8">Tambah Cerita Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-10 h-10 ml-7 mt-2">
                    <img src="../../../../public/Content/Add.svg" alt="" className="w-8 h-8"  />
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;