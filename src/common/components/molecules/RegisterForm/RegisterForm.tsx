import React from 'react';
import Input from 'common/components/atoms/Input';
import Button from 'common/components/atoms/Button';
import './RegisterForm.scss';
import { useForm } from '@mantine/form';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormValues) => void;
  isLoading?: boolean;
}

interface RegisterFormValues {
  name: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

const RegisterForm = ({ onSubmit, isLoading = false }: RegisterFormProps) => {
  const form = useForm<RegisterFormValues>({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      password: '',
    },
  });

  return (
    <form
      className="register-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values);
      })}
    >
      <Input
        placeholder="Enter your name"
        label="Name"
        type="text"
        disabled={isLoading}
        {...form.getInputProps('name')}
      />
      <Input
        placeholder="Enter your phone number"
        label="Phone"
        type="text"
        disabled={isLoading}
        {...form.getInputProps('phone')}
      />
      <Input
        placeholder="Enter your address"
        label="Address"
        type="text"
        disabled={isLoading}
        {...form.getInputProps('address')}
      />
      <Input
        placeholder="Enter your e-mail address"
        label="Email"
        type="email"
        disabled={isLoading}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        type="password"
        disabled={isLoading}
        {...form.getInputProps('password')}
      />

      <div className="button-wrapper">
        <Button fullWidth type="submit" loading={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
