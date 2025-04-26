import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardTable from 'common/components/molecules/DashboardTable';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import ChangePasswordPage from 'pages/ChangePassword';
import ForgotPasswordPage from 'pages/ForgotPassword';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/password/reset/:token" element={<ChangePasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardTable /> : <Navigate to="/login" />}
        />

        {/* 404 or Catch-all Route */}
        <Route path="*"  element={<LoginPage />}  />
      </Routes>
    </div>
  );
};

export default App;