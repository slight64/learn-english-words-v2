import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Некорректный email' }),
  password: z
    .string()
    .min(6, { message: 'Минимальная длина пароля — 6 символов' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
