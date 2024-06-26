import React, { useState } from 'react';

const AddForum = ({ onClose, onAddForum }) => {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [filePreview, setFilePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(file); // Simpan file yang dipilih
                setFilePreview(reader.result); // Tampilkan preview gambar
            };
            reader.readAsDataURL(file); // Membaca file sebagai URL data
        }
    };

    const handleAddForum = () => {
        onAddForum({ image, name, description });

        // Clear inputs after adding forum
        setImage('');
        setName('');
        setDescription('');
        setFilePreview(null);

        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-end items-center mb-1 px-3">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">
                        x
                    </button>
                </div>
                <div className="mb-4 px-4">
                    <div className="relative border-dashed border-2 border-dark-3 rounded-lg h-40 flex justify-center items-center">
                        {filePreview ? (
                            <img src={filePreview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                        ) : (
                            <div className="flex justify-center items-center">
                                <label htmlFor="fileUpload" className="cursor-pointer">
                                    <img src="/Forum/addphoto.svg" alt="Camera" className="h-10 w-10" />
                                    <input
                                        id="fileUpload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mb-4 px-4">
                    <label htmlFor="nameInput" className="block text-sm font-semibold text-dark-1 mb-1">Nama Forum:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan Nama Forum"
                        className="py-2 px-3 text-sm border border-dark-3 rounded-lg w-full"
                    />
                </div>
                <div className="mb-6 px-4">
                    <label htmlFor="descriptionInput" className="block text-sm font-semibold text-dark-1 mb-1">Deskripsi Forum:</label>
                    <textarea
                        id="descriptionInput"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Deskripsi Forum"
                        className="py-2 px-3 text-sm border border-dark-3 rounded-lg w-full resize-none"
                    />
                </div>
                <div className="flex justify-center px-4 mb-6">
                    <button onClick={handleAddForum} className="w-full py-2 bg-primary text-sm text-white rounded-lg hover:bg-primary-darker">
                        Buat Forum
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddForum;
