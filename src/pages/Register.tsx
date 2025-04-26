import React, { useState } from 'react';
import RegisterSection from 'common/components/organisms/RegisterSection';
import { registerUser } from 'services/api/auth'; 
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
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
  
      // Optional: Redirect to login page after successful register
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Optional: Show an error message to the user
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
