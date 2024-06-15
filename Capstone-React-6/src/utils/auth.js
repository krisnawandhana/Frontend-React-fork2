// auth.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/v1/doctors/login`, { username, password });
    console.log('API response:', response.data); // Log the response to check its structure

    const { token } = response.data.data;

    if (!token) {
      throw new Error('Token not found in response');
    }

    // Save the token to local storage
    localStorage.setItem('token', token);

    return { success: true, token };
  } catch (error) {
    console.error('Login error:', error); // Log the error to understand what went wrong
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
