import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Fungsi untuk mengambil semua notifikasi
const getNotifications = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/notifications`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Fungsi untuk menghapus notifikasi berdasarkan ID
const deleteNotification = async (notificationId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/v1/doctors/notifications/${notificationId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, message: response.data.message };
    } catch (error) {
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Fungsi untuk memperbarui notifikasi berdasarkan ID
const updateNotification = async (notificationId, data, token) => {
    try {
        const response = await axios.put(`${API_URL}/v1/doctors/notifications/${notificationId}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

export { 
    getNotifications, 
    deleteNotification, 
    updateNotification 
};