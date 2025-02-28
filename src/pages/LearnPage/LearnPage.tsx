import { WordCard } from '@/entities/word/ui/word-card';
import { wordsApi } from '@/pages/LearnPage/wordsApi';

const LearnPage = () => {
  const { data, isLoading } = wordsApi.useGetWordsQuery();
  const [deleteWord] = wordsApi.useDeleteWordMutation();
  const handleDelete = async (id: number) => {
    try {
      console.log('delete', id);
      await deleteWord(id).unwrap();
    } catch (e) {
      console.log('error', e);
    }
  };
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
