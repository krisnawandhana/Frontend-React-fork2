import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../../components/ManageContent/DropdownMenu';
import TopContent from '../../../components/ManageContent/ArtikelMeditasi/TopContent';
import DaftarArtikel from '../../../components/ManageContent/ArtikelMeditasi/DaftarArtikel';
import NewArticleList from '../../../components/ManageContent/ArtikelMeditasi/NewArticleList';

const ArtikelMeditasi = () => {
    const [selectedMenu, setSelectedMenu] = useState('Artikel Meditasi');
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
    const artikelCard = {
        unggahan: 787,
        pembaca: 1189,
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
                        buttonClassName="bg-[#FF8080] px-5 py-2 rounded-3xl w-11/12" 
                        menuClassName="bg-white p-1 border border-gray rounded-3xl w-11/12" 
                        itemClassName="text-[#637381] hover:text-white hover:bg-primary hover:rounded-3xl"
                    />
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Unggahan</h2>
                    <p className="text-3xl font-semibold mt-2 ">{artikelCard.unggahan}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Pembaca</h2>
                    <p className="text-3xl font-semibold mt-2 ">{artikelCard.pembaca}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-20">
                    <h2 className="text-md font-medium">Suka</h2>
                    <p className="text-3xl font-semibold mt-2 ">{artikelCard.suka}</p>
                </div>
            </div>

            <div className="flex gap-6 mb-8">
                {/* Top Content */}
                <div className="w-[43%]">
                    <TopContent />
                </div>

                {/* Daftar Musik */}
                <div className="w-[57%]">
                    <DaftarArtikel />
                </div>
            </div>

            <div>
                {/* Daftar Terbaru */}
                <div>
                    <NewArticleList />
                </div>
            </div>
        </>
    );
};

export default ArtikelMeditasi;
