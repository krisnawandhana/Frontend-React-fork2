import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Post article
const addArticle = async (articleData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/articles`, articleData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get all articles
const getArticles = async (page = 1, limit = 10, sort = 'likes', order = 'asc') => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles`, {
      params: { page, limit, sort, order }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get article by ID
const getArticleById = async (articleId) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/${articleId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Update article by ID
const updateArticleById = async (articleId, articleData) => {
  try {
    const response = await axios.put(`${API_URL}/v1/doctors/articles/${articleId}`, articleData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete article by ID
const deleteArticleById = async (articleId) => {
  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/articles/${articleId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of articles by doctor ID
const getArticleCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of article likes by doctor ID
const getLikedArticleCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/like/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of article views by doctor ID
const getViewedArticleCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/view/count`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export { 
  addArticle, 
  getArticles, 
  getArticleById, 
  updateArticleById, 
  deleteArticleById, 
  getArticleCount, 
  getLikedArticleCount, 
  getViewedArticleCount 
};
