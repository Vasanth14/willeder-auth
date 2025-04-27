import React from 'react';
import ForgotPasswordForm from 'common/components/molecules/ForgotPasswordForm';
import { Title } from '@mantine/core';
import './ForgotPasswordSection.scss';

interface ForgotPasswordSectionProps {
  title: string;
  data: { email: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (data: { email: string }) => void;
  children?: React.ReactNode; // Add children prop
}

const ForgotPasswordSection = ({
  title,
  data,
  onChange,
  onSubmit,
  children, // Destructure children
}: ForgotPasswordSectionProps) => {
  return (
    <section className="forgot-password-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <ForgotPasswordForm data={data} onChange={onChange} onSubmit={onSubmit} />
      {children}
    </section>
  );
};

export default ForgotPasswordSection;
