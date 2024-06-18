import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Add new music
const addMusic = async (musicData, token) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/musics`, musicData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get list of musics
const getMusics = async (page = 1, limit = 10, sort = 'id', order = 'asc', search = '', token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics`, {
      params: { page, limit, sort, order, search },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.status) {
      return { success: true, data: response.data.data };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get music by ID
const getMusicById = async (musicId, token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/musics/${musicId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.status) {
      return { success: true, data: response.data.data };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Update music by ID
const updateMusicById = async (musicId, musicData, token) => {
  try {
    const formData = new FormData();
    formData.append('title', musicData.title);
    formData.append('singer', musicData.singer);
    if (musicData.image_file) {
      formData.append('image', musicData.image_file);
    }

    const response = await axios.put(`${API_URL}/v1/doctors/musics/${musicId}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete music by ID
const deleteMusicById = async (musicId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/musics/${musicId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.status) {
      return { success: true, data: response.data.data };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of all musics
const getMusicCount = async (token) => {
  try {
      const response = await axios.get(`${API_URL}/v1/doctors/musics/count`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      if (response.data.status) {
          return { success: true, data: { count: response.data.data.count } };
      } else {
          return { success: false, message: response.data.message };
      }
  } catch (error) {
      return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of liked musics
const getLikedMusicCount = async (token) => {
  try {
      const response = await axios.get(`${API_URL}/v1/doctors/musics/like/count`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });


      if (response.data.status) {
        return { success: true, data: { count: response.data.data.count } };
      } else {
          return { success: false, message: response.data.message };
      }
  } catch (error) {
      return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of viewed musics
const getViewedMusicCount = async (token) => {
  try {
      const response = await axios.get(`${API_URL}/v1/doctors/musics/view/count`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

    if (response.data.status) {
      return { success: true, data: { count: response.data.data.count } };
    } else {
        return { success: false, message: response.data.message };
    }
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
