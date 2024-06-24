import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to get all chat rooms by doctor id with status, page, limit, and search parameters
export const getChatRooms = async (status, page = '', limit = '', search = '', token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/chats`, {
            params: { status, page, limit, search },
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Error fetching chat rooms:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to send a chat message to a user
export const sendMessage = async (chatId, message, token) => {
    try {
        const response = await axios.post(`${API_URL}/v1/doctors/chats/${chatId}/messages`, 
            { message },
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error sending message:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to get all chat messages by chat_id with last_message_id, page, and limit parameters
export const getChatMessages = async (chatId, lastMessageId = 0, page = 1, limit = 10, token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/chats/${chatId}/messages`, {
            params: { last_message_id: lastMessageId, page, limit },
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Fungsi untuk mengirim catatan konsultasi
export const sendConsultationNote = async (token, consultationData) => {
    try {
        const response = await axios.post(`${API_URL}/v1/doctors/consultation-notes`, consultationData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200 || response.status === 201) {
            console.log('Catatan konsultasi berhasil dikirim:', response.data);
            return response.data; // Mengembalikan data balasan jika perlu
        } else {
            console.error('Gagal mengirim catatan konsultasi:', response.data);
            throw new Error('Gagal mengirim catatan konsultasi');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};