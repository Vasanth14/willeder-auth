import React, { useState } from 'react';
import RegisterSection from 'common/components/organisms/RegisterSection';

const RegisterPage = () => {
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

  const handleRegister = (data: {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }) => {
    console.log('Registering with data:', data);
    // Call your API or logic for handling registration
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
