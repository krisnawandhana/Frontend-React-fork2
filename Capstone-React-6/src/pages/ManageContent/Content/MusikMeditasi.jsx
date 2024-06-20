import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../../components/ManageContent/DropdownMenu';
import TopContent from '../../../components/ManageContent/MusikMeditasi/TopContent';
import DaftarMusik from '../../../components/ManageContent/MusikMeditasi/DaftarMusik';
import NewMusicList from '../../../components/ManageContent/MusikMeditasi/NewMusicList';
import { getMusicCount, getLikedMusicCount, getViewedMusicCount } from '../../../utils/musics.js';

const MusikMeditasi = () => {
    const [selectedMenu, setSelectedMenu] = useState('Musik Meditasi');
    const [musicCard, setMusicCard] = useState({
        postingan: '',
        pendengar: '',
        suka: ''
    });
    const [refreshData, setRefreshData] = useState(false);
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

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token tidak ditemukan');
                return;
            }

            try {
                // Fetch music count
                const musicCountResponse = await getMusicCount(token);

                if (musicCountResponse.success) {
                    setMusicCard(prevState => ({
                        ...prevState,
                        postingan: musicCountResponse.data.count
                    }));
                } else {
                    console.error('Gagal mengambil jumlah postingan musik:', musicCountResponse.message);
                }

                // Fetch liked music count
                const likedMusicCountResponse = await getLikedMusicCount(token);

                if (likedMusicCountResponse.success) {
                    setMusicCard(prevState => ({
                        ...prevState,
                        suka: likedMusicCountResponse.data.count
                    }));
                } else {
                    console.error('Gagal mengambil jumlah suka musik:', likedMusicCountResponse.message);
                }

                // Fetch viewed music count
                const viewedMusicCountResponse = await getViewedMusicCount(token);

                if (viewedMusicCountResponse.success) {
                    setMusicCard(prevState => ({
                        ...prevState,
                        pendengar: viewedMusicCountResponse.data.count
                    }));
                } else {
                    console.error('Gagal mengambil jumlah pendengar musik:', viewedMusicCountResponse.message);
                }
            } catch (error) {
                console.error('Gagal melakukan request:', error.message);
            }
        };

        fetchData();
    }, []);

    
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
                    <DaftarMusik refreshData={refreshData} setRefreshData={setRefreshData} />
                </div>
            </div>

            <div>
                {/* Daftar Terbaru */}
                <div>
                    <NewMusicList refreshData={refreshData} setRefreshData={setRefreshData} />
                </div>
            </div>
        </>
    );
};

export default MusikMeditasi;
