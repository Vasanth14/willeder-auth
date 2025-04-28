import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import CheckBox from 'common/components/atoms/CheckBox'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Link } from 'react-router-dom'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {

  const [checked, setChecked] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },
  })

  return (
    <form
      className="login-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder="Enter your email"
        label="Email"
        type="email"
        disabled={isLoading}
        {...form.getInputProps('email')}
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
      <div className='flex justify-content-between align-items-center'>
        <CheckBox
          label="Remember Me"
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        />
        <Link to="/forgot-password">
          <Text ta="right" style={{ color: 'var(--mantine-color-gray-8)' }} td="underline" fw={700} fz="xs">
            Forget Password
          </Text>
        </Link>
      </div>
      <div className="button-wrapper">
        <Button fullWidth type="submit" disabled={isLoading} loading={isLoading}>
          {isLoading ? 'Logging In...' : 'Login'}
        </Button>
      </div>
      <div>
        <Link to="/forgot-password">
          <Text ta="center" color="black" td="underline" fw={700} fz="xs">
            Don't have an account yet? Sign Up!
          </Text>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm