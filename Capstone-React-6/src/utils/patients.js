import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkzMzA0MzEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.YheEq_mxQGQRQKUGsxnzQ7Z0LUc0gMPEvdagQ_rDVgo';
const baseURL = `${import.meta.env.VITE_API_URL}/v1/doctors/patients`;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

// Mendapatkan daftar pasien dengan paginasi, sort, dan order
export const getPatients = async (page = 1, limit = 10, sort = 'start_date', order = 'asc') => {
    try {
        const response = await axiosInstance.get('', {
            params: {
                page,
                limit,
                sort,
                order
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching patients:', error);
        throw error;
    }
};

// Mencari pasien berdasarkan nama
export const searchPatientsByName = async (name, page = 1, limit = 10) => {
    try {
        const response = await axiosInstance.get('/search', {
            params: {
                name,
                page,
                limit
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching patients by name:', error);
        throw error;
    }
};

// Mendapatkan detail pasien berdasarkan patient_id
export const getPatientById = async (patientId) => {
    try {
        const response = await axiosInstance.get(`/${patientId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching patient by ID:', error);
        throw error;
    }
};
