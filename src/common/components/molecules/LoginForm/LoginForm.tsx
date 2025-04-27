import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Link } from 'react-router-dom'

const LoginForm = ({ onSubmit }: LoginFormProps) => {
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
        placeholder={'Enter your username'}
        label={'Email/Username'}
        type={'email'}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'Enter your password'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <Link to='/forgot-password'>
        <Text ta={'right'} color="black" td={'underline'} fw={900} fz={'xxs'}>
          Forget Password
        </Text>
      </Link>
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
