import React from 'react';
import { Title, Anchor, Text } from '@mantine/core'
import ChangePasswordForm from 'common/components/molecules/ChangePasswordForm';
import './ChangePasswordSection.scss';

interface ChangePasswordSectionProps {
  title: string;
  data: {
    password: string;
    confirmPassword: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  error?: string;
  isLoading?: boolean;
}

const ChangePasswordSection = ({
  title,
  data,
  onChange,
  onSubmit,
  error,
  isLoading,
}: ChangePasswordSectionProps) => {
  return (
    <section className="change-password-section">
      <Title order={3} ta={'center'}>
        Reset Password
      </Title>
      <ChangePasswordForm
        data={data}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        isLoading={isLoading}
      />
    </section>
  );
};

export default ChangePasswordSection;