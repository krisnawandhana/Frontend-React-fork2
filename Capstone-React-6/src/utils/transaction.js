import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get all transactions by doctor ID
const getTransactionsByDoctorId = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/${doctorId}/transactions`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete transaction by transaction ID
const deleteTransactionById = async (transactionId) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/transactions/${transactionId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of transactions by doctor ID
const getTransactionCountByDoctorId = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/${doctorId}/transactions/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export { getTransactionsByDoctorId, deleteTransactionById, getTransactionCountByDoctorId };
