import React, { useState, useEffect } from 'react';
import { getArticles, getArticleById, deleteArticleById, updateArticleById } from '../../../utils/articles'; // Sesuaikan path sesuai struktur proyek Anda

const DaftarArtikel = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // State untuk mode edit
    const [editData, setEditData] = useState({ title: '', content: '' });

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
                const { success, data } = await getArticles(token, 1, 3);
                if (success) {
                    setArticles(data.data);
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
    }, []);

    const handleShowModal = async (articleId) => {
        try {
            const token = localStorage.getItem('token');
            const { success, data } = await getArticleById(articleId, token);
            if (success) {
                setSelectedArticle(data); // Pastikan data yang diatur di sini adalah data artikel yang sesuai dari respons API
                setShowModal(true); // Tampilkan modal setelah data berhasil diambil
                setEditData({ title: data.data.title, content: data.data.content });
            } else {
                console.error('Failed to fetch article details:', data.message);
            }
        } catch (error) {
            console.error('Error fetching article details:', error.message);
        }
    };

    const handleCloseModal = () => {
        setSelectedArticle(null); // Reset selected article
        setShowModal(false); // Close modal
        setIsEditing(false); // Reset mode edit
    };

    const handleDeleteArticle = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!selectedArticle || !selectedArticle.data.id) {
                console.error('Article ID not found');
                return;
            }
            const { success, message } = await deleteArticleById(selectedArticle.data.id, token);
            if (success) {
                setArticles(articles.filter(article => article.id !== selectedArticle.data.id));
                handleCloseModal(); // Tutup modal setelah penghapusan berhasil
            } else {
                console.error('Failed to delete article:', message);
            }
        } catch (error) {
            console.error('Error deleting article:', error.message);
        }
    };

    const handleEditArticle = () => {
        setIsEditing(true); // Aktifkan mode edit
    };

    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem('token');
            const { success, data, message } = await updateArticleById(selectedArticle.data.id, editData, token);
            if (success) {
                setArticles(articles.map(article => (article.id === selectedArticle.data.id ? data.data : article)));
                setSelectedArticle({ data: { ...selectedArticle.data, ...editData } });
                setIsEditing(false); // Nonaktifkan mode edit setelah berhasil menyimpan perubahan
            } else {
                console.error('Failed to update article:', message);
            }
        } catch (error) {
            console.error('Error updating article:', error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    return (
        <div className="text-dark-2">
            <div className="flex justify-between items-center text-center mb-4">
                <h3 className="text-lg font-semibold">Daftar Artikel Meditasi</h3>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img src="/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Temukan Artikel"
                            className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedArticle && (
                <dialog id="my_modal" className="modal" open>
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                        </form>
                        <img src={selectedArticle.data.image_url} alt={selectedArticle.data.title} className="w-full h-auto mb-4 rounded" />
                        <div className="p-4">
                            {isEditing ? (
                                <>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={editData.title} 
                                        onChange={handleInputChange} 
                                        className="w-full mb-2 p-2 border rounded"
                                    />
                                    <textarea 
                                        name="content" 
                                        value={editData.content} 
                                        onChange={handleInputChange} 
                                        className="w-full mb-2 p-2 border rounded"
                                    />
                                </>
                            ) : (
                                <>
                                    <h3 className="font-bold text-lg">{selectedArticle.data.title}</h3>
                                    <p className="py-2">{selectedArticle.data.content}</p>
                                    <p className="py-2 text-sm text-gray-500">Uploaded: {new Date(selectedArticle.data.date).toLocaleDateString()}</p>
                                </>
                            )}
                            <div className="modal-action items-center justify-center">
                                {isEditing ? (
                                    <button className="btn btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleSaveChanges}>Save</button>
                                ) : (
                                    <>
                                        <button className="btn btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleEditArticle}>Edit</button>
                                        <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={handleDeleteArticle}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </dialog>
            )}

            {/* List of articles */}
            <div className="grid grid-cols-3 gap-5">
                {articles.map((article) => (
                    <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md" onClick={() => handleShowModal(article.id)}>
                        <img src={article.image_url} alt={article.title} className="w-[90%] mt-3 mx-3 h-40" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2 truncate">{article.title}</h4>
                            <br />
                            <p className="text-sm text-gray-500">{article.reading_time} Pembaca</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaftarArtikel;
