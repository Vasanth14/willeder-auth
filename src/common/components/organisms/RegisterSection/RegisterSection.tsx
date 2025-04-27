import React from 'react';
import RegisterForm from 'common/components/molecules/RegisterForm';
import { Title } from '@mantine/core';
import './RegisterSection.scss';

interface RegisterSectionProps {
  title: string;
  isLoading?: boolean;
  onRegister: (data: { name: string; phone: string; address: string; email: string; password: string }) => void;
}

const RegisterSection = ({
  title,
  isLoading = false,
  onRegister,
}: RegisterSectionProps) => {
  return (
    <section className="register-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <RegisterForm onSubmit={onRegister} isLoading={isLoading} />
    </section>
  );
};

export default RegisterSection;
