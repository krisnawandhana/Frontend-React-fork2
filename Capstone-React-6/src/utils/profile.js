import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Fungsi untuk mendapatkan profil detail dokter
export const getDoctorProfile = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/v1/doctors/profiles`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { success: true, data: response.data.data };
    } catch (error) {
        console.error('Error fetching doctor profile:', error);
        return { success: false, message: error.response ? error.response.data.message : error.message };
    }
};

// Fungsi untuk memperbarui profil dokter
export const updateDoctorProfile = async (formData, token) => {
    try {
      const response = await axios.put('https://dev-capstone.practiceproject.tech/v1/doctors/profiles', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error updating profile:', error.response);
      return { success: false, data: null };
    }
  };