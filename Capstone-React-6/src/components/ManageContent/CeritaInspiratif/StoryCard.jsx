import React, {useState, useEffect} from 'react'
import AddStoryForm from './AddStoryForm';
import { getStories } from '../../../utils/stories';

const ArticleCard = () => {
    // Dummy data
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
                    console.error('Failed to fetch articles:', data.message);
                }
            } catch (error) {
                console.error('Error fetching articles:', error.response || error.message);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error response status:', error.response.status);
                }
            } 
        };

        fetchStory();
    }, []);

    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {storyData.map((story) => (
                <div key={story.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="/Content/card-inspiratif.png" alt={story.title} className="object-cover w-40 h-40 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4">
                        <h4 className="text-base font-semibold mb-1 truncate">{story.title}</h4>
                        <p className="text-xs mb-8">{story.creator}</p>
                        <p className="text-xs w-1/2"><span className="font-semibold">{story.view_count}</span> Pembaca</p>
                    </div>
                </div>
            ))}


            {/* Tambah Musik */}
            <div className="bg-[#08B6D5] rounded-2xl flex flex-col justify-center w-40 h-40 cursor-pointer" onClick={() => document.getElementById('addMusicModal').showModal()}>
                <h1 className="text-white font-semibold text-xl px-8">Tambah Cerita Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-10 h-10 ml-7 mt-2">
                    <img src="/Content/Add.svg" alt="" className="w-8 h-8"  />
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="addMusicModal" className="modal">
                <div className="modal-box bg-[#07A4C0] w-full max-w-2xl h-3/7">
                <form method="dialog">
                    {/* Close button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white text-lg">✕</button>
                </form>
                <h3 className="font-semibold text-heading1 text-white mx-4">Tambah Cerita</h3>
                {/* Your form content here */}
                <AddStoryForm />
                </div>
            </dialog>
        </div>
    )
}

export default ArticleCard;