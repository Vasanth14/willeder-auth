import React from 'react';
import RegisterForm from 'common/components/molecules/RegisterForm';
import { Title } from '@mantine/core';
import './RegisterSection.scss';

interface RegisterSectionProps {
  title: string;
  data: { name: string; phone: string; address: string; email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: (data: { name: string; phone: string; address: string; email: string; password: string }) => void;
}

const RegisterSection = ({
  title,
  data,
  onChange,
  onRegister,
}: RegisterSectionProps) => {
  return (
    <section className="register-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <RegisterForm data={data} onChange={onChange} onSubmit={onRegister} />
    </section>
  );
};

export default RegisterSection;
