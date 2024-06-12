import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Homepage from './pages/Home/Homepage';
import LandingPage from './pages/LandingPage/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import EditProfile from './pages/Dashboard/EditProfile';
import ManageContent from './pages/ManageContent/ManageContent';
import ManagePatient from './pages/ManagePatient/ManagePatient';
import Detail from "./pages/ManagePatient/Detail"
import Transaction from './pages/Transaction/Transaction';
import TransactionList from './pages/Transaction/TransactionList';
import ManageForum from './pages/ManageForum/ManageForum';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	useEffect(() => {
		// Check if the user is logged in by checking the token
		setIsLoggedIn(isAuthenticated())
	}, [])

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/homepage" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="managecontent/*" element={<ManageContent />} />
        <Route path="managepatient" element={<ManagePatient />} />
          <Route path="managepatient/detail" element={<Detail />} />
        <Route path="transaction" element={<Transaction />} />
          <Route path="transaction/list" element={<TransactionList />} />
        <Route path="manageforum" element={<ManageForum />} />
      </Route>
    </Routes>
  );
}

export default App
