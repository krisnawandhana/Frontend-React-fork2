import React from 'react'

const DaftarCerita = () => {
    // Dummy data
    const storyData = [
        {
            id: 1,
            judul: "Panduan Lengkap Untuk meditasi Harian",
            pengarang: "Rina Irawan",
            pembaca: 1.110,
            gambar: "/Content/cerita1.png",
        },
        {
            id: 2,
            judul: "Jalan Menuju Hidup Sehat",
            pengarang: "Arif Pratama",
            pembaca: 1.099,
            gambar: "/Content/cerita2.png",
        },
        {
            id: 3,
            judul: "Cara Efektif Meditasi Harian",
            pengarang: "Maya",
            pembaca: 900,
            gambar: "/Content/cerita3.png",
        }
    ];

    return (
        <div className="text-dark-2">
            <div className="flex justify-between items-center text-center mb-4">
                <h3 className="text-lg font-semibold">Daftar Cerita Inspiratif</h3>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img src="/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Temukan Cerita"
                            className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
                        />                        
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-3 gap-5">
                {storyData.map((story) => (
                    <div key={story.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <img src={story.gambar} alt={story.judul} className="w-[90%] mt-3 mx-3 h-40" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2 truncate">{story.judul}</h4>
                            <p className="text-sm text-gray-500 mb-1">{story.pengarang}</p>
                            <p className="text-sm text-gray-500">{story.pembaca} Pembaca</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DaftarCerita;