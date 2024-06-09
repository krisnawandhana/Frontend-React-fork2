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
            {/* Top bar */}
            <div className="flex justify-between items-center py-2 px-4 mb-4 bg-[#D5EDF3] rounded-[30px]">
                <div className="flex">
                    <Link to="/dashboard">
                        <img src="../../../public/Dashboard/back.svg" alt="" />
                    </Link>
                    <h1 className="text-md font-semibold ml-3 text-primary-darker">Profile dan Rating Pskiater</h1>
                </div>
                <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1" onClick={toggleNotification}>
                        <img src="../../../public/Dashboard/notification.svg" alt="Notification" className="w-6 h-6" />
                    </button>

                    {/* Notification Modal */}
                    {isNotificationOpen && (
                        <div className="text-dark-2">
                            <div className="fixed inset-0 bg-black opacity-30 z-10" onClick={toggleNotification}></div>
                            <div className="absolute top-20 right-10 w-1/4 bg-white shadow-lg rounded-lg p-4 z-20">
                                <div className="flex justify-between items-center">
                                    <div className="mb-4">
                                        <h3 className="text-md font-semibold ml-2">Notifikasi</h3>
                                    </div>
                                    <div className="flex justify-between mb-7">
                                        <button className="text-primary text-sm py-2 px-3 shadow">Belum Dibaca</button>
                                        <button className="text-gray-600 text-sm py-2 px-3 mr-4 shadow">Semua</button>
                                    </div>
                                </div>
                                <div className="overflow-y-auto max-h-96">
                                    {notifications.map((notification) => (
                                        <div key={notification.id} className="mb-4">
                                            <div className="flex items-start mb-2">
                                                <img src="../../../public/Dashboard/Ellipse.svg" alt="" className="w-4 mr-3"/>
                                                <div className="mr-1">
                                                    <p className="text-sm">{notification.message}</p>
                                                    <a href="#" className="text-primary text-sm pt-3">{notification.time}</a>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

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