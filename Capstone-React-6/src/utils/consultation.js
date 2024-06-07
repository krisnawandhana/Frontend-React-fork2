import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get all consultations by doctor ID
const getConsultationsByDoctorId = async (doctorId, { is_accepted = false, page = 1, limit = 10, sort = 'start_date', order = 'asc' }) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/${doctorId}/consultations`, {
      params: { is_accepted, page, limit, sort, order }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of consultations by doctor ID
const getConsultationCountByDoctorId = async (doctorId, { is_accepted = false, status = 'scheduled', page = 1, limit = 10 }) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/${doctorId}/consultations/count`, {
      params: { is_accepted, status, page, limit }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export { getConsultationsByDoctorId, getConsultationCountByDoctorId };
