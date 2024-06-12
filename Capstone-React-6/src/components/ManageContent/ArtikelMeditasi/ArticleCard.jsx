import React from 'react'

const ArticleCard = () => {
    // Dummy data
    const articleData = [
        {
            id: 1,
            judul: "Menyambut Hidup Tenang",
            waktu: "Bacaan 2 menit",
            pembaca: 320,
        },
        {
            id: 2,
            judul: "Tangani OCD",
            waktu: "Bacaan 3 menit",
            pembaca: 90,
        },
        {
            id: 3,
            judul: "Panduan Untuk Meditasi",
            waktu: "Bacaan 1 menit",
            pembaca: 102,
        },
        {
            id: 4,
            judul: "Tangani Depresi",
            waktu: "Bacaan 2 menit",
            pembaca: 292,
        }
    ];

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {articleData.map((article) => (
                <div key={article.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="../../../../public/Content/card-artikel.png" alt={article.judul} className="object-cover w-40 h-40 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4">
                        <h4 className="text-base font-semibold mb-1 truncate">{article.judul}</h4>
                        <p className="text-xs mb-8">{article.waktu}</p>
                        <p className="text-xs w-1/2"><span className="font-semibold">{article.pembaca}</span> Pembaca</p>
                    </div>
                </div>
            ))}


            {/* Tambah Musik */}
            <div className="bg-[#FF8080] rounded-2xl flex flex-col justify-center w-40 h-40 cursor-pointer">
                <h1 className="text-white font-semibold text-xl px-8">Tambah Artikel Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-10 h-10 ml-7 mt-2">
                    <img src="../../../../public/Content/Add.svg" alt="" className="w-8 h-8"  />
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;