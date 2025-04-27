import React, { useState } from 'react';
import LoginSection from 'common/components/organisms/LoginSection';
import { loginUser } from 'services/api/auth';
import useRedirectIfLoggedIn from 'common/hooks/useRedirectIfLoggedIn';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false); // 

  useRedirectIfLoggedIn('/dashboard');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true); // 
    try {
      const response = await loginUser(data.email, data.password);
      console.log('Login successful:', response);

      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginSection
      title="Login"
      data={formData}
      onChange={handleChange}
      onLogin={handleLogin}
      isLoading={isLoading} 
    />
  );
};

export default LoginPage;
