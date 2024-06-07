import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Add new story
const addStory = async (storyData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/stories`, storyData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get list of stories
const getStories = async (page = 1, limit = 10, sort = 'likes', order = 'asc', search = 'semangat') => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories`, {
      params: { page, limit, sort, order, search }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get story by ID
const getStoryById = async (storyId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/${storyId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Update story by ID
const updateStoryById = async (storyId, storyData) => {
  try {
    const response = await axios.put(`${API_URL}/v1/doctors/stories/${storyId}`, storyData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete story by ID
const deleteStoryById = async (storyId) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/stories/${storyId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of all stories
const getStoryCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of liked stories
const getLikedStoryCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/like/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get count of viewed stories
const getViewedStoryCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/stories/view/count`);
    return { success: true, data: response.data };
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
