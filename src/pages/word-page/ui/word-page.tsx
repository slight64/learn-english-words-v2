import { wordsApi } from '@/entities/word/model/words-api';
import { DeleteWordDialog } from '@/features/word/';
import { Button } from '@/shared/components/ui/button';
import { formatDate } from '@/shared/lib/utils';
import WordForm from '@/entities/word/ui/word-form';
import { Trash } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const WordPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to="/not-found" />;
  }

  const { data, isLoading, isError } = wordsApi.useGetOneWordQuery(id);
  const [deleteWord] = wordsApi.useDeleteWordMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteWord(id).unwrap();
      navigate('/learn');
    } catch (e) {
      throw new Error(e as string);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log('Error');
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="px-10 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Редактирование слова</h1>
      {data && (
        <div className="flex mt-4 justify-between rounded-lg border p-4">
          <div>
            <WordForm
              word={data.word}
              translation={data.translation}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
            />
          </div>
          <div>
            <p>{`Дата создания: ${formatDate(data.createdAt)}`}</p>
            <p>{`Дата последнего обновления:
              ${formatDate(data.updatedAt[data.updatedAt.length - 1])}
`}</p>
          </div>
          <div className="flex flex-col justify-between items-end">
            <Button variant="outline" onClick={() => navigate('/learn')}>
              Назад
            </Button>
            <DeleteWordDialog
              wordId={data.id}
              wordText={data.word}
              onDelete={handleDelete}
            >
              <Button className="bg-slate-300" variant="outline" size="icon">
                <Trash />
              </Button>
            </DeleteWordDialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordPage;
