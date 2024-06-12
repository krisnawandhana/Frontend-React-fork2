import React from 'react'

const DaftarMusik = () => {
    // Dummy data
    const musicData = [
        {
            id: 1,
            judul: "Eternal Serenity",
            penyanyi: "Luna Grace",
            pendengar: 1.110,
            gambar: "/Content/musik1.png",
        },
        {
            id: 2,
            judul: "Inner Peace",
            penyanyi: "Zen Harmony",
            pendengar: 992,
            gambar: "/Content/musik2.png",
        },
        {
            id: 3,
            judul: "Ethereal Waves",
            penyanyi: "Serene Sounds C",
            pendengar: 1.172,
            gambar: "/Content/musik3.png",
        }
    ];

    return (
        <div className="text-dark-2">
            <div className="flex justify-between items-center text-center mb-4">
                <h3 className="text-lg font-semibold">Daftar Musik Meditasi</h3>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img src="/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Temukan Musik"
                            className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
                        />                        
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-3 gap-5">
                {musicData.map((music) => (
                    <div key={music.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <img src={music.gambar} alt={music.judul} className="w-[90%] mt-3 mx-3 h-40" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{music.judul}</h4>
                            <p className="text-sm text-gray-500 mb-1">{music.penyanyi}</p>
                            <p className="text-sm text-gray-500">{music.pendengar} Pendengar</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DaftarMusik;