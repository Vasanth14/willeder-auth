import React from 'react';
import Input from 'common/components/atoms/Input';
import Button from 'common/components/atoms/Button';
import './RegisterForm.scss';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom'
import Text from 'common/components/atoms/Text'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'

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
  const [showPassword, setShowPassword] = React.useState(false)
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
        placeholder="Enter your email"
        label="Email"
        type="email"
        disabled={isLoading}
        {...form.getInputProps('email')}
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
        placeholder="Enter your password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        disabled={isLoading}
        rightSection={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <IconEye size={16} /> : <IconEyeClosed size={16} />}
          </button>
        }
        {...form.getInputProps('password')}
      />

      <div className="button-wrapper">
        <Button fullWidth type="submit" loading={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
      </div>
      <div>
        <Link to="/login">
          <Text ta="center" color="black" td="underline" fw={700} fz="xs">
            Already have an account? Login!
          </Text>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
