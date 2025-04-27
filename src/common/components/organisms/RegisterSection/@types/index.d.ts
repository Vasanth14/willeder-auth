interface UserRegister {
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
  }
  
  interface RegisterFormProps {
    data: UserRegister;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit: (data: UserRegister) => void;
    isLoading?: boolean;
  }
  