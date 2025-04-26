import React, { useState } from 'react';
import ForgotPasswordSection from 'common/components/organisms/ForgotPasswordSection';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForgotPassword = (data: { email: string }) => {
    console.log('Requesting password reset for:', data.email);
    // Call your API or logic for handling forgot password (send reset link)
  };

  return (
    <ForgotPasswordSection
      title="Forgot Password"
      data={formData}
      onChange={handleChange}
      onSubmit={handleForgotPassword}
    />
  );
};

export default ForgotPasswordPage;
