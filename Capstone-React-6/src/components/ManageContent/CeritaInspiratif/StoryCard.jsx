import React, {useState, useEffect} from 'react'
import AddStoryForm from './AddStoryForm';
import { getStories } from '../../../utils/stories';

const ArticleCard = ({ refreshData, setRefreshData }) => {
    const [storyData, setStoryData] = useState([]);
    
    useEffect(() => {
        const fetchStory = async () => {
            try {
                const token = localStorage.getItem('token'); // Get token from local storage
                if (!token) {
                    throw new Error('No token found');
                }
                const { success, data } = await getStories(1, 4, 'id', 'desc', '', token);
                if (success) {
                    setStoryData(data.data); // Update to match the actual API response structure
                } else {
                    console.error('Failed to fetch story:', data.message);
                }
            } catch (error) {
                console.error('Error fetching story:', error.response || error.message);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error response status:', error.response.status);
                }
            } 
        };

        fetchStory();
    }, [refreshData]);
    
    const closeModal = () => {
        const modal = document.getElementById('addStoryModal');
        if (modal) {
          modal.close();
        }
    };

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {storyData.map((story) => (
                <div key={story.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="/Content/card-inspiratif.png" alt={story.title} className="object-cover w-36 h-36 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3">
                        <h4 className="text-base font-semibold mb-3 truncate">{story.title}</h4>
                        <br />
                        <p className="text-xs w-1/2"><span className="font-semibold">{story.view_count}</span> Pembaca</p>
                    </div>
                </div>
            ))}


            {/* Tambah Cerita */}
            <div className="bg-[#08B6D5] rounded-2xl flex flex-col justify-center w-36 h-36 cursor-pointer" onClick={() => document.getElementById('addStoryModal').showModal()}>
                <h1 className="text-white font-semibold text-lg px-8">Tambah Cerita Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-8 h-8 ml-7 mt-2">
                    <img src="/Content/Add.svg" alt="" className="w-6 h-6"  />
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="addStoryModal" className="modal">
            <div className="bg-[#07A4C0] pt-4 rounded-3xl w-full max-w-2xl h-3/7">
                    <div className="flex justify-between items-center px-5 pb-4">
                        <h3 className="font-semibold text-xl text-white mx-4">Tambah Cerita</h3>
                        <form method="dialog">
                            {/* Close button */}
                            <button className="btn btn-sm btn-circle btn-ghost text-white">✕</button>
                        </form>
                    </div>
                    {/* Your form content here */}
                    <AddStoryForm closeModal={closeModal} setRefreshData={setRefreshData} />
                </div>
            </dialog>
        </div>
    )
}

export default ArticleCard;