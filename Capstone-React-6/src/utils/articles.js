import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Post article
const addArticle = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/articles`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return { success: true, data: response.data };
  } catch (error) {
    let errorMessage = 'Gagal mengunggah artikel';
    if (error.response && error.response.status === 400) {
      errorMessage = 'Invalid image format. Pastikan format gambar sesuai.';
    } else if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    return { success: false, message: errorMessage };
  }
};


// Get all articles
const getArticles = async (token, page = 1, limit = 10, sort = 'id', order = 'asc') => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles`, {
      params: { page, limit, sort, order },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};


// Get article by ID
const getArticleById = async (articleId, token) => {
  try {
      const response = await axios.get(`${API_URL}/v1/doctors/articles/${articleId}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return { success: true, data: response.data };
  } catch (error) {
      return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};


// Update article by ID
const updateArticleById = async (articleId, articleData, token) => {
  try {
    const response = await axios.put(
      `${API_URL}/v1/doctors/articles/${articleId}`, 
      articleData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Delete article by ID
const deleteArticleById = async (articleId) => {
  const token = localStorage.getItem('token'); // Replace this with your token retrieval method

  if (!token) {
    return { success: false, message: 'No token found' };
  }

  try {
    const response = await axios.delete(`${API_URL}/v1/doctors/articles/${articleId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of articles by doctor ID
const getArticleCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/count`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: response.data.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of article likes by doctor ID
const getLikedArticleCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/like/count`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: response.data.data };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

// Get the number of article views by doctor ID
const getViewedArticleCount = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/v1/doctors/articles/view/count`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: response.data.data };
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
