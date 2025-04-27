import React, { useState } from 'react';
import ForgotPasswordSection from 'common/components/organisms/ForgotPasswordSection';
import { forgotPassword } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import useRedirectIfLoggedIn from 'common/hooks/useRedirectIfLoggedIn';
import { Text } from '@mantine/core';

const ForgotPasswordPage = () => {
  useRedirectIfLoggedIn('/dashboard');
  const [formData, setFormData] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State to store success message
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (error) setError(null); // Clear error on change
    if (successMessage) setSuccessMessage(null); // Clear success message on change
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
    setSuccessMessage(null); // Clear success message

    try {
      console.log('Initiating password reset for:', data.email);
      const response = await forgotPassword(data.email);

      console.log('API Response:', {
        status: response.status,
        data: response.data,
        headers: response.headers,
      });

      if ([200, 204].includes(response.status)) {
        setSuccess(true);
        setSuccessMessage('Email has been sent. Please check your inbox.'); // Set success message
      } else {
        throw new Error(response.data?.message || 'Unexpected response from server');
      }
    } catch (error) {
      console.error('Password reset error:', error);

      let errorMessage = 'Failed to send reset instructions';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || error.message || 'Server error occurred';
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
    >
      {/* Success Message */}
      {success && (
        <Text color="green" size="xs" align="start">
          A reset link has been sent to your email. Please check your inbox.
        </Text>
      )}

      {/* Error Message */}
      {error && (
        <Text color="red" size="xs" align="start">
          {error}
        </Text>
      )}
    </ForgotPasswordSection>
  );
};

export default ForgotPasswordPage;
