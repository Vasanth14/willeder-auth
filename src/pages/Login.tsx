import React, { useState } from 'react';
import LoginSection from 'common/components/organisms/LoginSection';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Logging in with data:', data);
    // Call your API or logic for handling login
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
