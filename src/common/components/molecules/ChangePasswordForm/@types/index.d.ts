interface changePasswordProps {
  password: string
  confirmPassword: string;
}
interface ChangePasswordFormProps {
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: () => void
}
