interface UserLogin {
  email: string
  password: string
}

interface LoginFormProps {
  data: UserLogin
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: (data: UserLogin) => void
}
