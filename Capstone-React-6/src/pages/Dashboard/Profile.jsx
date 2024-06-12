import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../components/Profile/Rating'
import DetailProfile from '../../components/Profile/DetailProfile'

const Profile = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false); 

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const notifications = [
        { id: 1, message: 'Janji temu baru dengan pasien Pramita pada 27 Mei 2024 pukul 09.00', time: 'Baru Saja' },
        { id: 2, message: 'Janji temu baru dengan pasien Budi pada 27 Mei 2024 pukul 10.00', time: 'Baru Saja' },
        { id: 3, message: 'Janji temu baru dengan pasien Siti pada 27 Mei 2024 pukul 11.00', time: 'Baru Saja' },
        { id: 4, message: 'Janji temu baru dengan pasien Dedi pada 27 Mei 2024 pukul 12.00', time: 'Baru Saja' },
        { id: 5, message: 'Janji temu baru dengan pasien Lina pada 27 Mei 2024 pukul 13.00', time: 'Baru Saja' },
    ];

    const card = {
        ulasan: 32,
        pasienBaru: 7,
        pasienAktif: 14,
        totalPasien: 40
    };

    return (
        <div className="px-6 overflow-hidden">
            {/* Profile and Rating */}
            <div className="flex justify-between">
                <div className="pr-4">
                    {/* Card  */}
                    <div className="grid grid-cols-4 gap-6 mb-4">
                        <div className="bg-[#D9DDFF] text-dark-1 flex justify-center items-center py-4 pl-8 pr-12 rounded-2xl">
                            <div className="w-10 h-10 rounded bg-white opacity-50 flex justify-center items-center mr-4">
                                <img src="../../../public/Profile/Ulasan.svg" alt="Ulasan Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">{card.ulasan}</p>
                                <h2 className="text-sm text-dark-2">Ulasan</h2>
                            </div>
                        </div>
                        <div className="bg-[#F1D9FF] text-dark-1 flex justify-center items-center py-4 pl-8 pr-12 rounded-2xl">
                            <div className="w-10 h-10 rounded bg-white opacity-50 flex justify-center items-center mr-4">
                                <img src="../../../public/Profile/PasienBaru.svg" alt="Pasien Baru Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">{card.pasienBaru}</p>
                                <h2 className="text-sm text-dark-2">Pasien Baru</h2>
                            </div>
                        </div>
                        <div className="bg-[#FFD9E7] text-dark-1 flex justify-center items-center py-4 pl-8 pr-12 rounded-2xl">
                            <div className="w-10 h-10 rounded bg-white opacity-50 flex justify-center items-center mr-4">
                                <img src="../../../public/Profile/PasienAktif.svg" alt="Pasien Aktif Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">{card.pasienAktif}</p>
                                <h2 className="text-sm text-dark-2">Pasien Aktif</h2>
                            </div>
                        </div>
                        <div className="bg-[#96E9EE] text-dark-1 flex justify-center items-center py-4 pl-8 pr-12 rounded-2xl">
                            <div className="w-10 h-10 rounded bg-white opacity-50 flex justify-center items-center mr-4">
                                <img src="../../../public/Profile/TotalPasien.svg" alt="Total Pasien Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">{card.totalPasien}</p>
                                <h2 className="text-sm text-dark-2">Total Pasien</h2>
                            </div>
                        </div>
                    </div>

                    {/* Rating  */}
                    <div>
                        <Rating />
                    </div>
                </div>

                {/* Profile  */}
                <div className="w-[30%]">
                    <DetailProfile />
                </div>
            </div>
        </div>
    )
}

export default Profile;