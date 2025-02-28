import { useLoginMutation } from '@/entities/auth/model/authApi';
import GenericForm from '@/shared/ui/GenericForm';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Некорректный email' }),
  password: z
    .string()
    .min(6, { message: 'Минимальная длина пароля — 6 символов' }),
});

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await login(values).unwrap();
      console.log('Токен:', response.token);
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
        },
      ]}
      submitText={isLoading ? 'Войти...' : 'Войти'}
    />
  );
}

export default LoginForm;
