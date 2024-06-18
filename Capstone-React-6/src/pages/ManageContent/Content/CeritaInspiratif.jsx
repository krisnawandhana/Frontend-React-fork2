import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../../components/ManageContent/DropdownMenu';
import TopContent from '../../../components/ManageContent/CeritaInspiratif/TopContent';
import DaftarCerita from '../../../components/ManageContent/CeritaInspiratif/DaftarCerita';
import NewStoryList from '../../../components/ManageContent/CeritaInspiratif/NewStoryList';
import { getStoryCount, getLikedStoryCount, getViewedStoryCount } from '../../../utils/stories.js';

const CeritaInspiratif = () => {
    const [selectedMenu, setSelectedMenu] = useState('Cerita Inspiratif');
    const [storyCard, setStoryCard] = useState({ unggahan: 0, pembaca: 0, suka: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        fetchCounts();
    }, []);

    const fetchCounts = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }
        const storyCountResponse = await getStoryCount(token);
        const likedStoryCountResponse = await getLikedStoryCount(token);
        const viewedStoryCountResponse = await getViewedStoryCount(token);

        if (storyCountResponse.success && likedStoryCountResponse.success && viewedStoryCountResponse.success) {
            setStoryCard({
                unggahan: storyCountResponse.data.count,
                pembaca: viewedStoryCountResponse.data.count,
                suka: likedStoryCountResponse.data.count,
            });   
        } else {
            console.log(storyCountResponse.data.count, likedStoryCountResponse.data.count, viewedStoryCountResponse.data.count);
            console.log('Failed to fetch data');
        }
    };

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

    return (
        <>
            {/* Card  */}
            <div className="grid grid-cols-4 gap-20 mb-8">
                <div className="border-gray border-r-2">
                    <DropdownMenu 
                        onMenuSelect={handleMenuSelect} 
                        selectedMenu={selectedMenu} 
                        buttonClassName="bg-[#08B6D5] px-5 py-2 rounded-3xl w-11/12" 
                        menuClassName="bg-white p-1 border border-gray rounded-3xl w-11/12" 
                        itemClassName="text-[#637381] hover:text-white hover:bg-primary hover:rounded-3xl"
                    />
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Unggahan</h2>
                    <p className="text-3xl font-semibold mt-2 ">{storyCard.unggahan}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-16">
                    <h2 className="text-md font-medium">Pembaca</h2>
                    <p className="text-3xl font-semibold mt-2 ">{storyCard.pembaca}</p>
                </div>
                <div className="flex flex-col justify-center border-gray border-r-2 pl-20">
                    <h2 className="text-md font-medium">Suka</h2>
                    <p className="text-3xl font-semibold mt-2 ">{storyCard.suka}</p>
                </div>
            </div>

            <div className="flex gap-6 mb-8">
                {/* Top Content */}
                <div className="w-[43%]">
                    <TopContent />
                </div>

                {/* Daftar Cerita */}
                <div className="w-[57%]">
                    <DaftarCerita />
                </div>
            </div>

            <div>
                {/* Daftar Terbaru */}
                <div>
                    <NewStoryList />
                </div>
            </div>
        </>
    );
};

export default CeritaInspiratif;
