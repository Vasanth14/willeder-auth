// src/pages/ResetPasswordPage/ResetPasswordPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChangePasswordSection from 'common/components/organisms/ChangePasswordSection';
import { resetPassword } from 'services/api/auth';
import useRedirectIfLoggedIn from 'common/hooks/useRedirectIfLoggedIn';

const ResetPasswordPage = () => {

  useRedirectIfLoggedIn('/dashboard');

  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!formData.password || !formData.confirmPassword) {
      setError('Please fill in both fields');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!token) {
      setError('Invalid reset link');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await resetPassword(token, formData.password);
      navigate('/login?reset=success');
    } catch (error) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <ChangePasswordSection
        title="Reset Password"
        data={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error || undefined}
        isLoading={isLoading}
      />
  );
};

export default ResetPasswordPage;