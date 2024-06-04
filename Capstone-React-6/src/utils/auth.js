// auth.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/v1/users/login`, { username, password });
    const { token } = response.data;

    // Save the token to local storage
    localStorage.setItem('token', token);

    return { success: true, token };
  } catch (error) {
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

const logout = () => {
  // Remove the token from local storage
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  // Check if a token exists in local storage
  const token = localStorage.getItem('token');
  
  // Additional validation, if needed
  if (!token) {
    return false; // No token found
  }

  // You might want to check if the token is expired or invalid here
  // Example: Decode JWT token and check expiry

  return true; // Token exists and is valid
};

export { login, logout, isAuthenticated };
