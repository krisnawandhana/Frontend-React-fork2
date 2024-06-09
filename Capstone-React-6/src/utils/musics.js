import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Add new music
const addMusic = async (musicData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/musics`, musicData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get list of musics
const getMusics = async (page = 1, limit = 10, sort = 'likes', order = 'asc', search = 'relax') => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics`, {
      params: { page, limit, sort, order, search }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get music by ID
const getMusicById = async (musicId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics/${musicId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Update music by ID
const updateMusicById = async (musicId, musicData) => {
  try {
    const response = await axios.put(`${API_URL}/v1/doctors/musics/${musicId}`, musicData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete music by ID
const deleteMusicById = async (musicId) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/musics/${musicId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of all musics
const getMusicCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of liked musics
const getLikedMusicCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics/like/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of viewed musics
const getViewedMusicCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics/view/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export { 
  addMusic, 
  getMusics, 
  getMusicById, 
  updateMusicById, 
  deleteMusicById, 
  getMusicCount, 
  getLikedMusicCount, 
  getViewedMusicCount 
};
