import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get all patients by doctor ID
const getPatientsByDoctorId = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/${doctorId}/patient`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get patient by ID
const getPatientById = async (patientId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/patient/${patientId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export { getPatientsByDoctorId, getPatientById };
