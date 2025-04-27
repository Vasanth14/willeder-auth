import React, { useState } from 'react';
import RegisterSection from 'common/components/organisms/RegisterSection';
import { registerUser } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';
import useRedirectIfLoggedIn from 'common/hooks/useRedirectIfLoggedIn';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  useRedirectIfLoggedIn('/dashboard');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (data: {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }) => {
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
      
    }
  };

  return (
    <RegisterSection
      title="Register"
      data={formData}
      onChange={handleChange}
      onRegister={handleRegister}
    />
  );
};

export default RegisterPage;
