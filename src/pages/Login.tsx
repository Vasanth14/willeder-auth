import React, { useState, useEffect } from 'react';
import LoginSection from 'common/components/organisms/LoginSection';
import { loginUser } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const response = await loginUser(data.email, data.password);
      console.log('Login successful:', response);

      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // Show error to user (optional)
    }
  };

  return (
    <LoginSection
      title="Login"
      data={formData}
      onChange={handleChange}
      onLogin={handleLogin}
    />
  );
};

export default LoginPage;
