import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to get forum by forum id
export const getForumById = async (forumId, token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/forums/${forumId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Error fetching forum:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to update forum by forum id
export const updateForumById = async (forumId, forumData, imageFile, token) => {
    try {
        const formData = new FormData();
        formData.append('name', forumData.title);
        formData.append('description', forumData.description);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const response = await axios.put(`${API_URL}/v1/doctors/forums/${forumId}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error updating forum:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to delete forum by forum id
export const deleteForumById = async (forumId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/v1/doctors/forums/${forumId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error deleting forum:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to get all forum members by forum id with pagination
export const getForumMembers = async (forumId, page = 1, limit = 10, token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/forums/${forumId}/members`, {
            params: { page, limit },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error fetching forum members:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to get all posts by forum id with pagination
export const getForumPosts = async (forumId, page = 1, limit = 10, token) => {
    try {
        console.log('Mengirim request ke API dengan parameter:', forumId, page, limit, token);
        const response = await axios.get(`${API_URL}/v1/doctors/forums/${forumId}/posts`, {
            params: { page, limit },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('API response:', response.data); // Log API response
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Error fetching forum posts:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Function to get all comments by post id with pagination
export const getPostComments = async (postId, page = 1, limit = 10, token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/posts/${postId}/comments`, {
            params: { page, limit },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error fetching post comments:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

export default {
    getForumById,
    updateForumById,
    deleteForumById,
    getForumMembers,
    getForumPosts,
    getPostComments
};
