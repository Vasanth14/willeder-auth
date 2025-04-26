import React, { useState } from 'react';
import ForgotPasswordSection from 'common/components/organisms/ForgotPasswordSection';
import { forgotPassword } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear errors when user starts typing
    if (error) setError(null);
  };

  const handleForgotPassword = async (data: { email: string }) => {
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      console.log('Initiating password reset for:', data.email);
      const response = await forgotPassword(data.email);
      
      console.log('API Response:', {
        status: response.status,
        data: response.data,
        headers: response.headers
      });

      // Handle successful response (200/204)
      if ([200, 204].includes(response.status)) {
        setSuccess(true);
      } else {
        throw new Error(response.data?.message || 'Unexpected response from server');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      
      let errorMessage = 'Failed to send reset instructions';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || 
                      error.message || 
                      'Server error occurred';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
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