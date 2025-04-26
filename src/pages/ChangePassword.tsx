import React, { useState } from 'react';
import ChangePasswordSection from 'common/components/organisms/ChangePasswordSection';

const ChangePasswordPage = () => {
  // Initialize state for the old and new password fields
  const [formData, setFormData] = useState({ oldPassword: '', newPassword: '' });

  // Handle input changes for both passwords
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle the form submission, ideally call an API to change the password
  const handleSubmit = () => {
    console.log('Resetting password with data:', formData);
    // Add your API or password change logic here
  };

  return (
    <ChangePasswordSection
      title="Reset Password"
      data={formData}
      onChange={handleChange}
      onSubmit={handleSubmit} // Pass handleSubmit which doesn't expect any arguments
    />
  );
};

export default ChangePasswordPage;
