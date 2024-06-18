import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Add new story
const addStory = async (storyData, token) => {
  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.post(`${API_URL}/v1/doctors/stories`, storyData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.response ? error.response.data.message : error.message}`);
      if (attempt === maxRetries) {
        return { success: false, message: error.response ? error.response.data.message : error.message };
      }
    }
  }
};

// Get list of stories
const getStories = async (page = 1, limit = 10, sort = '', order = 'asc', search = '', token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories`, {
      params: { page, limit, sort, order, search },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get story by ID
const getStoryById = async (storyId, token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/${storyId}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Update story by ID
const updateStoryById = async (storyId, storyData, token) => {
  try {
    const response = await axios.put(`${API_URL}/v1/doctors/stories/${storyId}`, storyData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};



// Delete story by ID
const deleteStoryById = async (storyId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/stories/${storyId}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of all stories
const getStoryCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/count`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of liked stories
const getLikedStoryCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/like/count`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, data: response.data.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of viewed stories
const getViewedStoryCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/view/count`, {
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
  addStory, 
  getStories, 
  getStoryById, 
  updateStoryById, 
  deleteStoryById, 
  getStoryCount, 
  getLikedStoryCount, 
  getViewedStoryCount 
};
