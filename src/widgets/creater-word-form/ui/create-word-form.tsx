import { z } from 'zod';

import { wordsApi } from '@/entities/word/model/words-api';
import { Button } from '@/shared/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/Form';
import { Input } from '@/shared/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const formSchema = z.object({
  word: z.string().min(2, {
    message: 'Слово должно содержать минимум 2 символа.',
  }),
  translation: z.string().min(2, {
    message: 'Перевод должен содержать минимум 2 символа.',
  }),
});

function CreateWordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: '',
      translation: '',
    },
  });
  const navigate = useNavigate();
  const [createWord] = wordsApi.useCreateWordMutation();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      await createWord(values).unwrap();
      navigate('/learn');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Слово</FormLabel>
              <FormControl>
                <Input placeholder="Новое слово для изучения" {...field} />
              </FormControl>
              <FormDescription>
                Введите слово, которое хотите добавить
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="translation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Перевод</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите перевод вашего слова если хотите"
                  {...field}
                />
              </FormControl>
              <FormDescription>Перевод нового слова</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          onClick={() => {
            toast.success('Слово добавлено в словарь');
          }}
        >
          Добавить
        </Button>
      </form>
    </Form>
  );
}

export default CreateWordForm;
