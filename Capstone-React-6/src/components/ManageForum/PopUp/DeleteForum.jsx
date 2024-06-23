import React from 'react';

const DeleteForum = ({ forum, onClose, onDeleteForum }) => {
    const handleDelete = () => {
        onDeleteForum(forum.forum_id); // Mengirimkan id forum yang akan dihapus
        onClose(); // Menutup popup setelah penghapusan
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full">
                <div className="my-8 px-6">
                    <h2 className="text-xl font-semibold text-dark-1 text-center mb-5">Hapus Forum</h2>
                    <p className="text-sm text-dark-2 mb-7 text-center">Apakah Anda yakin ingin menghapus forum "{forum.name}" ini?</p>
                    <div className="flex justify-center">
                        <button onClick={handleDelete} className="px-6 py-2 bg-primary text-sm text-white rounded-3xl hover:bg-primary-darker mr-3">
                            Hapus
                        </button>
                        <button onClick={onClose} className="px-6 py-2 bg-white text-sm text-primary border border-primary rounded-3xl hover:bg-primary hover:text-white ml-3">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteForum;
