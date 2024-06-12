import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getPageTitle from '../../utils/getPageTitle';

export default function Header() {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);
    const navigate = useNavigate();

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


  return (
    <div>
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 px-4 mb-4 bg-[#D5EDF3] rounded-[30px]">
                <div className="flex">
                    <button onClick={() => navigate(-1)} className="flex items-center">
                        <img src="/Dashboard/back.svg" alt="Back" />
                    </button>
                    <h1 className="text-md font-semibold ml-3 text-primary-darker">{pageTitle}</h1>
                </div>
                <div className="flex items-center">
                    <Link to="/dashboard/profile" className="w-8 h-8 mr-3 rounded-full bg-gray-300 overflow-hidden">
                        <img src="/Dashboard/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                    </Link>
                    <button className="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1" onClick={toggleNotification}>
                        <img src="/Dashboard/notification.svg" alt="Notification" className="w-6 h-6" />
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
                                                <img src="/Dashboard/Ellipse.svg" alt="" className="w-4 mr-3"/>
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
    </div>
  )
}
