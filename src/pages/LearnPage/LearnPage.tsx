import { wordsApi } from '@/pages/LearnPage/wordsApi';

const LearnPage = () => {
  const { data, isLoading, isFetching } = wordsApi.useGetWordsQuery();
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
    <div className="mt-10">
      {data &&
        data.map((word) => (
          <div key={word.id} className="flex gap-4 items-center capitalize ">
            <div className="font-bold  bg-slate-100 border-2 border-indigo-200 py-1 px-2">
              {word.word}
            </div>
            <div>{word.translation}</div>
            <button disabled={isFetching} onClick={() => handleDelete(word.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default LearnPage;
