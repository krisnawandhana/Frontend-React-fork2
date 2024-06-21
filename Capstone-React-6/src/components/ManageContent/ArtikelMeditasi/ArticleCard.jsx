import React, { useState, useEffect } from 'react'
import AddArticleForm from './AddArticleForm';
import { getArticles } from '../../../utils/articles.js';

const ArticleCard = ({ refreshData, setRefreshData }) => {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const token = localStorage.getItem('token'); // Get token from local storage
                if (!token) {
                    throw new Error('No token found');
                }
                const { success, data } = await getArticles(token);
                if (success) {
                    setArticleData(data.data); // Update to match the actual API response structure
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

        fetchArticles();
    }, [refreshData]);

    const closeModal = () => {
        const modal = document.getElementById('addArticleModal');
        if (modal) {
          modal.close();
        }
    };
 
    return (
        <div className="grid grid-cols-5 gap-5 text-dark-2">
            {articleData.map((article) => (
                <div key={article.id} className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img src="/Content/card-artikel.png" alt={article.title} className="object-cover w-36 h-36 " />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3">
                        <h4 className="text-base font-semibold mb-3 truncate">{article.title}</h4>
                        <br />
                        <p className="text-xs w-1/2"><span className="font-semibold">{article.reading_time}</span> Pembaca</p>
                    </div>
                </div>
            ))}


            {/* Tambah Artikel */}
            <div className="bg-[#FF8080] rounded-2xl flex flex-col justify-center w-36 h-36 cursor-pointer" onClick={() => document.getElementById('addArticleModal').showModal()}>
                <h1 className="text-white font-semibold text-xl px-8">Tambah Artikel Baru</h1>
                <div className="bg-[#F1F5F9] opacity-40 p-1 rounded-full w-8 h-8 ml-7 mt-2">
                    <img src="/Content/Add.svg" alt="" className="w-6 h-6"  />
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="addArticleModal" className="modal">
                <div className="bg-[#FF6666] pt-4 rounded-3xl w-full max-w-2xl h-3/7">
                    <div className="flex justify-between items-center px-5 pb-4">
                        <h3 className="font-semibold text-xl text-white mx-4">Tambah Artikel</h3>
                        <form method="dialog">
                            {/* Close button */}
                            <button className="btn btn-sm btn-circle btn-ghost text-white">✕</button>
                        </form>
                    </div>
                    {/* Your form content here */}
                    <AddArticleForm closeModal={closeModal} setRefreshData={setRefreshData} />
                </div>
            </dialog>
        </div>
    )
}

export default ArticleCard;