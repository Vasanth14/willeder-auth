import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './ForgotPassword.scss'
import Text from 'common/components/atoms/Text'
import { useForm } from '@mantine/form'
import { Link } from 'react-router-dom'

const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Please enter a valid email address',
    },
  })

  return (
    <form
      className="forgot-password-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'Enter your email'}
        label={'Email'}
        type={'email'}
        {...form.getInputProps('email')}
      />
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
