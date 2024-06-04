import React from 'react';
import { logout } from '../../utils/auth';
import { Navigate } from 'react-router-dom';

export default function Homepage() {
  const handleLogout = () => {
    logout();
    // Redirect to login page after logout
    <Navigate to="/Login" />;
  };

  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
  );
}
