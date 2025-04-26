import React from 'react';
import Input from 'common/components/atoms/Input';
import Button from 'common/components/atoms/Button';
import './RegisterForm.scss';
import { useForm } from '@mantine/form';

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      password: '',
    },

    validate: {
      // You can add field validations here later if you want
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
        {...form.getInputProps('name')}
      />
      <Input
        placeholder="Enter your phone number"
        label="Phone"
        type="text"
        {...form.getInputProps('phone')}
      />
      <Input
        placeholder="Enter your address"
        label="Address"
        type="text"
        {...form.getInputProps('address')}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        type="email"
        {...form.getInputProps('email')}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        type="password"
        {...form.getInputProps('password')}
      />

      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
