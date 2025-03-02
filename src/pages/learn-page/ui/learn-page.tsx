import { wordsApi } from '@/entities/word/model/words-api';
import { WordCard } from '@/entities/word/ui/word-card';
import { toast } from 'sonner';

const LearnPage = () => {
  const { data, isLoading } = wordsApi.useGetWordsQuery();
  const [deleteWord, { isError }] = wordsApi.useDeleteWordMutation();
  const handleDelete = async (id: string) => {
    try {
      await deleteWord(id).unwrap();
    } catch (e) {
      throw new Error(e as string);
    }
  };

  if (isError) {
    toast.error('Ошибка при удалении слова');
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="px-10 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Слова для изучения</h1>
      <div className="mt-10 flex flex-col gap-4">
        {data &&
          data.map((word) => (
            <WordCard
              key={word.id}
              id={word.id}
              word={word.word}
              translation={word.translation}
              onDelete={handleDelete}
            ></WordCard>
          ))}
      </div>
    </div>
  );
};

export default LearnPage;
