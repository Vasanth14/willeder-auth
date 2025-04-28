import React from 'react';
import Input from 'common/components/atoms/Input';
import Button from 'common/components/atoms/Button';
import './ChangePasswordForm.scss';
import { IconEye, IconEyeClosed } from '@tabler/icons-react'

interface ChangePasswordFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    password: string;
    confirmPassword: string;
  };
  onSubmit: () => void;
  error?: string;
  isLoading?: boolean;
}

const ChangePasswordForm = ({
  onChange,
  data,
  onSubmit,
  error,
  isLoading = false,
}: ChangePasswordFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <form className="change-password-form">
      <Input
        placeholder="Enter new password"
        onChange={onChange}
        label="New Password"
        value={data.password}
        type="password"
        name="password"
        autoFocus
      />
      <Input
        placeholder="Confirm new password"
        onChange={onChange}
        label="Confirm Password"
        value={data.confirmPassword}
        type={showPassword ? 'text' : 'password'}
        name="confirmPassword"
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
      />
      {error && <div className="error-message">{error}</div>}
      <div className="button-wrapper">
        <Button
          onClick={onSubmit}
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Setting Up...' : 'Set New Password'}
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;