import React, { useState, useEffect } from 'react'
import { getMusics } from '../../../utils/musics.js';
import AddMusicForm from './AddMusicForm';

const MusicCard = ({ refreshData, setRefreshData }) => {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        const fetchMusicData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found');
                return;
            }

            const result = await getMusics(1, 4, 'id', 'desc', '', token);
            if (result.success) {
                setMusicData(result.data);
            } else {
                console.error('Failed to fetch music data:', result.message);
            }
        };

        fetchMusicData();
    }, [refreshData]);

    const closeModal = () => {
      const modal = document.getElementById('addMusicModal');
      if (modal) {
        modal.close();
      }
    };

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {musicData.map((music) => (
                <div key={music.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                <img src="/Content/card-musik.png" alt={music.title} className="object-cover w-36 h-36" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3">
                        <h4 className="text-base font-semibold mb-1 truncate">{music.title}</h4>
                        <p className="text-xs mb-8">{music.singer}</p>
                        <p className="text-xs w-1/2"><span className="font-semibold">{music.view_count}</span> Pendengar</p>
                    </div>
                </div>
            ))}


            {/* Tambah Musik */}
            <div className="bg-[#66BFA1] rounded-2xl flex flex-col justify-center w-36 h-36 cursor-pointer" onClick={() => document.getElementById('addMusicModal').showModal()}>
                <h1 className="text-white font-semibold text-xl px-8">Tambah Musik Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-8 h-8 ml-7 mt-2">
                  <img src="/Content/Add.svg" alt="Add" className="w-6 h-6" />
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="addMusicModal" className="modal">
                <div className="bg-[#49B08E] pt-4 rounded-3xl w-full max-w-2xl h-3/7">
                  <div className="flex justify-between items-center px-5 pb-4">
                    <h3 className="font-semibold text-xl text-white mx-4">Tambah Musik</h3>
                    <form method="dialog">
                        {/* Close button */}
                        <button className="btn btn-sm btn-circle btn-ghost text-white">✕</button>
                    </form>
                  </div>
                  {/* Your form content here */}
                  <AddMusicForm closeModal={closeModal} setRefreshData={setRefreshData} />
                </div>
            </dialog>
        </div>
    )
}

export default MusicCard;