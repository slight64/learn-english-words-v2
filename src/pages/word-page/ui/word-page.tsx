import { wordsApi } from '@/entities/word/model/words-api';
import { DeleteWordDialog } from '@/features/words/delete-word/ui/delete-word-dialog';
import { Button } from '@/shared/components/ui/button';
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
      {data && (
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <h3 className="font-medium">{data.word}</h3>
            <p className="text-sm text-gray-500">{data.translation}</p>
          </div>
          <DeleteWordDialog
            wordId={data.id}
            wordText={data.word}
            onDelete={handleDelete}
          >
            <Button variant="ghost" size="sm">
              Удалить
            </Button>
          </DeleteWordDialog>
        </div>
      )}
    </div>
  );
};

export default WordPage;
