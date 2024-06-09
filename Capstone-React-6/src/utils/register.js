import axios from 'axios';

// Load environment variables
const API_URL = import.meta.env.VITE_API_URL;

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/register`, userData);

    if (response.data.status) {
      return {
        success: true,
        message: response.data.message,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response ? error.response.data.message : error.message,
    };
  }
};

export default register;
