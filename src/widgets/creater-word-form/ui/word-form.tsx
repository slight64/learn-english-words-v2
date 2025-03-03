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
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

interface WordFormProps {
  word?: string;
  translation?: string;
  createdAt?: string;
  updatedAt?: string[];
}

const formSchema = z.object({
  word: z.string().min(2, {
    message: 'Слово должно содержать минимум 2 символа.',
  }),
  translation: z.string().min(2, {
    message: 'Перевод должен содержать минимум 2 символа.',
  }),
  createdAt: z.string().optional(),
  updatedAt: z.array(z.string()).optional(),
});

export const WordForm = ({
  word,
  translation,
  createdAt,
  updatedAt,
}: WordFormProps) => {
  const { id } = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: word || '',
      translation: translation || '',
      createdAt: createdAt || '',
      updatedAt: updatedAt || [],
    },
  });
  const navigate = useNavigate();
  const [createWord] = wordsApi.useCreateWordMutation();
  const [editWord] = wordsApi.useEditWordMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (word && updatedAt) {
        values.updatedAt = values.updatedAt
          ? [...values.updatedAt, new Date().toISOString()]
          : [new Date().toISOString()];
        await editWord({ id, ...values }).unwrap();
        toast.success('Слово изменено');
      } else {
        values.createdAt = new Date().toISOString();
        await createWord(values).unwrap();
        toast.success('Слово добавлено');
      }
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
          className={form.formState.isValid ? 'bg-slate-300' : ''}
        >
          {word ? 'Изменить' : 'Добавить'}
        </Button>
      </form>
    </Form>
  );
};

export default WordForm;
