import React from 'react';
import ForgotPasswordForm from 'common/components/molecules/ForgotPasswordForm';
import { Title } from '@mantine/core';
import './ForgotPasswordSection.scss';

interface ForgotPasswordSectionProps {
  title: string;
  data: { email: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (data: { email: string }) => void;
}

const ForgotPasswordSection = ({
  title,
  data,
  onChange,
  onSubmit,
}: ForgotPasswordSectionProps) => {
  return (
    <section className="forgot-password-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <ForgotPasswordForm data={data} onChange={onChange} onSubmit={onSubmit} />
    </section>
  );
};

export default ForgotPasswordSection;
