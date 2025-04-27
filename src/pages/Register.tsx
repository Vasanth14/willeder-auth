import React, { useState } from 'react';
import RegisterSection from 'common/components/organisms/RegisterSection';
import { registerUser } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';
import useRedirectIfLoggedIn from 'common/hooks/useRedirectIfLoggedIn';

const RegisterPage = () => {
  const navigate = useNavigate();
  useRedirectIfLoggedIn('/dashboard');

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (data: {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await registerUser(
        data.name,
        data.phone,
        data.address,
        data.email,
        data.password
      );
      console.log('Registration successful:', response);

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterSection
      title="Register"
      onRegister={handleRegister}
      isLoading={isLoading}
    />
  );
};

export default RegisterPage;
