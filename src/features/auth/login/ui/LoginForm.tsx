import { useLoginMutation } from '@/entities/auth/model/authApi';
import GenericForm from '@/shared/ui/GenericForm';
import { useLocation, useNavigate } from 'react-router-dom';
import type { LoginFormValues } from '../model/schema';
import { loginSchema } from '../model/schema';

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await login(values).unwrap();
      console.log('Токен:', response.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Ошибка логина:', err);
    }
  };

  return (
    <GenericForm
      schema={loginSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      fields={[
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Введите email',
          description: 'Введите email',
        },
        {
          name: 'password',
          label: 'Пароль',
          placeholder: 'Введите пароль',
          description: 'Введите пароль',
          type: 'password',
        },
      ]}
      submitText={isLoading ? 'Войти...' : 'Войти'}
    />
  );
}

export default LoginForm;
