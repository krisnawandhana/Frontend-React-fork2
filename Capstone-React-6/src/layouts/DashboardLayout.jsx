import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container flex-1 md:ml-64 py-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;