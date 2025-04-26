interface UserForgot {
    email: string
  }
  
  interface ForgotPasswordFormProps {
    data: UserForgot
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit: (data: UserForgot) => void
  }