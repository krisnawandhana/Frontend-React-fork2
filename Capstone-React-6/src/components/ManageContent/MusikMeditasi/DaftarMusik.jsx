import React, { useState, useEffect } from 'react';
import { getMusics, getMusicById, deleteMusicById, updateMusicById } from '../../../utils/musics.js';
import Swal from 'sweetalert2';

const DaftarMusik = ({ refreshData, setRefreshData }) => {
    const [musicData, setMusicData] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [audioPreview, setAudioPreview] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [newImageFile, setNewImageFile] = useState(null);

    useEffect(() => {
        const fetchMusicData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token tidak ditemukan');
                return;
            }

            const result = await getMusics(1, 3, 'id', 'desc', '', token);
            if (result.success) {
                setMusicData(result.data);
            } else {
                console.error('Gagal mengambil data musik:', result.message);
            }
        };

        fetchMusicData();
    }, [refreshData]);

    const showModal = async (music) => {
        setSelectedMusic(music);
        const token = localStorage.getItem('token');
        const result = await getMusicById(music.id, token);
        if (result.success) {
            setAudioPreview(result.data.music_url);
            setShowConfirmModal(true);
        } else {
            console.error('Gagal mengambil data musik:', result.message);
        }
    };

    const handleCloseModal = () => {
        setShowConfirmModal(false);
        setAudioPreview(null);
        setIsEditMode(false);
        setNewImageFile(null);
    };

    const handleDeleteMusic = async () => {
        const token = localStorage.getItem('token');
        Swal.fire({
            title: 'Yakin ingin menghapus musik ini?',
            text: "Musik yang dihapus tidak dapat dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteMusicById(selectedMusic.id, token);
                if (result.success) {
                    setMusicData(musicData.filter((music) => music.id !== selectedMusic.id));
                    handleCloseModal();
                    setRefreshData(prev => !prev);
                    Swal.fire(
                        'Terhapus!',
                        'Musik telah dihapus.',
                        'success'
                    );
                } else {
                    console.error('Gagal menghapus musik:', result.message);
                    Swal.fire(
                        'Gagal!',
                        'Musik gagal dihapus.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEditMusic = () => {
        setIsEditMode(true);
    };

    const handleUpdateMusic = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const updatedMusic = {
            title: event.target.title.value,
            singer: event.target.singer.value,
        };

        if (newImageFile) {
            updatedMusic.image_file = newImageFile;
        }

        console.log('Data yang dikirim:', updatedMusic); // Menampilkan data yang dikirim ke server

        const result = await updateMusicById(selectedMusic.id, updatedMusic, token);
        console.log('Respons dari server:', result); // Menampilkan respons dari server

        if (result.success) {
            setMusicData(musicData.map((music) => (music.id === selectedMusic.id ? result.data.data : music)));
            handleCloseModal();
            setRefreshData(prev => !prev);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Musik berhasil diupdate.',
                timer: 3000,
                showConfirmButton: false, 
            });
        } else {
            console.error('Gagal mengupdate musik:', result.message);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Musik gagal diupdate.',
                timer: 3000,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className="text-dark-2">
            <div className="flex justify-between items-center text-center mb-4">
                <h3 className="text-lg font-semibold">Daftar Musik Meditasi</h3>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img src="/Content/Search.svg" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Temukan Musik"
                            className="py-3 px-4 pl-10 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:ring focus:border-primary"
                        />
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-3 gap-5">
                {musicData.map((music) => (
                    <div key={music.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md" onClick={() => showModal(music)}>
                        <img src={music.image_url} alt={music.title} className="w-[90%] mt-3 mx-3 h-40" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{music.title}</h4>
                            <p className="text-sm text-gray-500 mb-1">{music.singer}</p>
                            <p className="text-sm text-gray-500">{music.view_count} Pendengar</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Modal */}
            {showConfirmModal && (
                <dialog open className="modal bg-black bg-opacity-50 z-50">
                    <div className="bg-[#49B08E] pt-4 rounded-3xl w-full max-w-2xl h-3/7">
                        <div className="flex justify-between items-center px-5 pb-4">
                            <h3 className="font-semibold text-lg text-white">Detail Musik</h3>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost text-white" onClick={handleCloseModal}>✕</button>
                            </form>
                        </div>
                        {selectedMusic && (
                            <div className=" flex bg-white rounded-b-3xl p-4">
                                <div className="flex justify-center items-center">
                                    <img src={selectedMusic.image_url} alt={selectedMusic.title} className="w-60 h-60 rounded-lg" />
                                </div>
                                <div className="px-4 py-1 w-2/3">
                                    {isEditMode ? (
                                        <form onSubmit={handleUpdateMusic}>
                                            <div className="form-control mb-1">
                                                <label className="label">
                                                    <span className="text-sm font-semibold">Gambar</span>
                                                </label>
                                                <input type="file" name="image_file" accept="image/*" onChange={(e) => setNewImageFile(e.target.files[0])} className="file-input file-input-sm w-full" />
                                            </div>
                                            <div className="form-control mb-1">
                                                <label className="label">
                                                    <span className="text-sm font-semibold">Judul</span>
                                                </label>
                                                <input type="text" name="title" defaultValue={selectedMusic.title} className="border border-gray-400 rounded-lg py-1 px-4 w-full text-sm" required />
                                            </div>
                                            <div className="form-control mb-1">
                                                <label className="label">
                                                    <span className="text-sm font-semibold">Penyanyi</span>
                                                </label>
                                                <input type="text" name="singer" defaultValue={selectedMusic.singer} className="border border-gray-400 rounded-lg py-1 px-4 w-full text-sm" required />
                                            </div>
                                            <div className="mt-4 flex justify-end gap-2">
                                                <button type="submit" className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]">Simpan</button>
                                                <button type="button" className="btn btn-sm" onClick={() => setIsEditMode(false)}>Batal</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="w-full">
                                            {audioPreview && (
                                                <audio controls className="w-full mt-4">
                                                    <source src={audioPreview} type="audio/mpeg" />
                                                    Browser Anda tidak mendukung elemen audio.
                                                </audio>
                                            )}
                                            <p className="mt-5 mb-2 px-3 py-2 rounded-lg text-sm border border-dark-4">{selectedMusic.title}</p>
                                            <p className="mb-2 px-3 py-2 rounded-lg text-sm border border-dark-4">{selectedMusic.singer}</p>
                                            <div className="modal-action mt-4">
                                                <button className="btn btn-sm btn-primary bg-[#66BFA1] text-white hover:bg-[#49B08E]" onClick={handleEditMusic}>Edit</button>
                                                <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white" onClick={handleDeleteMusic}>Delete</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default DaftarMusik;
