import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getFeedbacks = async (page = 1, limit = 10, token) => {
    try {
      const response = await axios.get(`${API_URL}/v1/doctors/feedbacks`, {
        params: {
          page,
          limit
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.response ? error.response.data.message : error.message };
    }
  };
  
  // Fungsi untuk mengambil ratings
  const getRatings = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/v1/doctors/ratings`, {
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
    getFeedbacks, 
    getRatings 
}