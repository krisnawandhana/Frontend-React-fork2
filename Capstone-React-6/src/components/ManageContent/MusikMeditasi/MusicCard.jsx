import React from 'react'
import AddMusicForm from './AddMusicForm';

const MusicCard = () => {
    // Dummy data
    const musicData = [
        {
            id: 1,
            judul: "Infinite Calm",
            penyanyi: "Tranquil Harmony",
            pendengar: 102,
        },
        {
            id: 2,
            judul: "Calestial Flow",
            penyanyi: "Astral Meditiations",
            pendengar: 90,
        },
        {
            id: 3,
            judul: "Echoes of Peace",
            penyanyi: "Luna Grace",
            pendengar: 102,
        },
        {
            id: 4,
            judul: "Inner Peace",
            penyanyi: "Zen Harmony",
            pendengar: 992,
        }
    ];

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {musicData.map((music) => (
                <div key={music.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="/Content/card-musik.png" alt={music.judul} className="object-cover w-40 h-40 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4">
                        <h4 className="text-base font-semibold mb-1 truncate">{music.judul}</h4>
                        <p className="text-xs mb-8">{music.penyanyi}</p>
                        <p className="text-xs w-1/2"><span className="font-semibold">{music.pendengar}</span> Pendengar</p>
                    </div>
                </div>
            ))}


            {/* Tambah Musik */}
            <div className="bg-[#66BFA1] rounded-2xl flex flex-col justify-center w-40 h-40 cursor-pointer" onClick={() => document.getElementById('addMusicModal').showModal()}>
                <h1 className="text-white font-semibold text-xl px-8">Tambah Musik Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-10 h-10 ml-7 mt-2">
                <img src="/Content/Add.svg" alt="Add" className="w-8 h-8" />
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="addMusicModal" className="modal">
                <div className="modal-box bg-[#49B08E] w-full max-w-2xl h-3/7">
                <form method="dialog">
                    {/* Close button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white text-lg">✕</button>
                </form>
                <h3 className="font-semibold text-heading1 text-white mx-4">Tambah Musik</h3>
                {/* Your form content here */}
                <AddMusicForm />
                </div>
            </dialog>
        </div>
    )
}

export default MusicCard;