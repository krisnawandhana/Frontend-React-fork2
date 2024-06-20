import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getPageTitle from '../../utils/getPageTitle';
import { getNotifications, updateNotification, deleteNotification } from '../../utils/notification';

export default function Header() {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);
    const navigate = useNavigate();

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   
    const [showReadNotifications, setShowReadNotifications] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchNotifications = async () => {
            if (!token) return;
            const { success, data, message } = await getNotifications(token);
            if (success) {
                setNotifications(data || []);
            } else {
                setError(message);
            }
            setLoading(false);
        };

        fetchNotifications();
    }, [token]);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleRead = async (notificationId) => {
        const { success, data, message } = await updateNotification(notificationId, { is_read: true }, token);
        if (success) {
            setNotifications((prevNotifications) =>
                prevNotifications.map((notification) =>
                    notification.id === notificationId ? { ...notification, is_read: true } : notification
                )
            );
        } else {
            console.error('Error updating notification:', message);
            setError(message);
        }
    };

    const handleDelete = async (notificationId) => {
        const { success, message } = await deleteNotification(notificationId, token);
        if (success) {
            setNotifications((prevNotifications) =>
                prevNotifications.filter((notification) => notification.id !== notificationId)
            );
        } else {
            console.error('Error deleting notification:', message);
            setError(message);
        }
    };

    const unreadNotifications = notifications.filter(notification => !notification.is_read);
    const readNotifications = notifications.filter(notification => notification.is_read);

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
                            <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={toggleNotification}></div>
                            <div className="absolute top-20 right-10 w-1/4 bg-white shadow-lg rounded-lg p-4 z-50">
                                <div className="flex justify-between items-center">
                                    <div className="mb-4">
                                        <h3 className="text-md font-semibold ml-2">Notifikasi</h3>
                                    </div>
                                    <div className="flex justify-between mb-7">
                                        <button 
                                            className={`text-sm py-2 px-3 shadow ${!showReadNotifications ? 'text-primary' : 'text-gray-600'}`}
                                            onClick={() => setShowReadNotifications(false)}
                                        >
                                            Belum Dibaca
                                        </button>
                                        <button 
                                            className={`text-sm py-2 px-3 shadow ${showReadNotifications ? 'text-primary' : 'text-gray-600'}`}
                                            onClick={() => setShowReadNotifications(true)}
                                        >
                                            Sudah Dibaca
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-y-auto max-h-96">
                                    {loading && <p>Loading...</p>}
                                    {error && <p>{error}</p>}
                                    {(!loading && !error && showReadNotifications && readNotifications.length === 0) && (
                                        <p className="text-sm">Tidak ada notifikasi yang sudah dibaca</p>
                                    )}
                                    {(!loading && !error && !showReadNotifications && unreadNotifications.length === 0) && (
                                        <p className="text-sm">Tidak ada notifikasi yang belum dibaca</p>
                                    )}
                                    {(showReadNotifications ? readNotifications : unreadNotifications).map((notification) => (
                                        <div key={notification.id} className="mb-4">
                                            <div className="flex items-start mb-2">
                                                <img src="/Dashboard/Ellipse.svg" alt="" className="w-4 mr-3" />
                                                <div className="mr-1">
                                                    <p className="text-sm">{notification.content}</p>
                                                    <span className="text-primary text-sm pt-3">{new Date(notification.created_at).toLocaleString()}</span>
                                                </div>
                                                <div className="flex flex-row">
                                                    {!notification.is_read && (
                                                        <button className="btn" onClick={() => handleRead(notification.id)}>read</button>
                                                    )}
                                                    <button className="btn" onClick={() => handleDelete(notification.id)}>delete</button>
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
    );
}
