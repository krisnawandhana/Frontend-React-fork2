import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../../components/ManageContent/DropdownMenu';
import TopContent from '../../../components/ManageContent/MusikMeditasi/TopContent';
import DaftarMusik from '../../../components/ManageContent/MusikMeditasi/DaftarMusik';
import NewMusicList from '../../../components/ManageContent/MusikMeditasi/NewMusicList';

const MusikMeditasi = () => {
    const [selectedMenu, setSelectedMenu] = useState('Musik Meditasi');
    const navigate = useNavigate();

    const handleMenuSelect = (menu) => {
        switch (menu) {
            case 'Musik Meditasi':
                navigate('/dashboard/managecontent/musikmeditasi');
                break;
            case 'Artikel Meditasi':
                navigate('/dashboard/managecontent/artikelmeditasi');
                break;
            case 'Cerita Inspiratif':
                navigate('/dashboard/managecontent/ceritainspiratif');
                break;
            default:
                break;
        }
        setSelectedMenu(menu);
    };

    // dummy data
    const musicCard = {
        postingan: 787,
        pendengar: 1189,
        suka: 320
    }

    return (
        <>
            {/* Card  */}
            <div className="grid grid-cols-4 gap-20 mb-8">
                <div className="border-gray border-r-2">
                    <DropdownMenu 
                        onMenuSelect={handleMenuSelect} 
                        selectedMenu={selectedMenu} 
                        buttonClassName="bg-[#6EBCB7] px-5 py-2 rounded-3xl w-11/12" 
                        menuClassName="bg-white p-1 border border-gray rounded-3xl w-11/12" 
                        itemClassName="text-[#637381] hover:text-white hover:bg-primary hover:rounded-3xl"
                    />
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Postingan</h2>
                    <p className="text-3xl font-semibold mt-2 ">{musicCard.postingan}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Pendengar</h2>
                    <p className="text-3xl font-semibold mt-2 ">{musicCard.pendengar}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-20">
                    <h2 className="text-md font-medium">Suka</h2>
                    <p className="text-3xl font-semibold mt-2 ">{musicCard.suka}</p>
                </div>
            </div>

            <div className="flex gap-6 mb-8">
                {/* Top Content */}
                <div className="w-[43%]">
                    <TopContent />
                </div>

                {/* Daftar Musik */}
                <div className="w-[57%]">
                    <DaftarMusik />
                </div>
            </div>

            <div>
                {/* Daftar Terbaru */}
                <div>
                    <NewMusicList />
                </div>
            </div>
        </>
    );
};

export default MusikMeditasi;
