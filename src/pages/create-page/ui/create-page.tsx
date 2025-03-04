import { WordForm } from '@/entities/word';

const CreatePage = () => {
  return (
    <div className="px-10 py-8 mx-auto relative">
      <h1 className="text-2xl font-bold">Добавление новых слов в словарь</h1>
      <WordForm />
    </div>
  );
};

export default CreatePage;
