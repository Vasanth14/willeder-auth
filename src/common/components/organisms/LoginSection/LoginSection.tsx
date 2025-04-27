import React from 'react';
import LoginForm from 'common/components/molecules/LoginForm';
import { Title } from '@mantine/core';
import './LoginSection.scss';

interface UserLogin {
  email: string;
  password: string;
}

interface LoginSectionProps {
  title: string;
  data: UserLogin;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onLogin: (data: UserLogin) => void;
  isLoading?: boolean;
}

const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
  isLoading = false,
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta="center">
        {title}
      </Title>
      <LoginForm
        data={data}
        onChange={onChange}
        onSubmit={onLogin}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LoginSection;
