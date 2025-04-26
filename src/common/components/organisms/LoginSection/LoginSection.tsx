import React from 'react';
import LoginForm from 'common/components/molecules/LoginForm';
import { Title } from '@mantine/core';
import './LoginSection.scss';

interface LoginSectionProps {
  title: string;
  data: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (data: { email: string; password: string }) => void;
}

const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
    </section>
  );
};

export default LoginSection;
