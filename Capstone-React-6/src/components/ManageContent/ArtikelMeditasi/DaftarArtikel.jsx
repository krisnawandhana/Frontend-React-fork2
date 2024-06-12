import React from 'react'

const DaftarArtikel = () => {
    // Dummy data
    const articleData = [
        {
            id: 1,
            judul: "Panduan Lengkap Untuk meditasi Harian",
            waktu: "Bacaan 2 menit",
            pembaca: 1.110,
            gambar: "../../../../public/Content/artikel1.png",
        },
        {
            id: 2,
            judul: "Jalan Menuju Hidup Sehat",
            waktu: "Bacaan 5 menit",
            pembaca: 1.099,
            gambar: "../../../../public/Content/artikel2.png",
        },
        {
            id: 3,
            judul: "Cara Efektif Meditasi Harian",
            waktu: "Bacaan 3 menit",
            pembaca: 1.000,
            gambar: "../../../../public/Content/artikel3.png",
        }
    ];

    return (
        <div className="text-dark-2">
            <div className="flex justify-between items-center text-center mb-4">
                <h3 className="text-lg font-semibold">Daftar Artikel Meditasi</h3>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img src="../../../../public/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Temukan Artikel"
                            className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
                        />                        
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-3 gap-5">
                {articleData.map((article) => (
                    <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <img src={article.gambar} alt={article.judul} className="w-[90%] mt-3 mx-3 h-40" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2 truncate">{article.judul}</h4>
                            <p className="text-sm text-gray-500 mb-1">{article.waktu}</p>
                            <p className="text-sm text-gray-500">{article.pembaca} Pembaca</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DaftarArtikel;