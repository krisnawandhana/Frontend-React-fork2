import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Login from './pages/Login/Login';
import Homepage from './pages/Home/Homepage';
import ManageContent from './pages/ManageContent/ManageContent';
import ManagePatient from './pages/ManagePatient/ManagePatient';
import Transaction from './pages/Transaction/Transaction';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking the token
    setIsLoggedIn(isAuthenticated());
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/homepage" /> : <Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/managecontent" element={<ManageContent />} />
      <Route path="/managepatient" element={<ManagePatient />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
