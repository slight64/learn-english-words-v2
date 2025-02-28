import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, z, ZodSchema } from 'zod';

interface GenericFormProps<T extends ZodSchema<FieldValues>> {
  schema: T;
  defaultValues: DefaultValues<TypeOf<T>>;
  onSubmit: SubmitHandler<z.infer<T>>;
  fields: Array<{
    name: Path<z.infer<T>>;
    label: string;
    placeholder?: string;
    description?: string;
  }>;
  submitText?: string;
}

function GenericForm<T extends ZodSchema<FieldValues>>({
  schema,
  defaultValues,
  onSubmit,
  fields,
  submitText = 'Отправить',
}: GenericFormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map(({ name, label, placeholder, description }) => (
          <FormField
            key={String(name)}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">{submitText}</Button>
      </form>
    </Form>
  );
}

export default GenericForm;
