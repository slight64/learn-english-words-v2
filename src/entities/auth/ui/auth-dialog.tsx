import { useLoginMutation } from '@/entities/auth/model/authApi';
import type { LoginFormValues } from '@/features/auth/login/model/schema';
import { loginSchema } from '@/features/auth/login/model/schema';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import GenericForm from '@/shared/factories/GenericForm';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useLocation, useNavigate } from 'react-router-dom';

interface DeleteWordDialogProps {
  children: React.ReactNode;
}

export function AuthDialog({ children }: DeleteWordDialogProps) {
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        aria-description="trst"
        className="text-black bg-slate-200"
      >
        <DialogHeader>
          <DialogTitle>Войти</DialogTitle>
        </DialogHeader>
        <DialogDescription>Введите почту и пароль</DialogDescription>
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
      </DialogContent>
    </Dialog>
  );
}
