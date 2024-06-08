import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
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
      <SideBar />
      <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
  );
}
